import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';


function Servicios() {
    return (
        <Container id="servicios">
            <Row className="align-items-center my-5">
                <Col xs={6} md={6}>
                    <h2 className="text-start" >Servicios</h2>
                </Col>
                <Col xs={6} md={6} className="text-md-end text-muted mb-0">
                    <span style={{fontWeight: 250}}>Estudios energéticos, instalación certificada, monitoreo y mantención.</span>
                </Col>
                {/* Card Estudio */}
                <Col xs={12} md={3} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body>
                            <Card.Img src='/assets/images/estudio.png' alt='estudio energetino' />
                            <Card.Title style={{fontWeight:'bolder'}}>Estudio energético</Card.Title>
                            <Card.Text style={{fontWeight: 450, color: '#0e2933b7'}}>
                                Análisis de consumo y propuesta ajustada a tu perfil.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                 {/* Card Instalación */}
                <Col xs={12} md={3} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body >
                            <Card.Img src='/assets/images/instalacion-2.png' alt='instalacion'/>
                            <Card.Title style={{fontWeight:'bolder'}}>Instalación certificada</Card.Title>
                            <Card.Text style={{fontWeight: 450, color: '#0e2933b7'}}>
                                Ejecutada por personal acreditado y normativa vigente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                  {/* Card Monitoreo */}
                <Col xs={12} md={3} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body>
                            <Card.Img src='/assets/images/mantencion.png' />
                            <Card.Title style={{fontWeight:'bolder'}}>Monitoreo</Card.Title>
                            <Card.Text style={{fontWeight: 450, color: '#0e2933b7'}}>
                                Seguimiento de rendimiento y alertas preventivas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Card Mantención */}
                <Col xs={12} md={3} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body>
                            <Card.Img src='/assets/images/.png' alt='mantencion'/>
                            <Card.Title style={{fontWeight:'bolder'}}>Mantención</Card.Title>
                            <Card.Text style={{fontWeight: 450, color: '#0e2933b7'}}>
                                Planes periódicos para extener la vida útil del sistema.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Servicios;