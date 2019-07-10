import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id_usuarios: '',
      nombre: '',
      apellido:''
    }
  }
  
  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    })  
  }
  onChangeApellido(e) {
    this.setState({
      apellido: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nombre: this.state.nombre,
      apellido: this.state.apellido
    };
    axios.post('http://localhost/codeigniter_api/api/usuariosrest', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nombre: '',
      apellido: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Agregar Nuevo Usuario</h3>
            <form onSubmit={this.onSubmit}>
                
                <div className="form-group">
                    <label>Nombre: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.nombre}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Apellido: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.apellido}
                      onChange={this.onChangeApellido}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Agregar Usuario" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}