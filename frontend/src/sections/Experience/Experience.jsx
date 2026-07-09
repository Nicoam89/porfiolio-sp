import { Check } from "lucide-react";
import { experienceData } from "../../data/experienceData";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience section-padding" id="experiencia">
      <div className="section-container">
        <div className="experience__header">
          <p className="experience__eyebrow">Trayectoria</p>

          <h2 className="section-title">
            Experiencia en intervención social, atención y gestión de casos
          </h2>

          <p className="section-subtitle">
            Recorrido en espacios vinculados a salud mental, discapacidad, niñez,
            adolescencia, atención a usuarios y acompañamiento institucional.
          </p>
        </div>

        <div className="experience__timeline">
          {experienceData.map((item) => (
            <article className="experience__item" key={`${item.company}-${item.period}`}>
              <div className="experience__marker" />

              <div className="experience__card">
                <div className="experience__top">
                  <div>
                    <span className="experience__category">{item.category}</span>
                    <h3>{item.company}</h3>
                    <h4>{item.role}</h4>
                  </div>

                  <span className="experience__period">{item.period}</span>
                </div>

                <p className="experience__description">{item.description}</p>

                <ul className="experience__list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>
                      <Check size={18} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;