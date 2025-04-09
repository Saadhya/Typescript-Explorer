import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './main/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import "bootstrap-icons/font/bootstrap-icons.css"

const queryClient= new QueryClient();
// 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
