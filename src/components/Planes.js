import { Badge, CardText, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Planes() {
    return (
        <Container id="planes">
            <Row className="align-items-center my-5">
                <Col xs={6} md={6}>
                    <h2 className="text-start" >Planes</h2>
                </Col>
                <Col xs={6} md={6} className="text-md-end text-muted mb-0">
                    <span style={{ fontWeight: 250 }}>Elige el plan que se ajusta a tu proyecto.</span>
                </Col>
                {/* Plan Básico */}
                <Col xs={12} md={4} className="my-4">
                    <Card style={{ border: 'solid 1px #000000ff ', borderRadius: '8px', width: 'auto', height: '100%' }}>
                        <Card.Body>
                            <Badge>
                                Básico
                            </Badge >

                            <Card.Title>3-5 kW</Card.Title>

                                <Card.Text style={{ fontWeight: 300 }}>
                                    Estúdio energético
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 300 }}>
                                    Instalación estándar
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 300 }}>
                                    Monitoreo básico
                                </Card.Text>

                            <Button style={{ backgroundColor: '#046b94b7', border: 'none' }}>
                                <a href='#contacto' style={{ color: 'white', textDecoration: 'none' }}>Solicitar evaluación</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Plan Optimizado */}
                <Col xs={12} md={4} className="my-4">
                    <Card style={{ border: 'solid 1px #000000ff ', borderRadius: '8px', width: 'auto', height: '100%' }}>
                        <Card.Body>
                            <Badge >
                                Optimizado
                            </Badge >

                            <Card.Title>10-15 kW</Card.Title>

                                <Card.Text style={{ fontWeight: 300 }}>
                                    Estúdio avanzado
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 300 }}>
                                    Instalación optimizada
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 300 }}>
                                    Monitoreo avanzado
                                </Card.Text>

                            <Button style={{ backgroundColor: '#046b94b7', border: 'none' }}>
                                <a href='#contacto' style={{ color: 'white', textDecoration: 'none' }}>Solicitar evaluación</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Plan Autónomo */}
                <Col xs={12} md={4} className="my-4">
                    <Card style={{ border: 'solid 1px #000000ff ', borderRadius: '8px', width: 'auto', height: '100%' }}>
                        <Card.Body>
                            <Badge >
                                Autónomo
                            </Badge >

                            <Card.Title>Híbrido + baterías</Card.Title>

                                <Card.Text style={{ fontWeight: 300 }}>
                                    Diseño off-grid
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 300 }}>
                                    Almacenamiento
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 300 }}>
                                    Soporte preferente
                                </Card.Text>

                            <Button style={{ backgroundColor: '#046b94b7', border: 'none' }}>
                                <a href='#contacto' style={{ color: 'white', textDecoration: 'none' }}>Solicitar evaluación</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Planes;