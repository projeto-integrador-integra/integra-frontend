import {
  ListUsersQueryType,
  UserCreationType,
  UserType,
  UserUpdateType,
} from '@/schema/user.schema'
import { request } from './axios'

export const createUser = (data: UserCreationType) => request('post', '/users', { data })

export const getAllUsers = (params: Partial<ListUsersQueryType>) =>
  request<{ users: UserType[]; page: number; total: number; limit: number }>('get', '/users', {
    params,
  })

export const getCurrentUser = () => request<UserType>('get', '/users/me')

export const getUserById = (id: string) => request<UserType>('get', `/users/${id}`)

export const updateUserById = (id: string, data: UserUpdateType) =>
  request('patch', `/users/${id}`, { data })
