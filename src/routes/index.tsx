import { Route, Routes } from 'react-router'

import { Empresa } from '@/pages/empresa'
import { Home } from '@/pages/home'
import { Dev } from '@/pages/dev'
import { Admin } from '@/pages/admin'
import { ErrorPage } from '@/pages/error'
import { DashboardLayout } from '@/layout/dashboard'

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<DashboardLayout />}>
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
