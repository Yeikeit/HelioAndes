import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
        <Container id="faq">
            <Row className="align-items-center mb-3">
                <Col xs={12} md={6}>
                    <h1 className="mb-0 text-start">FAQ</h1>
                </Col>
                <Col xs={12} md={6} className="text-md-end text-muted">
                    <span style={{ fontWeight: 500 }}>Preguntas frecuentes</span>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col >
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>¿Incluye trámites y certificación?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Sí, nuestro servicio incluye la gestión de trámites y la certificación SEC para que tu sistema solar cumpla con toda la normativa vigente. Nos encargamos de todo el proceso administrativo y técnico para que no tengas que preocuparte por nada.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>¿Ofrecen financiamiento?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Sí, ofrecemos alternativas de financiamiento para que puedas acceder a tu sistema solar de manera flexible. Puedes elegir entre pago contado o cuotas mensuales, y simular tu plan directamente en nuestra calculadora online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>¿Tienen despacho a regiones?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Sí, realizamos envíos a todo Chile. El costo de despacho depende de la región y el peso estimado del sistema. Puedes calcular el valor exacto en nuestra calculadora y recibir tu equipo en la dirección que indiques.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default FAQ;