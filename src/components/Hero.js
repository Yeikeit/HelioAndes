import { Badge, CardText, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Hero() {
    return (

        <Container id="hero">
            <Row className="align-items-start">


                <Col md={6} className="text-start">
                    <Badge>
                        Energía solar

                    </Badge >
                    <h1 style={{ fontWeight: 'bolder' }}>Energía solar accesible y confiable para tu hogar o pyme</h1>
                    <p style={{ textAlign: 'justify' }}>
                        Dimensiona tu sistema, conoce le costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales.</p>

                    <Button variant="success" className="me-2">
                        <a href='#calculadora-integral' style={{ color: 'white', textDecoration: 'none' }}>Ver DEMO</a>
                    </Button>

                    <Button variant="outline-secondary">
                        <a href='/assets/documents/catalogo-helioandes.pdf' style={{ color: 'Black', textDecoration: 'none' }}>Descargar catálogo</a>
                    </Button>
                </Col>
                <Col md={6} className="text-start">
                    <Card>
                        <Card.Body className="text-center">
                            <Image
                                src="/assets/images/panelSolar.png"
                                fluid
                                style={{ maxWidth: '100%', height: 'auto' }}

                            />
                        </Card.Body>
                    </Card>


                </Col>


            </Row>
        </Container>

    );
}

export default Hero;