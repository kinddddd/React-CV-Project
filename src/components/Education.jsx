import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
      <div className="education">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="items">
              <p>📕 {item.name}</p>
              <p>🗺️ {item.where}</p>
              <p>📆 {item.date}</p>
            </div>
          );
        })}
      </div>
  );
};

export default Education;