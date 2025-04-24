import { SignInType } from '@/schema/signin.schema'
import { SignUpType } from '@/schema/signup.schema'
import { api } from './axios'

type SignUpResponse = { message: string }

export const createAccount = async (data: SignUpType) => {
  return api.post<SignUpResponse>('/signup', data).then((res) => res.data)
}

export const authenticateUser = async (data: SignInType) => {
  return api.post<{ access_token: string }>('/login', data).then((res) => res.data)
}

export const signOut = () => api.post('/logout').then((res) => res.data)

export const refreshTokens = () => api.post('/refresh').then((res) => res.data)
