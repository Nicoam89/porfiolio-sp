import { Mail, MapPin, Phone } from "lucide-react";
import { profileData } from "../../data/profileData";
import "./Contact.scss";

const LinkedinIcon = ({ size = 22 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 9h4v12H2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Contact = () => {
  const linkedinUrl = `https://${profileData.contact.linkedin}`;
  const phoneHref = profileData.contact.phone.replace(/\s+/g, "");

  return (
    <section className="contact section-padding" id="contacto">
      <div className="section-container contact__container">
        <div className="contact__content">
          <p className="contact__eyebrow">Contacto</p>

          <h2 className="section-title">
            Disponible para oportunidades vinculadas a salud, gestión de casos y
            trabajo social
          </h2>

          <p className="section-subtitle">
            Podés contactarla para propuestas laborales, espacios de intervención
            social, dispositivos de atención a usuarios o equipos
            interdisciplinarios.
          </p>
        </div>

        <div className="contact__card">
          <a href={`mailto:${profileData.contact.email}`} className="contact__item">
            <Mail size={22} />
            <div>
              <span>Email</span>
              <strong>{profileData.contact.email}</strong>
            </div>
          </a>

          <a href={`tel:${phoneHref}`} className="contact__item">
            <Phone size={22} />
            <div>
              <span>Teléfono</span>
              <strong>{profileData.contact.phone}</strong>
            </div>
          </a>

          <a
            href={linkedinUrl}
            className="contact__item"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon size={22} />
            <div>
              <span>LinkedIn</span>
              <strong>{profileData.contact.linkedin}</strong>
            </div>
          </a>

          <a className="contact__item"
          href="https://maps.app.goo.gl/vkh24djB7kqSSezi6"
          target="_blank"
          >
            <MapPin size={22} />
            <div>
              <span>Ubicación</span>
              <strong>{profileData.location}</strong>
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/168H4-ZUZO5_ZC5B_H8DUm92gWTl_alvl/view?usp=sharing"
            
            download
            className="contact__download"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
