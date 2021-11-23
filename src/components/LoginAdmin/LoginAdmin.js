import { useState } from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    let authenticate = {}
    authenticate = JSON.parse(localStorage.getItem("admin"));

    const LoginCheck = () => {
        if ((authenticate.email === data.email) && (authenticate.password === data.password)) {
            navigate('/home')
        }
        else {
           setShowAlert(true)
        }
    }

    return (
        <>
            <Container>
            {showAlert ? <Alert variant='danger'>
                Email or Password is incorrect!
            </Alert> : <></>}
            </Container>
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
                                onChange={(e) => 
                                    setData((prev) => {
                                    const clone = { ...prev };
                                    clone.email = e.target.value;
                                    setShowAlert(false);
                                    return clone;
                                })}
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
                                onChange={(e) => setData((prev) => {
                                    const clone = { ...prev };
                                    clone.password = e.target.value;
                                    setShowAlert(false);
                                    return clone;
                                })}
                            />
                        </Col>
                        <Col sm={4}></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={2}></Col>
                        <Col sm={{ span: 4, offset: 2 }}>
                            <Button
                                type="button"
                                disabled={!(data.email && data.password)}
                                onClick={() => LoginCheck()}>
                                Sign in
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
export default LoginAdmin;