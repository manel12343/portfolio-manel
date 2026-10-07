
import gestionCommandes from "../assets/Gestion_de_Commandes/accueil.png";
import recettes from "../assets/Recettes_de_cuisine/accuiel.png";
import tndConverter from "../assets/TNDConverter/accuiel.jpg";

export const projects = [
  {
    id: 1,
    title: "UniPresence",

    type: "video",

    src: null,

    image: null,

    description:
      "Application intelligente de gestion des présences basée sur la reconnaissance faciale en temps réel, avec identification automatique des étudiants, suivi des présences et génération de statistiques.",

    technologies: [
      "face_recognition",
      "Flutter",
      "Django REST Framework",
      "PostgreSQL",
      "OpenCV",
      "JWT",
      "OTP",
    ],

    github: "https://github.com/manel12343",
  },

  {
    id: 2,
    title: "Plateforme de gestion des rendez-vous médicaux",

    type: "placeholder",

    src: null,

    image: null,

    description:
      "Plateforme permettant aux patients de consulter les disponibilités et de gérer leurs rendez-vous, tout en offrant aux médecins un espace dédié au suivi des consultations.",

    technologies: [
      "Spring Boot",
      "Ionic",
      "Angular",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "JWT",
      "OTP",
    ],

    github: "https://github.com/manel12343",
  },

  {
    id: 3,
    title: "Vetements-store",

    type: "placeholder",

    src: null,

    image: null,

    description:
      "Application e-commerce permettant la gestion et la vente de vêtements en ligne, avec une interface moderne développée en Vue.js et un backend Express.js.",

    technologies: [
      "Vue.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "2FA",
    ],

    github: "https://github.com/manel12343",
  },

  {
    id: 4,
    title: "Gestion de Commandes",

    type: "image",

    image: gestionCommandes,

    description:
      "Application Django pour gérer clients, produits et commandes d’une entreprise de vente à distance. Interface simple pour suivre les ventes et faciliter la gestion commerciale.",

    technologies: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "SQLite",
    ],

    github: "https://github.com/manel12343",
  },

  {
    id: 5,
    title: "Recettes de cuisine",

    type: "image",

    image: recettes,

    description:
      "Application web personnelle de gestion de recettes permettant à l’utilisateur d’ajouter, consulter, modifier et supprimer ses propres recettes.",

    technologies: [
      "Ionic",
      "Angular",
      "TypeScript",
      "HTML",
      "SCSS",
    ],

    github: "https://github.com/manel12343",
  },

  {
    id: 6,
    title: "TNDConverter",

    type: "image",

    image: tndConverter,

    description:
      "Application Android simple permettant de convertir le dinar tunisien vers plusieurs devises, notamment l’USD, l’EUR et le GBP.",

    technologies: [
      "Java",
      "Android",
      "Gradle",
    ],

    github: "https://github.com/manel12343",
  },
];