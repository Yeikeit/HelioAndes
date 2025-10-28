import { Badge, CardText, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from 'react-icons/fa';


function Testimonios() {
    return (
        <Container id="testimonios">
            <Row className="align-items-center my-5">
                <Col xs={6} md={6}>
                    <h2 className="text-start" >Testimonios</h2>
                </Col>
                <Col xs={6} md={6} className="text-md-end text-muted mb-0">
                    <span style={{ fontWeight: 250 }}>Clientes que ya confían en HelioAndes</span>
                </Col>
                {/* Cliente 1 */}
                <Col xs={12} md={4} className="my-4">
                    <Card style={{ border: 'solid 1px #000000ff ', borderRadius: '8px', width: 'auto', height: '100%' }}>
                        <Card.Body>
                            <Card.Title className="d-inline-block ms-2">
                                <FaUserCircle size={24} color="#7a7a7a" className="me-2" />
                                Alejandra, Ñuñoa
                            </Card.Title>


                            <Card.Text style={{ fontWeight: 300 }}>
                                "Instalación rápida y ahorro visible en al primera boleta."
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                {/* Cliente 2 */}
                <Col xs={12} md={4} className="my-4">
                    <Card style={{ border: 'solid 1px #000000ff ', borderRadius: '8px', width: 'auto', height: '100%' }}>
                        <Card.Body>
                            
                            <Card.Title className="d-inline-block ms-2">
                                <FaUserCircle size={24} color="#7a7a7a" className="me-2" />
                                Diego, Valdivia
                                </Card.Title>

                            <Card.Text style={{ fontWeight: 300 }}>
                                "El monitoreo me permite proyectar bien los consumos."
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                {/* Cliente 3 */}
                <Col xs={12} md={4} className="my-4">
                    <Card style={{ border: 'solid 1px #000000ff ', borderRadius: '8px', width: 'auto', height: '100%' }}>
                        <Card.Body>

                            <Card.Title className="d-inline-block ms-2">
                                <FaUserCircle size={24} color="#7a7a7a" className="me-2" />
                                Carla, Copiapó
                                </Card.Title>

                            <Card.Text style={{ fontWeight: 300 }}>
                                "Excelente asesoría y postventa. 100% recomendado."
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Testimonios;