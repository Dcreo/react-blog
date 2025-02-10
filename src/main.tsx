import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createRouter } from '@tanstack/react-router'
import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from 'react-query'

const queryClient = new QueryClient()

// Register the router instance for type safety
//declare module '@tanstack/react-router' {
  //interface Register {
    //router: typeof router
  //}
//}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
