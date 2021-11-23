import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function NotFound() {

    return (
        <Container className="notFound">
            <Card
                bg="danger"
                text={"danger" === 'light' ? 'dark' : 'white'}
                style={{ width: '40rem', height: '20rem' }}
                className="mb-2"
            >
                <Card.Body>
                    <Card.Title>404 Not Found </Card.Title>
                    <Card.Text>
                        The page you want to visit does not exist please proceed to a valid '/URL'
                        or click the Home button to proceed to Home
                        <Button variant="outline-warning" as={Link} to="/home">Home</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )

}

export default NotFound;