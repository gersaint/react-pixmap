import React, { Component } from "react";
import Buscador from "./componentes/Buscador.js";
// import logo from './logo.svg';
// import "./App.css";
import Resultado from "./componentes/Resultado.js";

class App extends Component {
  state = {
    termino: "",
    imagenes: []
  };

  consultarApi = () => {
    const termino = this.state.termino;

    const url = `https://pixabay.com/api/?key=14569249-bb6888812c38e00acf06754c4&q=${termino}
                &per_page=30`;

    // console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      //.then(resultado => console.log(resultado.hits));
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    // console.log(termino);

    this.setState(
      {
        termino
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador
            // mensaje="Buscador..."
            datosBusqueda={this.datosBusqueda}
          />
        </div>
      
        <Resultado imagenes={this.state.imagenes} />          
      </div>
    );
  }
}

export default App;
