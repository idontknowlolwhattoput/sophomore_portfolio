import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
  
import Win95home from '../src/pages/Win95home'
import WIP from '../src/pages/WIP'
import Test from "../src/Test/Consumer"


createRoot(document.getElementById('root')).render(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Win95home/>} />
          <Route path="/" element={<WIP />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
)
  