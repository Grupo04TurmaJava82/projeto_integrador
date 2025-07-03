import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import "./App.css";
import Sobre from "./components/sobre/Sobre";
import ListaExercicios from "./pages/exercicios/ListaExercicios";
import Metricas from "./components/metricas/Metricas";
import FormExercicio from "./components/formexercicio/FormExercicio";
import Metodologia from "./components/metodologia/Metodologia";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listaexercicios" element={<ListaExercicios />} />
          <Route path="/formexercicio" element={<FormExercicio />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/sobre" element={<><Metodologia /><Sobre /></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;