import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';

import Win95home from '../src/pages/Win95home'

import Boot from './components/Boot'

createRoot(document.getElementById('root')).render(
    <>
      <Win95home />
      <Analytics />
    </>
)
