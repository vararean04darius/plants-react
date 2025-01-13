import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Plants from './Plants.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Plants />
  </StrictMode>,
)
