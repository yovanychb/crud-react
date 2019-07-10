import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { usuarios: [] };
  }
  componentDidMount() {
    axios.get('http://localhost/codeigniter_api/api/usuariosrest')
      .then(response => {
        this.setState({ usuarios: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }  

  render() {
    return (
      <div>
        <h3 align="center">Lista de personas</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map(
              usuario =>(
                <TableRow obj={usuario} key={usuario.id_usuario}/>
              )            
            )}
          </tbody>
        </table>
      </div>
    );
  }
}