import axios, {AxiosResponse} from "axios";
import {ApiError, ApiResponse} from "@/app/types/api";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000, // 15초 타임아웃
})

// 요청 인터셉터 (로깅, 인증 등)
apiClient.interceptors.request.use(
    (config) => {
        // 요청 로깅 (개발 환경에서만)
        if (process.env.NODE_ENV === 'development') {
            console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
                data: config.data,
                params: config.params,
            })
        }
        return config
    },
    (error) => {
        console.error('❌ Request Error:', error)
        return Promise.reject(error)
    }
)

// 응답 인터셉터 (에러 처리, 로깅)
apiClient.interceptors.response.use(
    (response) => {
        // 응답 로깅 (개발 환경에서만)
        if (process.env.NODE_ENV === 'development') {
            console.log(`✅ API Response: ${response.config.url}`, {
                status: response.status,
                data: response.data,
            })
        }
        return response.data // ApiResponse 형태로 반환
    },
    (error) => {
        const errorResponse: ApiError = error.response?.data || {
            success: false,
            code: error.response?.status || 500,
            message: error.message || '네트워크 오류가 발생했습니다.',
            error: {
                errorCode: 'NETWORK_ERROR',
                errorMessage: error.message || '네트워크 연결을 확인해주세요.',
                timestamp: new Date().toISOString(),
            },
            timestamp: new Date().toISOString(),
            traceId: `client_${Date.now()}`,
        }

        console.error('❌ API Error:', {
            url: error.config?.url,
            method: error.config?.method,
            status: error.response?.status,
            message: errorResponse.message,
            traceId: errorResponse.traceId,
        })

        return Promise.reject(errorResponse)
    }
)