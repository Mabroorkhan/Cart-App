import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button, Nav, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registeredArrGet, registeredArrSet } from "../helper/localStorageHelper";


function SignUp() {

    const navigate = useNavigate();
    const [role, setRole] = useState();
    const adminCheck = registeredArrGet("admin")
    const userCheck = registeredArrGet("user")
    const [data, setData] = useState({
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        auth: role
    });

    useEffect(() => {
        setData((prev) => {
            const clone = { ...prev }
            clone.auth = role;
            return clone;
        })
    }, [role])

    const register = () => {

        if (role === "admin") {

            registeredArrSet(role, [...adminCheck, data])

            setData({
                email: '',
                password: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                auth: '',
            })

        }

        if (role === "user") {

            registeredArrSet(role, [...userCheck, data])

            setData({
                email: '',
                password: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                auth: '',
            })

        }
        setTimeout(() => {
            navigate('/');
        })
    }

    return (
        <Container className="Login">
            <Form>
                <Row className="mb-3">
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setData((prev) => {
                                const clone = { ...prev }
                                clone.email = e.target.value;
                                return clone;
                            })} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setData((prev) => {
                                const clone = { ...prev }
                                clone.password = e.target.value;
                                return clone;
                            })}
                        />
                    </Form.Group>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                placeholder="1234 Main St"
                                onChange={(e) => setData((prev) => {
                                    const clone = { ...prev }
                                    clone.address = e.target.value;
                                    return clone;
                                })}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={3}></Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={3}></Col>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            placeholder="Enter your city"
                            onChange={(e) => setData((prev) => {
                                const clone = { ...prev }
                                clone.city = e.target.value;
                                return clone;
                            })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            placeholder="Enter your state/Province"
                            onChange={(e) => setData((prev) => {
                                const clone = { ...prev }
                                clone.state = e.target.value;
                                return clone;
                            })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            placeholder="Enter ZIP Code"
                            onChange={(e) => setData((prev) => {
                                const clone = { ...prev }
                                clone.zip = e.target.value;
                                return clone;
                            })}
                        />
                    </Form.Group>
                    <Col sm={3}></Col>
                </Row>

                <Row>
                    <Col sm={3}></Col>
                    <Col sm={2} >
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    </Col>
                    <Col sm={3}>
                        <DropdownButton
                            as={ButtonGroup}
                            id={`dropdown-button-drop`}
                            size="sm"
                            variant="secondary"
                            title={role ? role : "Register As"}
                        >
                            <Dropdown.Item
                                eventKey="1"
                                onClick={() => setRole("admin")} >
                                admin
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="2" onClick={() => setRole("user")}>
                                user
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col sm={4}>
                        <Button
                            variant="primary"
                            type="reset"
                            disabled={!(data.email && data.password && data.address && data.city && data.state && data.zip && data.auth)}
                            onClick={() => register()}
                        >
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )

}

export default SignUp;