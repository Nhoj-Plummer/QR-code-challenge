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
        </div>
        <div className="qr__code-subtext">
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
       
      </div>
    </div>
  )
}

export default Code
