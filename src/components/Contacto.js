import {Container, Col, Row, Button, Form} from "react-bootstrap";

function Contacto() {
    return (
        <Container id='contacto'>
            <Row className='align-items-center my-5'>
                <Col xs={6} md={6}>
                    <h2 className='text-start'>Contacto</h2>
                </Col>
                <Col xs={6} md={6} className='text-md-end text-muted mb-0'>
                    <span style={{fontWeight: 250}}>Cuéntanos tu proyecto y agenda una asesoria.</span>
                </Col>
                {/* Formulario */}
                <Col xs={12} md={12} className="align-items-center my-4">
                    <Form style={{height:'auto', width:'20em'}} className="align-items-center">
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="email" placeholder="Tu Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="tucorreo@dominio.com" />
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="formMensaje">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button style={{backgroundColor: '#046b94b7', border: 'none'}}>
                            <a href='#contacto' style={{color: 'white', textDecoration:'none'}}>Solicitar Asesoria</a>
                        </Button>
                        <Button style={{backgroundColor: '#046b94b7', border: 'none', marginLeft: '1em'}}>
                            <a href='#contacto' style={{color: 'white', textDecoration:'none'}}>Enviar</a>
                        </Button>
                    </Form>
                </Col>  
            </Row>

        </Container>
    );
    
}

export default Contacto;