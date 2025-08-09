import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Providers from "@/app/providers";

export const metadata: Metadata = {
    title: '오디 - 오늘 어디 갈까?',
    description: 'AI가 추천하는 맞춤형 음식점과 장소',
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body>
            <Providers>
                {/* PC: 중앙 모바일 뷰 / 모바일: 전체 화면 */}
                <div className="w-full max-w-[375px] mx-auto bg-white min-h-screen shadow-mobile md:shadow-mobile">
                    {children}
                </div>
            </Providers>
            </body>
        </html>
    )
}
