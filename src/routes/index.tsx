import { Route, Routes } from 'react-router'

import { DashboardLayout } from '@/layout/dashboard'
import { AuthRoutes } from '@/layout/authRoutes'
import { Admin } from '@/pages/admin'
import { Dev } from '@/pages/dev'
import { Empresa } from '@/pages/empresa'
import { ErrorPage } from '@/pages/error'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { Pending } from '@/pages/pending'
import { Reject } from '@/pages/reject'

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route element={<AuthRoutes allowedRoles={['company', 'admin']} />}>
          <Route path="/empresa" element={<Empresa />} />
        </Route>
        <Route element={<AuthRoutes allowedRoles={['dev', 'mentor', 'admin']} />}>
          <Route path="/dev" element={<Dev />} />
        </Route>
        <Route element={<AuthRoutes allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>
      <Route path="/pending" element={<Pending />} />
      <Route path="/rejected" element={<Reject />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
