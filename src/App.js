import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => (
  <div className="App">
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <Team />
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default App;
