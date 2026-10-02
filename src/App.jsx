
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Formation from "./components/Formation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">

        {/* Navigation */}
        <Navbar />

        {/* Pages */}
        <main>
          {/* Accueil */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="page">
                  <Hero />
                </div>
              }
            />

            {/* À propos */}
            <Route
              path="/about"
              element={
                <div className="page">
                  <About />
                  <Formation />
                </div>
              }
            />

            {/* Projets */}
            <Route
              path="/projects"
              element={
                <div className="page">
                  <Projects />
                </div>
              }
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={
                <div className="page">
                  <Contact />
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;

