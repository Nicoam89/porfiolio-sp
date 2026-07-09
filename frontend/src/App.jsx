import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Expertise from "./sections/Expertise/Expertise";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import ProfessionalApproach from "./sections/ProfessionalApproach/ProfessionalApproach";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProfessionalApproach />
        <Expertise />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;