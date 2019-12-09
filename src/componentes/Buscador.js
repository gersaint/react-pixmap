import React, { Component } from "react";

class Buscador extends Component {
  state = {};

  busquedaRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault(); // previene la accion por default del form

    // console.log(this.busquedaRef.current.value);

    // tomamos el valor del input
    const termino = this.busquedaRef.current.value;

    // lo enviamos al componente principal
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu Imagen. Ejemplo: Skateboarding"
            />
          </div>

          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar.."
            />
          </div>
        </div>
      </form>
    );
  }
}

// document.querySelector('form').addEventListener('submit', function () {});

export default Buscador;
