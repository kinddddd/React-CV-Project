import { useState } from "react";
import './App.scss';
import Hero from "./components/Hero";
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import { CV } from "./cv/CV"
import More from "./components/More";
import Header from "./components/Header";
import Skills from "./components/Skills";

const { hero, education, experience, languages } = CV;

function App() {

  const [showButton, setShowButton] = useState("education");
  const [showSkills, setShowSkills] = useState(false);
  const [skillButton, setSkillButton] = useState("Mostrar habilidades técnicas")
  
  return (
    <div className="App">
    <header>
      <Header header={hero} />
    </header>
    <main>
      <div className="topPart">
          <Hero hero={hero} />
      </div>
      <About aboutMe={hero.aboutMe} />
      <div className="bottomPart">
        <div className="buttonBox">
          {showButton === "education"
          ? <span
            className="underlinedButton"
            onClick={() => setShowButton("education")}
            >
              Educación
            </span>
          : <span
          onClick={() => setShowButton("education")}
          >
            Educación
          </span>
          } 
          {showButton === "experience"
          ? <span
            className="underlinedButton"
            onClick={() => setShowButton("experience")}
          >
            Experiencia
          </span>
          : <span
            onClick={() => setShowButton("experience")}
          >
            Experiencia
          </span>
          }
          {showButton === "more"
          ? <span
            className="underlinedButton"
            onClick={() => setShowButton("more")}
          >
            Idiomas
          </span>
          : <span
            onClick={() => setShowButton("more")}
          >
            Idiomas
          </span>
          }
        </div>
        <div className="bottomInfo">
          {showButton === "education" && (
              <Education education={education} />
            )}
            {showButton === "experience" && (
              <Experience experience={experience} />
            )}
            {showButton === "more" && (
              <More languages={languages} />
            )}
        </div>

      </div>
    </main>
    <footer>
      {showSkills === false
      ? <p onClick={() => {setShowSkills(true); setSkillButton("Mostrar habilidades técnicas")}}>
        {skillButton}
      </p>
      : <p className="underlinedbutton" onClick={() => {setShowSkills(true); setSkillButton("Ocultar habilidades técnicas")}}>
        {skillButton}
      </p>
      }
    </footer>
    </div>
  );
}

export default App;
