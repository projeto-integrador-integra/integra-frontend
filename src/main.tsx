import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeadProvider } from 'react-head'
import { BrowserRouter } from 'react-router'

import { Provider } from './components/ui/provider.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import { AuthProvider } from './context/auth.tsx'
import { Routers } from './routes/index.tsx'
import { queryClient } from './service/query/queryClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Provider>
            <AuthProvider>
              <Routers />
              <Toaster />
            </AuthProvider>
          </Provider>
        </BrowserRouter>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </HeadProvider>
  </StrictMode>
)
