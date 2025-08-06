import {Card} from "@/app/components/ui/card";
import { Heart, Code, Mail, Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="mt-8 px-4 pb-6">
            <Card className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
                <div className="text-center space-y-4">
                    {/* 서비스 정보 */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-2xl">🍽️</span>
                            <h3 className="font-bold text-gray-800">와이어프레임</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            맞춤형 음식점 & 장소 추천 서비스
                        </p>
                    </div>

                    <div className="w-full h-px bg-gray-200"></div>

                    {/* 개발자 정보 */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-2 text-gray-700">
                            <Code className="w-4 h-4" />
                            <span className="text-sm font-medium">Developed with</span>
                            <Heart className="w-4 h-4 text-red-500" />
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-gray-800">
                                Developer: Claude & Human
                            </p>
                            <p className="text-xs text-gray-600">
                                Built with Next.js 15 & TypeScript
                            </p>
                        </div>

                        {/* 연락처 */}
                        <div className="flex items-center justify-center space-x-4 text-gray-500">
                            <div className="flex items-center space-x-1 text-xs">
                                <Mail className="w-3 h-3" />
                                <span>hello@wireframe.app</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs">
                                <Github className="w-3 h-3" />
                                <span>@wireframe</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200"></div>

                    {/* 저작권 */}
                    <div className="text-xs text-gray-500">
                        <p>© 2025 Wireframe. All rights reserved.</p>
                        <p className="mt-1">Made in Seoul, Korea 🇰🇷</p>
                    </div>
                </div>
            </Card>
        </footer>
    )
}