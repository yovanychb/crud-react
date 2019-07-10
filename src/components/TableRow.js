import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  
  delete() {
    
    axios.delete('http://localhost/codeigniter_api/api/usuariosrest', { data: { id_usuarios: this.props.obj.id_usuarios }})
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.id_usuarios}
        </td>
        <td>
          {this.props.obj.nombre}
        </td>
        <td>
          {this.props.obj.apellido}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj.id_usuarios} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} id={this.props.id_usuarios} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;