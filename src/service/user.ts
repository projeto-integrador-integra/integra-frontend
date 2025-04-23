import { request } from './axios'
import { UserType, UserCreationType, UserUpdateType } from '@/schema/user.schema'

export const createUser = (data: UserCreationType) => request('post', '/users', data)

export const getAllUsers = () => request<UserType[]>('get', '/users')

export const getCurrentUser = () => request<UserType>('get', '/users/me')

export const getUserById = (id: string) => request<UserType>('get', `/users/${id}`)

export const updateUserById = (id: string, data: UserUpdateType) =>
  request('patch', `/users/${id}`, data)
