import { ApiErrorType } from '@/schema/error.schema'
import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export async function request<T>(
  method: 'get' | 'post' | 'patch' | 'delete',
  url: string,
  data?: unknown
): Promise<T> {
  try {
    const res = await api.request<T>({ method, url, data })
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
