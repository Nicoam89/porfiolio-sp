import { skillsData } from "../../data/skillsData";
import "./Skills.scss";

const SkillsGroup = ({ title, items }) => {
  return (
    <article className="skills__group">
      <h3>{title}</h3>

      <div className="skills__tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
};

const Skills = () => {
  return (
    <section className="skills section-padding" id="habilidades">
      <div className="section-container">
        <div className="skills__header">
          <p className="skills__eyebrow">Conocimientos y habilidades</p>

          <h2 className="section-title">
            Competencias sociales, administrativas y técnicas
          </h2>

          <p className="section-subtitle">
            Un perfil que combina intervención social, gestión de casos,
            comunicación empática, redacción técnica y herramientas digitales de
            apoyo.
          </p>
        </div>

        <div className="skills__grid">
          <SkillsGroup
            title="Competencias profesionales"
            items={skillsData.professional}
          />

          <SkillsGroup
            title="Habilidades personales"
            items={skillsData.personal}
          />

          <SkillsGroup
            title="Salud y gestión"
            items={skillsData.health}
          />

          <SkillsGroup
            title="Herramientas"
            items={skillsData.tools}
          />

          <SkillsGroup
            title="Idiomas"
            items={skillsData.languages}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;