import Link from "next/link";
import {Button} from "@/app/components/ui/button";

export default function Header() {
    return (
       <header className="bg-white border-b border-gray-900 px-5 py-4 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div
                        className="w-11 h-11 bg-main-gradient rounded-toss flex items-center justify-center shadow-toss">
                        <span className="text-xl">🏪</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">오디</h1>
                        <p className="text-xs text-gray-500 font-medium">오늘 어디</p>
                    </div>
                </div>
                <Link href="/guide">
                    <Button variant="outline" size="sm" className="shadow-none">
                        서비스 안내
                    </Button>
                </Link>
            </div>
        </header>
    )
}