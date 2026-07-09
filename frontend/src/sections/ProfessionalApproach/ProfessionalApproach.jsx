import { approachData } from "../../data/approachData";
import "./ProfessionalApproach.scss";

const ProfessionalApproach = () => {
  return (
    <section className="approach section-padding" id="enfoque">
      <div className="section-container">
        <div className="approach__header">
          <p className="approach__eyebrow">Enfoque profesional</p>

          <h2 className="section-title">
            Una forma de trabajo basada en la escucha, el orden y el acceso a
            derechos
          </h2>

          <p className="section-subtitle">
            Su perfil combina sensibilidad social, capacidad de organización y
            mirada institucional para acompañar personas, gestionar casos y
            articular soluciones.
          </p>
        </div>

        <div className="approach__grid">
          {approachData.map((item) => {
            const Icon = item.icon;

            return (
              <article className="approach__card" key={item.title}>
                <div className="approach__icon">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalApproach;