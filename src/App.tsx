import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaExercicios from "./pages/exercicios/ListaExercicios";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
				{/* <Navbar /> */}
					<div className="min-h-[80vh]">
							<Routes>
							<Route	path="/" element={<Home />} />
							<Route	path="/home" element={<Home />}	/>
							<Route path="/listaexercicios" element={<ListaExercicios />} />
							</Routes>
					</div>
				{/* <Footer /> */}
			</BrowserRouter>    </>
  );
}

export default App;
