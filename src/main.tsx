import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/feather-ks.css";
import "./assets/css/feather-k-override.css";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
