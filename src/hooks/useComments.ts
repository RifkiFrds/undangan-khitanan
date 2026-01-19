import { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { featureFlags } from "@/lib/featureFlags";
import { timeAgo } from "@/lib/utils";

export interface CommentData {
    id?: number;
    name: string;
    msg: string;
    time: string;
}
export const useComments = (
    guestName: string,
    isCustomGuest: boolean
) => {
    console.log("useComments mounted", {
        guestName,
        isCustomGuest,
    });

    const [comments, setComments] = useState<CommentData[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [existingCommentId, setExistingCommentId] = useState<number | null>(null);
    const [newCommentName, setNewCommentName] = useState("");
    const [newCommentMsg, setNewCommentMsg] = useState("");
    const [showModal, setShowModal] = useState(false);

    /* ================= FETCH ================= */
    useEffect(() => {
        if (!featureFlags.comments || !supabase) return;

        const fetchComments = async () => {
            const { data, error } = await supabase
                .from("comments")
                .select("*")
                .order("created_at", { ascending: false });

            if (error || !data) {
                console.warn("Fetch comments failed");
                return;
            }

            setComments(
                data.map((c: any) => ({
                    id: c.id,
                    name: c.name,
                    msg: c.message,
                    time: timeAgo(c.created_at),
                }))
            );
        };

        fetchComments();
    }, []);

    /* ================= OPEN MODAL ================= */
    const openModal = async () => {
        setIsSuccess(false);
        setNewCommentMsg("");
        setExistingCommentId(null);
        setNewCommentName(isCustomGuest ? guestName : "");

        if (featureFlags.comments && supabase && isCustomGuest) {
            const { data } = await supabase
                .from("comments")
                .select("id, message")
                .eq("name", guestName)
                .limit(1);

            if (data && data.length > 0) {
                setExistingCommentId(data[0].id);
                setNewCommentMsg(data[0].message);
            }
        }

        setShowModal(true);
    };

    /* ================= SUBMIT ================= */
    const submitComment = async () => {
        if (!newCommentName || !newCommentMsg) return;

        setIsSubmitting(true);

        if (featureFlags.comments && supabase) {
            let error;

            if (existingCommentId) {
                const res = await supabase
                    .from("comments")
                    .update({ message: newCommentMsg })
                    .eq("id", existingCommentId);
                error = res.error;
            } else {
                const res = await supabase
                    .from("comments")
                    .insert([{ name: newCommentName, message: newCommentMsg }]);
                error = res.error;
            }

            if (error) {
                console.error("Supabase error:", error);
            }
        }

        // Optimistic UI (tanpa realtime)
        setComments((prev) => {
            if (existingCommentId) {
                return prev.map((c) =>
                    c.name === newCommentName
                        ? { ...c, msg: newCommentMsg, time: "Diedit barusan" }
                        : c
                );
            }

            return [
                {
                    name: newCommentName,
                    msg: newCommentMsg,
                    time: "Baru saja",
                },
                ...prev,
            ];
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return {
        comments,
        showModal,
        setShowModal,
        isSubmitting,
        isSuccess,
        existingCommentId,
        newCommentName,
        setNewCommentName,
        newCommentMsg,
        setNewCommentMsg,
        openModal,
        submitComment,
    };
};
