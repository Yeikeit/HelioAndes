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
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><b>¿Qué garantías ofrecen?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Ofrecemos garantía extendida sobre los equipos y la instalación, con opciones de 12, 24 y 36 meses. La garantía cubre defectos de fabricación y problemas derivados de la instalación, según el plan que elijas en la calculadora.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><b>¿Incluyen mantenciones?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Sí, puedes contratar planes de mantención preventiva y correctiva para asegurar el óptimo funcionamiento de tu sistema solar. Recomendamos realizar mantenciones periódicas para maximizar la vida útil y el rendimiento de los equipos.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><b>¿El sistema incluye monitoreo?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Todos nuestros sistemas incluyen monitoreo básico, y puedes optar por monitoreo avanzado para visualizar el desempeño en tiempo real desde tu celular o computador. Esto te permite controlar la generación y el consumo energético de tu instalación.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header><b>¿Cuánto demoran en instalar?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                El tiempo de instalación depende de la complejidad y el tamaño del sistema, pero normalmente toma entre 2 y 5 días hábiles una vez que los equipos llegan a tu domicilio y se cumplen los requisitos técnicos.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header><b>¿Qué requisitos eléctricos necesito?</b></Accordion.Header>
                            <Accordion.Body className="text-start">
                                Es necesario contar con una instalación eléctrica en buen estado y espacio suficiente en el tablero para conectar el sistema solar. Nuestro equipo realiza una evaluación previa para verificar que tu domicilio cumple con los requisitos técnicos y normativos.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default FAQ;