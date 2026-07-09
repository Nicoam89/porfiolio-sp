import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profileData } from "../../data/profileData";
import "./Contact.scss";

const Contact = () => {
  const linkedinUrl = `https://${profileData.contact.linkedin}`;

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

          <a href={`tel:${profileData.contact.phone}`} className="contact__item">
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
            <Linkedin size={22} />
            <div>
              <span>LinkedIn</span>
              <strong>{profileData.contact.linkedin}</strong>
            </div>
          </a>

          <div className="contact__item">
            <MapPin size={22} />
            <div>
              <span>Ubicación</span>
              <strong>{profileData.location}</strong>
            </div>
          </div>

          <a
            href="/cv-stephanie.pdf"
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