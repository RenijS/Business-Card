import React from "react";
import GhLogo from "../images/GitHub.png";
import InstaLogo from "../images/Instagram.png";

export default function Footer() {
  return (
    <div className="logoContainer">
      <a href="https://github.com/RenijS" target="_blank" rel="noreferrer">
        <img src={GhLogo} alt="GitHub Logo" />
      </a>
      <a
        href="https://www.instagram.com/reniz_stha/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={InstaLogo} alt="Instagram Logo" />
      </a>
    </div>
  );
}
