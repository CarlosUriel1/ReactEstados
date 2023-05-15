import React, {Component} from "react";
import { Table } from "react-bootstrap"; 

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddEstados } from "./addEstados";
import { EditEstados } from "./editEstados";
import {DetailsEstados} from "./detailsEstados";

export class estados extends Component {

    constructor(props){
        super(props);
        this.state = { edos: [], addModalShow : false, editModalShow : false,  detailsModalShow : false  }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+"/Estados")
        .then(response => response.json())
        .then(data => {
            this.setState({ edos: data});
        })
        .catch(err => {
            console.error("Error dentro del la data de la api",err);
        });
    }
    componentDidMount(){
        this.refreshList();
    }   
    componentDidUpdate(){
        this.refreshList();
    }
    deleteEdo(id) {
        if (window.confirm("¿Está seguro de eliminar?")) {
          fetch(process.env.REACT_APP_API + "/Estados/" + id, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
        }
      }
      


    render(){
        const {edos,id, nombre} = this.state;
        let addModalClose = () => this.setState({addModalShow : false});
        let editModalClose = () => this.setState({editModalShow : false});
        let detailsModalClose = () => this.setState({detailsModalShow : false});
        return(
            <div >
                <Table className="mt-4 table table-striped table-table-bordered "  hover size="sm">
                    <thead>
                    <tr>
                        <th>IdEstado</th>
                        <th>NombreEstado</th>
                        <th>Opcion</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {edos.map(edo =>
                            <tr key={edo.id}>
                                <td>{edo.id}</td>
                                <td>{edo.nombre}</td>
                                <td>
                                    <Button className="mr-2" variant="warning" onClick={() => this.setState({
                                            detailsModalShow: true,
                                            id: edo.id, nombre: edo.nombre
                                        })}>
                                            Detalles
                                        </Button>
                                        <DetailsEstados show={this.state.detailsModalShow}
                                            onHide={detailsModalClose}
                                            id={id}
                                            nombre={nombre}
                                        />
                                        </td>
                                        <td>
                                             <Button className="mr-2" variant="info" onClick={() => this.setState({
                                            editModalShow: true,
                                            id: edo.id, nombre: edo.nombre
                                        })}>
                                            Editar
                                        </Button>
                                        <EditEstados show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            id={id}
                                            nombre={nombre}
                                        />
                                        </td>
                                        <td>
                                        <Button className="mr-2" variant="danger" onClick={() => this.deleteEdo(edo.id)}>
                                            eliminar
                                        </Button>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({addModalShow : true})}>Agregar Estado</Button>
                    <AddEstados show={this.state.addModalShow} onHide={addModalClose}></AddEstados>

                </ButtonToolbar>
            </div>
        )
    }
}