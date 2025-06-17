import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Win95home from '../src/pages/Win95home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Win95home />
  </StrictMode>,
)
