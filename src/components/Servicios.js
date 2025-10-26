import React from 'react';
import { Card } from 'react-bootstrap';


function Servicios() {
    return (
        <div className='row container mx-auto'>
            <div className='col-lg-6'>
                <h2 className='mb-4'>Servicios</h2 >
            </div>
            <div className='col-lg-6 text-lg-end text-muted mb-4'>
                <h6>Estudio enérgetico, instalación certificada, monitoreo, mantención.</h6>
            </div>
            <div className='col-lg-3 mb-4'>
                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Img src='../../public/assets/images/certified.png' />
                        <Card.Title style={{}}>Instalación Certificada</Card.Title>
                        <Card.Text>
                            Ejecutda por personal acreditado y normativa vigente.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 mb-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 mb-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 mb-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
        
    );
}

export default Servicios;