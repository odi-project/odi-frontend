// 전역 로딩 페이지

export default function Loading() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center space-y-6">
                {/* 로딩 애니메이션 */}
                <div className="relative">
                    <div className="w-20 h-20 bg-main-gradient rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl">🏪</span>
                    </div>

                    {/* 회전하는 링 */}
                    <div className="absolute inset-0 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
                </div>

                {/* 로딩 텍스트 */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-800">
                        로딩 중이에요
                    </h2>
                    <p className="text-sm text-gray-600">
                        잠시만 기다려주세요...
                    </p>
                </div>

                {/* 로딩 점들 */}
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-150"></div>
                </div>
            </div>
        </div>
    )
}