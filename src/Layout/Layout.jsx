import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* No pt-20 padding - navbar is fixed and hero section handles its own spacing */}
      <Outlet />
    </div>
  )
}

export default Layout