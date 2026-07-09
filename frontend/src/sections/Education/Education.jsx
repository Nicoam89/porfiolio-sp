import { GraduationCap } from "lucide-react";
import { educationData } from "../../data/educationData";
import "./Education.scss";

const Education = () => {
  return (
    <section className="education section-padding" id="formacion">
      <div className="section-container education__container">
        <div className="education__content">
          <p className="education__eyebrow">Formación académica</p>

          <h2 className="section-title">
            Formación universitaria orientada a la intervención social
          </h2>

          <p className="section-subtitle">
            Recorrido académico en Trabajo Social y formulación de proyectos
            sociales, con foco en análisis, planificación, intervención y
            acompañamiento de personas y comunidades.
          </p>
        </div>

        <div className="education__cards">
          {educationData.map((item) => (
            <article className="education__card" key={item.degree}>
              <div className="education__icon">
                <GraduationCap size={28} />
              </div>

              <div>
                <span>{item.status}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <strong>{item.detail}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;