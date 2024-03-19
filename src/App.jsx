import "./App.css";
import { Link,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home}/> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
