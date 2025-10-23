import { Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Hero() {
    return (

        <Container>
            <Row>


                <Col md={6}>
                    <h1>Energía solar accesible y confiable para tu hogar o pyme</h1>
                    <p>Dimensiona tu sistema, conoce le costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales.</p>

                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>


                </Col>


            </Row>
        </Container>

    );
}

export default Hero;