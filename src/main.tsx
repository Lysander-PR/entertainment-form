import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/app.router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from '@/auth/components/SessionProvider'
import { setupAuthInterceptor } from '@/auth/interceptors/auth-response.interceptor'
import { consumeTokenFromUrl } from '@/auth/utils/token-handoff'

import './index.css'

consumeTokenFromUrl()
setupAuthInterceptor()

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <RouterProvider router={router} />
      </SessionProvider>
    </QueryClientProvider>
  </StrictMode>,
)
