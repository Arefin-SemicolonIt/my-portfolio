import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="fixed container mx-auto z-10">
      <Navbar />
      </div>
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
