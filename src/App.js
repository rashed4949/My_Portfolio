import "./css/App.css";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/AboutMe"));
const Projects = lazy(() => import("./pages/Projects"));
const Profiles = lazy(() => import("./pages/Profiles"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <AppHeader />
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </AnimatePresence>
  );
}

export default App;
