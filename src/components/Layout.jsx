import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navbar />   {/* ← อยู่ทุกหน้า */}
            <Outlet />   {/* ← เปลี่ยนตาม path */}
        </div>
    )
}

export default Layout