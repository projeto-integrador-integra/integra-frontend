import { Navigate, Outlet } from 'react-router'

import { UserRole } from '@/constants/user'
import { useAuth } from '@/context/auth'
import { Loading } from '@/components/loading'

export function AuthRoutes({ allowedRoles }: { allowedRoles: UserRole[] }) {
  const { user, loading } = useAuth()
  const hasRole = user && allowedRoles.includes(user.role)

  if (loading) {
    return <Loading />
  }

  if (user && user.approvalStatus === 'pending') {
    return <Navigate to="/pending" />
  }
  if (user && ['reject', 'suspended'].includes(user.approvalStatus)) {
    return <Navigate to="/rejected" />
  }

  return hasRole ? <Outlet /> : <Navigate to="/login" />
}
