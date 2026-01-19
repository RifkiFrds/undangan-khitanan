import React, { useState } from 'react';
import InvitationPreview from './components/InvitationPreview';
import { CoupleData, GeneratedContent } from './types';

function App() {
    // Data for "Narendra Erabbani Musyafa" Khitanan
    const [formData] = useState<CoupleData>({
        eventType: 'KHITANAN',
        groomName: 'Sultan Ghaisan Sakha Abdilah',
        groomNickname: 'Sultan Ghaisan Sakha Abdilah',
        // Using standard Bapak & Ibu format derived from "Dewi Pujiana Sari... & Heri Kusmanto"
        groomParents: 'Bapak Ano Abdilah, S.T. &  Ibu Nursiamti',
        brideName: '',
        brideNickname: '',
        brideParents: '',

        // Event 1: Pengajian
        secondEventDate: '2026-02-01',
        secondEventTime: '16.00 WIB',
        secondEventName: 'Hajatan khitanan',

        // Event 2: Tasyakuran
        
        eventName: 'Selametan khitan',
        weddingDate: '2026-01-31',
        weddingTime: '19.30 WIB',

        locationName: 'Kediaman Keluarga',
        locationAddress: 'Perum Rajeg Gardenia blok D7 no 4H- RT 10/RW 11 Desa Rajeg Mulya, Kecamatan Rajeg',

        coverPhoto: 'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        // Specific photo for Narendra
        couplePhoto: '/anak.jpg',
        // Specific gallery images for Narendra
        gallery: [
            "/galeri-1.jpg",
            "/galeri-2.jpg",
            "/galeri-3.jpg",    
        ],
        donation: { // Fallback
            bankName: 'BNI',
            accountNumber: '0527484313',
            accountHolder: 'Dewi Pujianasari'
        },
        multiDonations: [
            {
                bankName: 'BNI',
                accountNumber: '0527484313',
                accountHolder: 'Dewi Pujianasari'
            },
            {
                bankName: 'BCA',
                accountNumber: '2730561302',
                accountHolder: 'Dewi Pujianasari'
            }
        ]
    });

    const [aiContent] = useState<GeneratedContent>({
        quote: "Ya Allah, muliakanlah anak kami ini, panjangkanlah umurnya, terangilah hatinya, teguhkanlah imannya, perbaikilah amal perbuatannya, lapangkanlah rezekinya, dekatkanlah pada kebaikan dan jauhkanlah dari keburukan. Ya Allah, kabulkanlah permohonan kami Ridhoilah keinginan kami dan terimalah amal kebaikan kami. Semoga engkau melimpahkan sholawat dan salam atas junjungan Nabi SAW, Keluarga dan para sahabatnya.",
        wetonAnalysis: "Sabtu Kliwon & Minggu Legi: Waktu yang sangat baik untuk hajat besar, melambangkan keteguhan hati dan keberkahan yang melimpah."
    });

    return (
        <InvitationPreview
            data={formData}
            aiContent={aiContent}
            isLoadingAI={false}
        />
    );
}

export default App;
