import React, { Component } from "react";

class Resultado extends Component {
  // state = {  }

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
      <React.Fragment>{this.mostrarImagenes}</React.Fragment>
    );
  }
}

export default Resultado;
