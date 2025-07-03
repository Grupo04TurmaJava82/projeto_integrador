import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import "./App.css";
import Sobre from "./components/sobre/Sobre";

function App() {
  return (
    <>
      <Home />
      <Sobre />
    </>
  );
}

export default App;
