import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { Provider } from './components/ui/provider.tsx'
import { Routers } from './routes/index.tsx'
import { HeadProvider } from 'react-head'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Provider>
            <Routers />
          </Provider>
        </BrowserRouter>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </HeadProvider>
  </StrictMode>
)
