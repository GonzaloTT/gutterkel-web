import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Solutions from "../pages/Solutions/Solutions";
import Projects from "../pages/Projects/Projects";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import SolutionDetail from "../pages/SolutionDetail/SolutionDetail";
import Contact from "../pages/Contact/Contact";

function AppRouter() {
  const isGitHubPages =
    window.location.hostname.endsWith("github.io");

  const Router = isGitHubPages
    ? HashRouter
    : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/soluciones" element={<Solutions />} />
          <Route
            path="/soluciones/:slug"
            element={<SolutionDetail />}
          />
          <Route path="/proyectos" element={<Projects />} />
          <Route
            path="/proyectos/:slug"
            element={<ProjectDetail />}
          />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;