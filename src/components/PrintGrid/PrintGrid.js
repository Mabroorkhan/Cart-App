import image from "../../asset/img1.jpg";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function PrintGird({ title, price, index }) {

    return (
        <Col className="p-view">
            <Nav.Link as={Link} to={`/product/${index}`}>
                <img src={image} alt="img" height="200px" width="200px" />
                <h5>{title}</h5>
                <h5>{price}</h5>
            </Nav.Link>
        </Col>
    )

}

export default PrintGird;