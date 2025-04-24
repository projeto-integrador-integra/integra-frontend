import { ApiErrorType } from '@/schema/error.schema'
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { refreshTokens } from './auth'

let isRefreshing = false
let failedQueue: (() => void)[] = []

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const retryApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

retryApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiErrorType>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    const isUnauthorized = error.response?.status === 401
    const isInvalidToken = error.response?.data?.code === 'INVALID_TOKEN'

    if (isUnauthorized && isInvalidToken && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push(() => {
            api(originalRequest).then(resolve).catch(reject)
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        await refreshTokens()
        isRefreshing = false
        failedQueue.forEach((cb) => cb())
        failedQueue = []
        return api(originalRequest)
      } catch (refreshError) {
        isRefreshing = false
        failedQueue = []
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export async function request<T>(
  method: 'get' | 'post' | 'patch' | 'delete',
  url: string,
  options?: {
    data?: unknown
    params?: Record<string, unknown>
  }
): Promise<T> {
  try {
    console.log('Request:', { method, url, options })
    const res = await retryApi.request<T>({
      method,
      url,
      data: options?.data,
      params: options?.params,
    })
    return res.data
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const data = err.response?.data as ApiErrorType
      throw data
    }
    throw {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Erro inesperado na requisição',
    } satisfies ApiErrorType
  }
}
