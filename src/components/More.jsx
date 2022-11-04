import React from 'react'
import "./More.scss"

const More = ({languages}) => {
  return (
        <div className="languages">
            {languages.map((item) => {
            return (
                <div key={JSON.stringify(item)} className="items">
                <p>📋 {item.language} {item.level}</p>
                </div>
            );
        })}
      </div>
  )
}

export default More