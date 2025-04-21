import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
