import React from "react";
import "./header.scss";
import Switch from "../Switch/Switch";

const Header = () => {
  return (
    <div id="header">
      <nav>
        <a href="#aboutme">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <Switch/>
    </div>
  );
};

export default Header;
