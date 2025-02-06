import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpaceLanding from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpaceLanding />
  </StrictMode>,
)
