import { useState } from 'react';
import {Container, Col, Row, Button, Form} from "react-bootstrap";

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const limpiar = () => {
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    // Enviar Mensaje
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
            // Podrías mostrar un mensaje más elegante en la UI
            alert('Por favor completa todos los campos antes de enviar.');
            return;
        }

        alert('Mensaje enviado. ¡Gracias!');
        limpiar();
    };

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
                <Col xs={12} md={12} className='align-items-center my-4'>
                    <Form onSubmit={handleSubmit} style={{height:'auto', width:'20em'}} className='mx-auto'>
                        <Form.Group controlId='formNombre' className='mb-3'>
                            <Form.Label><b>Nombre Completo</b></Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Gon Freecss'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Label><b>Correo Electrónico</b></Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='g.freecss@hxh.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group  className='mb-3' controlId='formMensaje'>
                            <Form.Label><b>Mensaje</b></Form.Label>
                            <Form.Control
                                required
                                as='textarea'
                                rows={3}
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                            />
                        </Form.Group>
                        <Row className='d-flex justify-content-center'>
                            <Button type='submit'
                                xs={12}
                                md={3}
                                style={{backgroundColor: '#046b94b7', border: 'none'}}
                                className='mb-3'
                            >
                                Enviar Mensaje
                            </Button>
                            <Button
                                type='button'
                                onClick={limpiar}
                                xs={12}
                                md={3}
                                style={{backgroundColor: '#046b94b7', border: 'none'}}
                                className="mb-3"
                            >
                                Limpiar
                            </Button>
                        </Row>
                    </Form>
                </Col>  
            </Row>
        </Container>
    );
    
}

export default Contacto;