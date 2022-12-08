import React from "react";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/LinkedIn.png";

export default function Profile() {
  return (
    <div className="profileInfoContainer">
      <p className="name">Renij Shrestha</p>
      <p className="title">Graduate Developer</p>
      <p className="website">website</p>
      <div className="profBtnContainer">
        <a href="mailto: renijshrestha8@gmail.com">
          <button className="mailBtn">
            <img src={Mail} alt="mail" /> Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/renij-shrestha-a2ab53210/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="linkedinBtn">
            <img src={LinkedIn} alt="linkedin" /> LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
