import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/nicepage.css'
import './index.css'
import './styles/professional-revamp.css'
import './styles/all-pages-revamp.css'
import './styles/clean-pages.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
