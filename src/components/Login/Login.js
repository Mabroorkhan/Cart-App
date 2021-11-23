import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button, Nav, DropdownButton, ButtonGroup, Dropdown, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registeredObjGet, registeredObjSet } from "../helper/localStorageHelper";

function Login() {

    const navigate = useNavigate();
    const [role, setRole] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    let logCheck = registeredObjGet("role")

    useEffect(() => {
        if (logCheck?.role) {
            navigate('/home')
        }
    }, [])


    const LoginCheck = () => {

        let authenticate = [...registeredObjGet(role)];

        let loginEmail = authenticate.find(i => i.email === data.email);
        let loginPassword = authenticate.find(i => i.password === data.password);

        if ((loginEmail?.email === data.email) && (loginPassword?.password === data.password)) {
            navigate('/home')

            registeredObjSet(role,{role:role})
        }

        else {
            setShowAlert(true)
        }
    }
    return (
        <>
            {showAlert ? <Alert variant='danger'>
                Email or Password is incorrect!
            </Alert> : <></>}
            <Container className="Login">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Col sm={2}></Col>
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                className="col-sm-2"
                                onChange={(e) => {
                                    setData((prev) => {
                                        const clone = { ...prev }
                                        clone.email = e.target.value;
                                        setShowAlert(false);
                                        return clone;
                                    })
                                }}
                            />
                        </Col>
                        <Col sm={4}></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Col sm={2}></Col>
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setData((prev) => {
                                        const clone = { ...prev }
                                        clone.password = e.target.value;
                                        setShowAlert(false);
                                        return clone;
                                    })
                                }}
                            />
                        </Col>
                        <Col sm={4}></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Col sm={4}></Col>
                        <Col sm={1}>
                            <DropdownButton
                                as={ButtonGroup}
                                id={`dropdown-button-drop`}
                                size="sm"
                                variant="secondary"
                                title={role ? role : "Login As"}
                            >
                                <Dropdown.Item
                                    eventKey="1"
                                    onClick={() => setRole("admin")}>
                                    admin
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="2"
                                    onClick={() => setRole("user")}>
                                    user
                                </Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={2}></Col>
                        <Col sm={{ span: 4, offset: 2 }}>
                            <Button
                                type="button"
                                disabled={!(data.email && data.password && role)}
                                onClick={() => LoginCheck()}
                            >
                                Sign in
                            </Button>
                        </Col>
                        <Col sm={1}>
                            <Nav.Link as={Link} to="/SignUp">Register</Nav.Link>
                        </Col>
                        <Col sm={6}></Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
export default Login;