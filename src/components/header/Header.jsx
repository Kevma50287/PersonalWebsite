import React from "react";
import "./header.scss";
import Switch from "../Switch/Switch";
import Logo from "../../../public/assets/PersonalBrandLogo.png"

const Header = () => {
  return (
    <div id="header">
      <img className="logo" src={Logo} alt="brand logo"/>
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
