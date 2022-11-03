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
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Header header={hero} />
      <div className="topPart">
        <Hero hero={hero} />
        <About aboutMe={hero.aboutMe} />
      </div>
      <button
      className="button"
      onClick={() => setShowEducation(true)}
      >
        Educación
      </button>
      <button
        className="button"
        onClick={() => setShowEducation(false)}
      >
        Experiencia
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More languages={languages} />

    </div>
  );
}

export default App;
