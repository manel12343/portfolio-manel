import { useState } from "react";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Contact Portfolio - ${form.name}`
    );

    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:manelsekrafi44@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact page-gradient">

      <div className="contact-container">

        <div className="contact-card">

          <h2>
            Contact
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">
                NOM & PRENOM
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">
              Envoyer
            </button>

          </form>

        </div>

        <div className="contact-links">

          <a
            href="https://github.com/manel12343"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>github.com/manel12343</span>
          </a>

          <a
            href="https://linkedin.com/in/manel-sekrafi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <span>linkedin.com/in/manel-sekrafi</span>
          </a>

          <a href="mailto:manelsekrafi44@gmail.com">
            <Mail />
            <span>manelsekrafi44@gmail.com</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;