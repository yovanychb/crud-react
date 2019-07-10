import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('http://localhost/codeigniter_api/api/usuariosrest?id='+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                id_usuarios: response.data.id_usuarios, 
                nombre: response.data.nombre,
                apellido: response.data.apellido });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeApellido(e) {
    this.setState({
      apellido: e.target.value
    })  
  }  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      id_usuarios: this.state.id_usuarios,
      nombre: this.state.nombre,
      apellido: this.state.apellido
    };
    axios.put('http://localhost/codeigniter_api/api/usuariosrest', obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Actualizar</h3>
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
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}