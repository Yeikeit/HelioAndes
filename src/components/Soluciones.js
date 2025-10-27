import { Row, Col, Container, Card, Button } from "react-bootstrap";
 

function Soluciones() {
    return (
        <Container id="soluciones">
            <Row className="align-items-center my-5">
                <Col xs={6} md={6}>
                    <h2 className="text-start" >Soluciones</h2>
                </Col>
                <Col xs={6} md={6} className="text-md-end text-muted mb-0">
                    <span style={{fontWeight: 250}}>Kits residenciales, Pyme, Off-grid con baterías e Híbridos.</span>
                </Col>
                {/* Plan Hogar */}
                <Col xs={12} md={4} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body>
                            <Card.Img src='/assets/images/casa.png' alt="hogar" />
                            <Card.Title>Hogar 3-5 kW</Card.Title>
                            <Card.Text style={{fontWeight: 300}}>
                                Balance ideal entre costo y ahorro mensual.
                            </Card.Text>
                            <Button style={{backgroundColor: '#046b94b7', border: 'none'}}>
                                <a href='#contacto' style={{color: 'white', textDecoration:'none'}}>Solicitar Asesoria</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                 {/* Plan Pyme */}
                <Col xs={12} md={4} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body>
                            <Card.Img src='/assets/images/pyme.png' />
                            <Card.Title >Pyme 10-20 kW</Card.Title>
                            <Card.Text style={{fontWeight: 300}}>
                                Para operación diurna con buena irradición.
                            </Card.Text>
                            <Button style={{backgroundColor: '#046b94b7', border: 'none'}}>
                                <a href='#contacto' style={{color: 'white', textDecoration:'none'}}>Solicitar Asesoria</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                  {/* Plan OFF-Grid */}
                <Col xs={12} md={4} className="my-4"> 
                    <Card style={{border: 'solid 1px #1e109cff ', borderRadius: '8px', width: 'auto', height: '100%'}}>
                        <Card.Body>
                            <Card.Img src='/assets/images/bateria.png' />
                            <Card.Title style={{}}>Off-grid con baterías</Card.Title>
                            <Card.Text style={{fontWeight: 300}}>
                                Autonomía en zonas sin red eléctrica.
                            </Card.Text>
                            <Button style={{backgroundColor: '#046b94b7', border: 'none'}}>
                                <a href='#contacto' style={{color: 'white', textDecoration:'none'}}>Solicitar Asesoria</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
        

    );
}

export default Soluciones;