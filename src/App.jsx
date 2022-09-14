import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<h1 className="fw-semibold">TABLERO</h1>} />
          <Route path="/i" element={<h1 className="fw-semibold">INSTALACIONES</h1>} />
          <Route path="/m" element={<h1 className="fw-semibold">MANTENIMIENpathS</h1>} />
          <Route path="/u" element={<h1 className="fw-semibold">ULTIMAS MILLAS</h1>} />
          <Route path="/c" element={<h1 className="fw-semibold">CONTRATISTAS</h1>} />
          <Route path="/p" element={<h1 className="fw-semibold">PERSONAL</h1>} />
          <Route path="/b" element={<h1 className="fw-semibold">BODEGAS</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
