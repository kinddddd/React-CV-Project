import React from "react";
import "./Skills.scss"

const Skills = () => {
  return (
    <div>
      <div className="container">
        <div className="container__progressbars">
          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-html shadow-html"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-html">HTML5</span>
          </div>
          
          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-scss shadow-scss"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-scss">CSS3</span>
          </div>

          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-js shadow-js"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-js">JavaScript</span>
          </div>

          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-node shadow-node"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-node">Node.js</span>
          </div>

          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-react shadow-react"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-react">React</span>
          </div>
          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-angular shadow-angular"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-angular">Angular</span>
          </div>
          <div className="progressbar">
            <svg className="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="progressbar__svg-circle circle-angular shadow-vue"
              >
                {" "}
              </circle>
            </svg>
            <span className="progressbar__text shadow-vue">Mongo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
