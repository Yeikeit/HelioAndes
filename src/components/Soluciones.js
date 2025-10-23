import { Card } from "react-bootstrap";

function Soluciones() {
    return (
        <div className='row mt-3'>
            <div className='col-lg-12'>
                <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </div>
        </div>
    );
}

export default Soluciones;