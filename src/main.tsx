import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/app.router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TokenRefreshProvider } from '@/auth/components/TokenRefreshProvider'

import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TokenRefreshProvider>
        <RouterProvider router={router} />
      </TokenRefreshProvider>
    </QueryClientProvider>
  </StrictMode>,
)
