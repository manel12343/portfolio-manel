
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((previous) => !previous);
    document.body.classList.toggle("dark-mode");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <span>MS</span>
        <small>MANEL</small>
      </Link>

      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Accueil
        </Link>

        <Link to="/about" onClick={closeMenu}>
          A propos
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          Projets
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <a
          href="/CV-Manel-Sekrafi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-nav"
        >
          Exporter CV
        </a>

        <button
          className="theme-button"
          onClick={toggleDark}
          aria-label="Changer le thème"
        >
          {dark ? <Sun size={12} /> : <Moon size={12} />}
        </button>

      </div>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

    </nav>
  );
}

export default Navbar;

<div className="footer-links">
  <h4>Navigation</h4>

  <Link to="/">Accueil</Link>
  <Link to="/projects">Projets</Link>
  <Link to="/contact">Contact</Link>
</div>
