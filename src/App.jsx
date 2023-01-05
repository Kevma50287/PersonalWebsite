import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Banner from "./components/aboutMe/Banner";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
