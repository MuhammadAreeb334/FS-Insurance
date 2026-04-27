import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
