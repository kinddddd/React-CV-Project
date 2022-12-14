import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
      <div className="education">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="items">
              <p>π {item.name}</p>
              <p>πΊοΈ {item.where}</p>
              <p>π {item.date}</p>
            </div>
          );
        })}
      </div>
  );
};

export default Education;