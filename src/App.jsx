import { useState } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import { Canvas } from "react-three-fiber";
import Banner from "./components/aboutMe/Banner";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <>
      <body>
        <div className="App">
          <Header />
          <Banner />
          <AboutMe />
          <Projects />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default App;
