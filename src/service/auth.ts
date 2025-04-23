import { SignInType } from '@/schema/signin.schema'
import { SignUpType } from '@/schema/signup.schema'
import { request } from './axios'

type SignUpResponse = { message: string }

export const createAccount = async (data: SignUpType) => {
  return request<SignUpResponse>('post', '/signup', data)
}

export const authenticateUser = async (data: SignInType) => {
  return request<{ access_token: string }>('post', '/login', data)
}

export const signOut = () => request('post', '/logout')

export const refreshTokens = () => request('post', '/refresh')
