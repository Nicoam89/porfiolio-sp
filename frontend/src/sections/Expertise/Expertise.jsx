import { expertiseData } from "../../data/expertiseData";
import "./Expertise.scss";

const Expertise = () => {
  return (
    <section className="expertise section-padding" id="especializacion">
      <div className="section-container">
        <div className="expertise__header">
          <p className="expertise__eyebrow">Áreas de especialización</p>

          <h2 className="section-title">
            Una mirada social aplicada a la salud, la gestión y el acompañamiento
          </h2>

          <p className="section-subtitle">
            Experiencia orientada a la atención integral, el seguimiento de casos,
            la elaboración de informes y la articulación con dispositivos
            institucionales y comunitarios.
          </p>
        </div>

        <div className="expertise__grid">
          {expertiseData.map((item) => {
            const Icon = item.icon;

            return (
              <article className="expertise__card" key={item.title}>
                <div className="expertise__icon">
                  <Icon size={28} />
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

export default Expertise;