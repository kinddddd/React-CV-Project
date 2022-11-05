import { useState, useRef } from "react";
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
  const [skillButton, setSkillButton] = useState("Mostrar nivel en lenguajes de programación");
  
  return (
    <div className="App">
    <header>
      <Header header={hero} />
    </header>
    <main>
      <div className="topPart">
          <Hero hero={hero} />
      </div>
      {showSkills === false 
      ? <About aboutMe={hero.aboutMe} />
      :  <Skills />}
      {showSkills === false
      ? <p className="skillsButtonInactive" onClick={() => {setShowSkills(true); setSkillButton("Ocultar nivel en lenguajes de programación")}}>
        {skillButton}
      </p>
      : <p className="skillsButtonActive" onClick={() => {setShowSkills(false); setSkillButton("Mostrar nivel en lenguajes de programación");}}>
        {skillButton}
      </p>
      }
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
    </div>
  );
}

export default App;
