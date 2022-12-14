import React from "react";
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="items">
              <p>π {item.name}</p>
              <p>πΊοΈ {item.where}</p>
              <p>π {item.date}</p>
              <p>βοΈ {item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;