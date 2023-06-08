import React from "react"
import "./code.css"

function Code() {
  return (
    <div className="qr__code-container section_padding">
      <div className="qr__code-content">
        <div className="qr__code-image">
          <img src="./assets/qr-code.png" alt="code"/>
        </div>
        <div className="qr__code-text">
          <h2>Improve your front-end skills by building projects</h2>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Code
