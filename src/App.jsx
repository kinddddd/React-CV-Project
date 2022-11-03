import { useState } from "react";
import './App.scss';
import Hero from "./components/Hero";
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import { CV } from "./cv/CV"
import More from "./components/More";
import Header from "./components/Header";

const { hero, education, experience, languages } = CV;

function App() {
  const [showButton, setShowButton] = useState("education");
  return (
    <div className="App">
      <Header header={hero} />
      <div className="topPart">
        <Hero hero={hero} />
        <About aboutMe={hero.aboutMe} />
      </div>
      <span
      className="button"
      onClick={() => setShowButton("education")}
      >
        Educación
      </span>
      <span
        className="button"
        onClick={() => setShowButton("experience")}
      >
        Experiencia
      </span>
      <span
        className="button"
        onClick={() => setShowButton("more")}
      >
        Idiomas
      </span>
      <div>
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
  );
}

export default App;
