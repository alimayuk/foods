import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
