
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>MANEL.</h3>
          <p>
            Développeuse web & mobile passionnée par la création
            d’expériences modernes, simples et élégantes.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>

          <a href="#accueil">Accueil</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Me retrouver</h4>

          <div className="social-icons">

            <a
              href="https://github.com/manel12343"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://linkedin.com/in/manel-sekrafi"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:manelsekrafi44@gmail.com"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>

          </div>
        </div>

        <button
          className="footer-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} />
        </button>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Manel Sekrafi. Tous droits réservés.
        </p>

        <p>
          Fait avec React & passion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

