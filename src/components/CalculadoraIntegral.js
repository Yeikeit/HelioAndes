import Container from "react-bootstrap/esm/Container";
import { Row, Col, Card } from 'react-bootstrap';

function CalculadoraIntegral() {
    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <h1>DEMO calculadora</h1>
            </Row>
            <Row className="align-items-center justify-content-center">
                <Col xs={12} lg={6}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Formulario</Card.Title>
                            <Card.Text>
                                <Col lg={6}>
                                    <Row><label>Potencia del panel (W)</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row></Row>
                                    <Row><label>Inversor (precio)</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Bateria (precio unidad)</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Cantidad baterías</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Estruct./cableado</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Instalación base</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Peso envío (kg)</label>
                                        <input type="text" className="form-control" /></Row>
                                </Col>
                                <Col lg={6}>
                                    <Row><label>Potencia del panel (W)</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row></Row>
                                    <Row><label>Inversor (precio)</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Bateria (precio unidad)</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Cantidad baterías</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Estruct./cableado</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Instalación base</label>
                                        <input type="text" className="form-control" /></Row>
                                    <Row><label>Peso envío (kg)</label>
                                        <input type="text" className="form-control" /></Row>
                                </Col>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}><Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Resumen</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CalculadoraIntegral;