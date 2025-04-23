import { useRole } from '@/hook/useRole'
import { ReactNode } from 'react'

interface CanAccessProps {
  roles: string | string[]
  children: ReactNode
}

export const CanAccess = ({ roles, children }: CanAccessProps) => {
  const can = useRole(roles)
  return can ? <>{children}</> : null
}
