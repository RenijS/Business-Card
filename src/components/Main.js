import React from "react";
import Profile from "./Profile";
import About from "./About";
import Interest from "./Interest";
import { useState } from "react";

export default function Main() {
  const [theme, setTheme] = useState("Light");

  function toggleTheme() {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
    if (document.querySelector("body").classList.contains("dark")) {
      document.querySelector("body").classList.remove("dark");
    } else {
      document.querySelector("body").classList.add("dark");
    }
  }

  return (
    <>
      <button className="modeBtn" onClick={toggleTheme}>
        {theme === "Light" ? "Dark" : "Light"} mode
      </button>
      <div className="mainContainer">
        <Profile />
        <About />
        <Interest />
      </div>
    </>
  );
}
