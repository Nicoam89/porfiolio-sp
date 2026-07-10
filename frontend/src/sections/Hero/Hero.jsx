import { ArrowDown, Download, Mail } from "lucide-react";
import { profileData } from "../../data/profileData";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="section-container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">{profileData.hero.eyebrow}</p>

          <h1 className="hero__title">{profileData.name}</h1>

          <h2 className="hero__subtitle">{profileData.title}</h2>

          <p className="hero__description">{profileData.hero.description}</p>

          <div className="hero__actions">
            <a href="#experiencia" className="hero__button hero__button--primary">
              Ver experiencia
              <ArrowDown size={18} />
            </a>

            <a
              href="https://drive.google.com/file/d/168H4-ZUZO5_ZC5B_H8DUm92gWTl_alvl/view?usp=sharing"
              className="hero__button hero__button--secondary"
              download
            >
              Descargar CV
              <Download size={18} />
            </a>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="hero__button hero__button--ghost"
            >
              Contactar
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero__card">
          <span className="hero__card-label">Enfoque profesional</span>

          <h3>Salud, acompañamiento y gestión social</h3>

          <p>
            Una mirada social aplicada a la atención de usuarios, el seguimiento
            de casos y la articulación con dispositivos institucionales.
          </p>

          <div className="hero__tags">
            <span>Salud</span>
            <span>Gestión de casos</span>
            <span>Informes técnicos</span>
            <span>Enfoque de derechos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;