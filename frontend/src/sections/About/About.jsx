import { CheckCircle2 } from "lucide-react";
import { profileData } from "../../data/profileData";
import "./About.scss";

const About = () => {
  return (
    <section className="about section-padding" id="sobre-mi">
      <div className="section-container about__container">
        <div>
          <p className="about__eyebrow">Perfil profesional</p>
          <h2 className="section-title">{profileData.about.title}</h2>
          <p className="section-subtitle">{profileData.about.description}</p>
        </div>

        <div className="about__highlights">
          {profileData.about.highlights.map((item) => (
            <div className="about__highlight" key={item}>
              <CheckCircle2 size={22} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;