import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Logon } from './security/logon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logon />
  </StrictMode>,
)
