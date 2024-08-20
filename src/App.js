// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Images/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Features from "./Components/Features";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
