import { useAuth } from '@/context/auth'

export function useRole(required: string | string[]) {
  const { user } = useAuth()

  if (!user) return false

  const roles = Array.isArray(required) ? required : [required]
  return roles.includes(user.role)
}
