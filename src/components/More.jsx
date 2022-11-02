import React from 'react'
import "./More.scss"

const More = ({languages}) => {
  return (
    <div>
        <div className="education card">
            {languages.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                <span className="name">📋 {item.language}</span>
                <span> ____ {item.level}</span>
                </div>
            );
        })}
      </div>
    </div>
  )
}

export default More