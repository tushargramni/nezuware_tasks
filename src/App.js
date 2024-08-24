import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

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
