import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Banner from "./components/AboutMe/Banner";
import AboutMe from "./components/AboutMe/AboutMe";
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

function App() {
  useEffect(() => {
    document.title="Kevin Ma - Portfolio"
  }, [])
  const {theme} = useTheme()
  
  return (
      <div className={`App ${theme}`}>
        <Header />
        <Banner />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
