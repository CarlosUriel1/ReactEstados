import react ,{ Component } from "react";
import {Modal, Button, Row,Col, Form} from 'react-bootstrap';

export class DetailsEstados extends Component {
    
   
    constructor(props) {
        super(props);
    }

  
    render() { 
        return (
            <div className="container">
                <Modal {...this.props} size="lg" aria-labelledby = "conteined-modal-title-vc" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="conteined-modal-title-vc">
                            Detalles estado
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form >
                                    <Form.Group controlId="EdoId">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="text" name="EdoId" required
                                        disabled
                                        defaultValue={this.props.id} 
                                        placeholder=" EdoId" />
                                    </Form.Group>
                                    <Form.Group controlId="EdoNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="EdoNombre" required
                                        disabled
                                            defaultValue={this.props.nombre}
                                            placeholder=" EdoNombre" />
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