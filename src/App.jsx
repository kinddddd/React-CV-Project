import { useState } from "react";
import './App.scss';
import Hero from "./components/Hero";
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import { CV } from "./cv/CV"

const { hero, education, experience } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About aboutMe={hero.aboutMe} />
      <button
      className="custom-btn btn-4"
      onClick={() => setShowEducation(true)}
      >
        Educación
      </button>
      <button
        className="custom-btn btn-4"
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

    </div>
  );
}

export default App;
