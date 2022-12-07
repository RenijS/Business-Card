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
        <button className="mailBtn">
          <img src={Mail} alt="mail" /> Email
        </button>
        <button className="linkedinBtn">
          <img src={LinkedIn} alt="linkedin" /> LinkedIn
        </button>
      </div>
    </div>
  );
}
