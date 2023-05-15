import react ,{ Component } from "react";
import {Modal, Button, Row,Col, Form} from 'react-bootstrap';

export class EditEstados extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API+"/Estados/"+ event.target.EdoId.value,{
            method: 'PUT',
            headers: { 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            id : event.target.EdoId.value,
            nombre : event.target.EdoNombre.value
        })
    })
    .then(response => response.json())
    .then((result) => {
        alert(result);
    },
    (error) => {
        alert(error);
    })
    }
    render() { 
        return (
            <div className="container">
                <Modal {...this.props} size="lg" aria-labelledby = "conteined-modal-title-vc" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="conteined-modal-title-vc">
                            Edit estado
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EdoId">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="EdoId" required
                                        disabled
                                        defaultValue={this.props.id} 
                                        placeholder=" EdoId" />
                                    </Form.Group>
                                    <Form.Group controlId="EdoNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="EdoNombre" required
                                            defaultValue={this.props.nombre}
                                            placeholder=" EdoNombre" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                                            Actualizar
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                        Cerrar
                         </Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
     }
} 