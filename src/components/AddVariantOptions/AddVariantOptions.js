import { useEffect, useState } from "react";
import { Col, Form, FormGroup, Row } from "react-bootstrap";

function AddVariantOptions({ onChange, id }) {

    const [VarOpt, setVarOpt] = useState({
        name: '',
        price: 0,
        id
    })

    useEffect(() => {
        onChange(VarOpt);
    }, [VarOpt])

    const handleOptionChange = (e) => {
        setVarOpt((prev) => {
            const clone = { ...prev }
            let value = e.target.value;
            let name = e.target.name
            if (name === "price") {
                value = +value
            }
            clone[name] = value
            return clone;
        })
    }
    return (
        <FormGroup className="res3">
            <Row>
                <Form.Label column lg={2} className="res2 res1">
                    Name
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Add Variant Type"
                        className="col-sm-1"
                        name="name"
                        onChange={handleOptionChange} />
                </Col>
                <Form.Label column lg={2} className="res2 res1">
                    Price Diff.
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Add Price Difference"
                        className="col-sm-1"
                        name="price"
                        onChange={handleOptionChange} />
                </Col>
            </Row>
            <br />
        </FormGroup>
    );

}

export default AddVariantOptions;