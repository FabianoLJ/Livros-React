import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./controle/Livrolista";
import { Header } from "./controle/Livrolista";
import LivroDados from "./controle/LivrosDados";

const App = () => {
  return (
    <Router>
      {/* Menu de Navegação */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Minha Biblioteca
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Lista de Livros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dados">
                  Dados do Livro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {}
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
};

export default App;
