export interface ApiResponse<T = any> {
    success: boolean
    code: number
    message: string
    data: T
    timestamp: string
    traceId: string
}

export interface ApiError {
    success: false
    code: number
    message: string
    error: {
        errorCode: string
        errorMessage: string
        fieldErrors?: Array<{
            field: string
            rejectedValue: any
            message: string
        }>
        timestamp: string
    }
    timestamp: string
    traceId: string
}

export interface GreetingRequest {
    message: string
    maxTokens?: number
}

export interface GreetingResponse {
    response: string
    processedAt: string | null
}