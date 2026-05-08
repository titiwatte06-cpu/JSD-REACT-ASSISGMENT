import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  // ← import เพิ่ม
import Home from './components/Home.jsx' 
import Owner from './components/Owner.jsx'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* ← ครอบด้วย BrowserRouter */}
      <Routes>
        <Route element={<Layout />}>
        
          <Route path='/' element={<App />} />
          <Route path='/owner' element={<Owner />} />

          {/* เพิ่ม route อื่นๆ ตรงนี้ */}
        </Route>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
