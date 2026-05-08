import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  // ← import เพิ่ม
import UserHomeSection from './components/UserHomeSection.jsx' 
import Layout from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* ← ครอบด้วย BrowserRouter */}
      <Routes>
        <Route element={<Layout />}>
        
          <Route path='/' element={<App />} />
          <Route path='/userHomeSection' element={<UserHomeSection />} />

          {/* เพิ่ม route อื่นๆ ตรงนี้ */}
        </Route>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
