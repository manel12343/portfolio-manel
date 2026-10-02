import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import aboutImage from "../assets/about.jpg";

import "./About.css";

function About() {
  return (
    <section id="apropos" className="about page-gradient">

      <div className="about-container">

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-intro">
            Je suis
          </p>

          <h2>
            Manel <span>Sekrafi</span>
          </h2>

          <p>
            étudiante en Master Professionnel en Ingénierie
            de Logicielle et des Connaissances, passionnée
            par la création de solutions numériques,
            modernes et innovantes.
          </p>

          <p>
            Diplômée en Sciences de l’Informatique,
            spécialité Génie Logiciel et Systèmes
            d’Information, j’ai développé au cours de mon
            parcours académique et de mes projets une solide
            expérience en développement web et mobile,
          </p>

          <p>
            notamment avec Java, Spring Boot, Vue.js,
            Express.js, Django et Flutter. Curieuse,
            rigoureuse et toujours à la recherche de nouveaux
            défis, j’aime transformer des idées en applications
            concrètes, performantes et pensées pour répondre
            aux besoins des utilisateurs.
          </p>
        </motion.div>

        <motion.div
          className="about-photo-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImage}
            alt="Manel Sekrafi"
            className="about-photo"
          />
        </motion.div>

      </div>

      

    </section>
  );
}

export default About;