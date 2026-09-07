import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

function Layout() {
  return (
    <>
      <ScrollToHash />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;