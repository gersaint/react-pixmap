import React, { Component } from "react";
import Imagen from "./Imagen"

class Resultado extends Component {
  // state = {  }

  // nos quedamos en la creacion de la imagen min --> 01.09.14

  mostrarImagenes = () => {

      const imagenes = this.props.imagenes;      
      if (imagenes.length === 0) return null;
      console.log(imagenes);

      return (

          <React.Fragment>
              <div className="col-12 p-5 row">
                 
              </div>
          </React.Fragment>

      )
  };
 
  render() {
    return (
      // <p> desde Resultado.js </p>
      // <div>{this.mostrarImagenes()}</div>
      <React.Fragment>{this.mostrarImagenes()} </React.Fragment>
    );
  }
}

export default Resultado;
