import { profileData } from "../../data/profileData";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container footer__container">
        <p>
          © {currentYear} {profileData.name}. Portfolio profesional.
        </p>

        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>
  );
};

export default Footer;