import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profileData } from "../../data/profileData";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Áreas", href: "#especializacion" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Formación", href: "#formacion" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="section-container navbar__container">
        <a href="#inicio" className="navbar__brand" onClick={closeMenu}>
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

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}>
        <nav>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profileData.contact.email}`}
          className="navbar__mobile-cta"
          onClick={closeMenu}
        >
          Contactar
        </a>
      </div>
    </header>
  );
};

export default Navbar;