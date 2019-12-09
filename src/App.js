import React from "react";
import Buscador from "./componentes/Buscador.js";
// import logo from './logo.svg';
// import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="jumbotron">

        <p className="lead text-center">Buscador de imagenes</p>

        <Buscador />
        
      </div>
    </div>
  );
}

export default App;
