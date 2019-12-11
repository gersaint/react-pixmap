import React, { Component } from "react";
import Buscador from "./componentes/Buscador.js";
// import logo from './logo.svg';
// import "./App.css";
import Resultado from "./componentes/Resultado.js";

class App extends Component {
  state = {
    termino : "",
    imagenes : [],
    pagina :  ''
  };

  scroll = () => {

    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView( 'smooth', 'start' );

  }

  paginaAnterior = () => {

    
    // leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Leer si la pagina es 1, ya no ir hacia atras
    if ( pagina === 1 ) return null;

    // sumar a la pagina actual 
    pagina -= 1;

    // Agregar el cambio al state
    this.setState( { pagina } , () => {

      this.consultarApi();
      this.scroll();

    });

    // console.log( pagina );
    // console.log("siguiente..");

  }


  paginaSiguiente = () => {

    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    //sumar a la pagina actual 
    pagina += 1;

    //Agregar el cambio al state
    this.setState( { pagina }, () => {

      this.consultarApi();
      this.scroll();

    });

    // console.log( pagina );
    // console.log("siguiente..");

  }

  consultarApi = () => {
    
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/?key=14569249-bb6888812c38e00acf06754c4&q=${termino}&per_page=30&page=${pagina}`;

    console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      //.then(resultado => console.log(resultado.hits));
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    // console.log(termino);

    this.setState(
      {
        termino : termino,
        pagina : 1
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

        {/* <Resultado imagenes={this.state.imagenes} /> */}

        <div className= " row justify-content-center">

          <Resultado 
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}  
            paginaSiguiente={this.paginaSiguiente}
          /> 

        </div>
      </div>
    );
  }
}

export default App;
