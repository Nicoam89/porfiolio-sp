import { profileData } from "../../data/profileData";
import "./Navbar.scss";

const Navbar = () => {
const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Áreas", href: "#especializacion" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formación", href: "#formacion" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

  return (
    <header className="navbar">
      <div className="section-container navbar__container">
        <a href="#inicio" className="navbar__brand">
          {profileData.name.split(" ")[0]}
          <span>.</span>
        </a>

        <nav className="navbar__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${profileData.contact.email}`} className="navbar__cta">
          Contactar
        </a>
      </div>
    </header>
  );
};

export default Navbar;