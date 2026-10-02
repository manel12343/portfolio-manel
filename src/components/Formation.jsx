
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import "./Formation.css";

const formations = [
  {
    title: "Baccalauréat Technique",
    school: "Lycée Ibn Khaldoun, Médenine",
    date: "2022 – 2023",
  },
  {
    title:
      "Licence en Sciences de l’Informatique, spécialité Génie Logiciel et Systèmes d’Information",
    school: "ISIMED, Médenine",
    date: "2023 – 2026",
  },
  {
    title:
      "Master Professionnel en Ingénierie Logicielle et des Connaissances",
    school: "ISIMED, Médenine",
    date: "2026 – Présent",
  },
];

function Formation() {
  return (
    <section id="formation" className="formation page-gradient">

      <div className="formation-container">

        <motion.div
          className="formation-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="formation-intro">
            Mon parcours
          </p>

          <h2>
            Ma <span>Formation</span>
          </h2>

          <div className="formation-timeline">

            {formations.map((formation, index) => (
              <motion.div
                className="formation-item"
                key={formation.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
              >

                <div className="formation-dot"></div>

                <div className="formation-info">

                  <h3>
                    {formation.title}
                  </h3>

                  <p>
                    {formation.school}
                  </p>

                  <span>
                    {formation.date}
                  </span>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

      <a
        href="mailto:manelsekrafi44@gmail.com"
        className="mail-floating"
        aria-label="Envoyer un email"
      >
        <Mail size={18} />
      </a>

    </section>
  );
}

export default Formation;
