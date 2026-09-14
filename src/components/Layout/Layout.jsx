import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToHash from "../ScrollToHash/ScrollToHash";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import "./Layout.css";

function Layout() {
  return (
    <>
      <ScrollToHash />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <div className="layout__contact-clearance" aria-hidden="true" />
      <WhatsAppButton />
    </>
  );
}

export default Layout;
