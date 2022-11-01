import { useState } from "react";
import './App.scss';
import Hero from "./components/Hero";
import About from "./components/About"
import { CV } from "./cv/CV"

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
    </div>
  );
}

export default App;
