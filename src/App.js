import React, { Component } from "react";
import Buscador from "./componentes/Buscador.js";
// import logo from './logo.svg';
// import "./App.css";

class App extends Component {

  state = {

    termino: 'cafe'
    
  }

  datosBusqueda = ( termino ) => { 
    
    // console.log(termino);

    this.setState({

      termino
      
    })
    
  }

  render() { 

    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador
            // mensaje="Buscador..." 
            datosBusqueda = { this.datosBusqueda }
          />
        </div>
        {this.state.termino}
      </div>
    );


  }
  
}

export default App;
