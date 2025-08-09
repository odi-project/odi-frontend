'use client'

import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import {MapPin, Clock, Thermometer, Sparkles, ArrowRight, Info, Target, RefreshCw} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Header from "@/app/components/layout/header";
import {useAppStore} from "@/app/store/app-store";
import {useCreateGreeting, useTimeBasedGreeting} from "@/app/hooks/use-greeting";

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  // Zustand 상태
  const { preferredMaxTokens, enableAutoRefresh, setLastGreetingUpdate } = useAppStore()

  // React Query 훅들
  const {
    data: greetingData,
    isLoading: isGreetingLoading,
    error: greetingError,
    refetch: refetchGreeting,
    isRefetching,
  } = useTimeBasedGreeting({
    maxTokens: preferredMaxTokens,
    enabled: mounted && enableAutoRefresh,
  })

  console.log('greetingData:', greetingData)

  const createGreetingMutation = useCreateGreeting()

  useEffect(() => {
    setMounted(true)
  }, [])

  // 수동 새로고침
  const handleRefreshGreeting = async () => {
    try {
      await refetchGreeting()
      setLastGreetingUpdate(new Date().toISOString())
    } catch (error) {
      console.error('인사말 새로고침 실패:', error)
    }
  }

  // 로딩 상태 확인
  const isLoadingGreeting = isGreetingLoading || isRefetching || createGreetingMutation.isPending

  if (!mounted) return null

  return (
      <div className="min-h-screen bg-white">
        {/* 헤더 */}
        <Header />
        {/* 메인 콘텐츠 */}
        <main className="px-5 py-6 space-y-6 pb-10">
          {/* 메인 히어로 카드 - 토스 스타일 */}
          <Card variant="gradient" className="p-8 relative overflow-hidden animate-fade-in">
            {/* 토스 특유의 배경 도형들 */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full"></div>

            <div className="relative z-10 text-center space-y-5">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">오디</h2>
                <p className="text-white/90 text-base font-medium">오늘어디</p>
              </div>

              {/* 토스 스타일 상태 카드 */}
              {/* AI 인사말 카드 */}
              <div className="bg-white/20 backdrop-blur-sm rounded-toss p-4 border border-white/30 relative">
                <div className="flex items-center justify-center space-x-2">
                  {isLoadingGreeting ? (
                      // 로딩 상태
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-yellow-300 rounded-full animate-spin"></div>
                        <p className="text-white font-bold text-lg">인사말 생성 중...</p>
                      </>
                  ) : greetingError ? (
                      // 에러 상태
                      <>
                        <span className="text-lg">😅</span>
                        <p className="text-white font-bold text-lg">앗, 잠시 문제가 있어요</p>
                      </>
                  ) : greetingData?.success ? (
                      // 성공 상태 - API에서 받은 인사말 표시
                      <>
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <p className="text-white font-bold text-lg">
                          {greetingData.data.response}
                        </p>
                      </>
                  ) : (
                      // 기본 상태
                      <>
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <p className="text-white font-bold text-lg">좋은 하루 되세요! 🌟</p>
                      </>
                  )}
                </div>

                {/* 새로고침 버튼 */}
                <button
                    onClick={handleRefreshGreeting}
                    disabled={isLoadingGreeting}
                    className="absolute top-2 right-2 p-1.5 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                    title="새로운 인사말 생성"
                >
                  <RefreshCw className={`w-4 h-4 text-white ${isLoadingGreeting ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </Card>

          {/* 위치 & 날씨 정보 - 토스 카드 스타일 */}
          <Card className="p-5 animate-slide-up" hoverable>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-lg">현재 정보</h3>
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-600" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-button">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">현재 위치</p>
                    <p className="font-semibold text-gray-900">서울시 강남구</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-button">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Thermometer className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">날씨</p>
                    <p className="font-semibold text-gray-900">맑음 18°C</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-button">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">시간</p>
                    <p className="font-semibold text-gray-900">오전 9:30</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 질문 카드 - 토스 스타일 */}
          <Card className="p-6 text-center bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100" hoverable>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-toss flex items-center justify-center mx-auto">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  오늘은 어디로 가볼까요?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI가 당신의 위치, 날씨, 시간을 분석해<br />
                  완벽한 장소를 추천해드려요
                </p>
              </div>
            </div>
          </Card>

          {/* CTA 버튼 - 토스 특유의 큰 버튼 */}
          <div className="space-y-4">
            <Link href="/type">
              <Button variant="primary" size="xl" fullWidth className="shadow-toss-hover">
                <Sparkles className="w-6 h-6 mr-3" />
                유형 선택하기
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>

          {/* 추가 옵션들 - 토스 스타일 작은 카드들 */}
          <div className="grid grid-cols-1 gap-3">
            <Link href="/guide">
              <Card className="p-4 bg-amber-50 border-amber-200" hoverable>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-button flex items-center justify-center">
                    <Info className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-amber-800">처음 사용하시나요?</p>
                    <p className="text-xs text-amber-600 mt-0.5">사용법을 알아보세요</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </div>
              </Card>
            </Link>

            <Card className="p-4 bg-blue-50 border-blue-200" hoverable>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-button flex items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-blue-800">지역 직접 선택</p>
                  <p className="text-xs text-blue-600">원하는 지역을 선택해보세요</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
  )
}
