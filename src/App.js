import React from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Work } from "@mui/icons-material";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
    </div>
  );
};

export default App;
