import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import profileImage from "../assets/profile.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section id="accueil" className="hero page-gradient">

      <div className="hero-container">

        {/* TEXTE */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Manel <span>Sekrafi</span>
          </h1>

          <p className="hero-description">
            développeuse Full Stack passionnée
            <br />
            par la création d’applications
            <br />
            web et mobiles modernes
          </p>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={profileImage}
            alt="Manel Sekrafi"
            className="hero-photo"
          />
        </motion.div>

        {/* LIENS */}
        <motion.div
          className="hero-links"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >

          <a
            href="https://github.com/manel12343"
            target="_blank"
            rel="noreferrer"
          >
            github.com/manel12343
          </a>

          <a href="mailto:manelsekrafi44@gmail.com">
            manelsekrafi44@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/manel-sekrafi"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/manel-sekrafi
          </a>

        </motion.div>

      </div>

      {/* BOUTON MAIL */}
      <a
        href="mailto:manelsekrafi443@gmail.com"
        className="mail-floating"
        aria-label="Envoyer un email"
      >
        <Mail size={18} />
      </a>

    </section>
  );
}

export default Hero;