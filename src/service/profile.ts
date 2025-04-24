import { ProfileType } from '@/schema/profile.schema'
import { request } from './axios'

export const createProfile = async (data: ProfileType) => {
  return request('post', '/users', { data })
}
