import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { registeredObjGet, registeredObjSet } from "../helper/localStorageHelper";


function NavComponent() {

    const logCheck = registeredObjGet("role")

    const logOut = () => {
        registeredObjSet("role", {})
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand >Cart App</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link
                            as={Link}
                            to="/home">
                            Home
                        </Nav.Link>

                        {(logCheck.role === "admin") ?
                            <Nav.Link
                                as={Link} to="/add-product">
                                Add Product
                            </Nav.Link>
                            : <></>}
                    </Nav>

                    <Nav>
                        {(logCheck.role === "user") ?
                            <Nav.Link
                                as={Link} to="/cart">
                                Cart
                            </Nav.Link>
                            : <></>}
                        <NavDropdown title={logCheck.role}>
                            <NavDropdown.Item
                                as={Link} to="/" onClick={() => logOut()}>
                                logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavComponent;