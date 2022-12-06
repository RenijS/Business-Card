import React from "react";
import FbLogo from "../images/Facebook.png";
import GhLogo from "../images/GitHub.png";
import InstaLogo from "../images/Instagram.png";
import TwitLogo from "../images/Twitter.png";

export default function Footer() {
  return (
    <div className="logoContainer">
      <img src={FbLogo} alt="Facebook Logo" />
      <img src={GhLogo} alt="GitHub Logo" />
      <img src={InstaLogo} alt="Instagram Logo" />
      <img src={TwitLogo} alt="Twitter Logo" />
    </div>
  );
}
