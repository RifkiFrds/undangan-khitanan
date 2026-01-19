import { useEffect, useState } from "react";

export const useGuest = () => {
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isCustomGuest, setIsCustomGuest] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const name =
      params.get("to") ||
      params.get("guest") ||
      params.get("u") ||
      params.get("kpd");

    if (name) {
      setGuestName(name);
      setIsCustomGuest(true);
    }
  }, []);

  return { guestName, isCustomGuest };
};
