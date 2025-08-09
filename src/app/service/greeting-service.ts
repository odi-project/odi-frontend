import { apiClient } from '@/app/lib/api-client'
import type { ApiResponse, GreetingRequest, GreetingResponse } from '@/app/types/api'
import {AxiosResponse} from "axios";

export const greetingService = {
    // AI 인사말 생성
    getGreeting: async (
        request: GreetingRequest
    ): Promise<AxiosResponse<ApiResponse<GreetingResponse>>> => {
        const response = await apiClient.post<ApiResponse<GreetingResponse>>('/ai/greeting', request)
        return response // status, headers, config, data 모두 포함
    },

    // 시간대별 인사말 생성 (편의 함수)
    getTimeBasedGreeting: async (maxTokens: number = 100): Promise<AxiosResponse<ApiResponse<GreetingResponse>>> => {
        const currentHour = new Date().getHours()
        let message = '인사말'

        if (currentHour >= 5 && currentHour < 12) {
            message = '좋은 아침'
        } else if (currentHour >= 12 && currentHour < 18) {
            message = '좋은 오후'
        } else if (currentHour >= 18 && currentHour < 22) {
            message = '좋은 저녁'
        } else {
            message = '좋은 밤'
        }

        return greetingService.getGreeting({ message, maxTokens })
    }
}