import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Solutions from "../pages/Solutions/Solutions";
import Projects from "../pages/Projects/Projects";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import Contact from "../pages/Contact/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Solutions />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;