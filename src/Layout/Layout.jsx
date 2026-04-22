import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
