import { useEffect, useState } from "react";
import { Col, Form, FormGroup, Row, Button } from "react-bootstrap";
import AddVariantOptions from "../AddVariantOptions/AddVariantOptions";

function AddVariant({ id, onChange, deleteVariant, val }) {

    const [opt, setopt] = useState({
        type: '',
        options: [],
        id
    });

    useEffect(() => {
        onChange(opt)
    }, [opt])

    const handleTypechange = (e) => {
        setopt((prev) => {
            const clone = { ...prev }
            clone[e.target.name] = e.target.value
            return clone;
        })
    }

    return (<FormGroup>
        <Row>
            <Form.Label column lg={2} className="res2">
                Variant Type
            </Form.Label>
            <Col>
                <Form.Control
                    type="text"
                    placeholder="Add Variant"
                    className="col-sm-2"
                    name="type"
                    defaultValue={val}
                    onChange={handleTypechange}
                />
            </Col>
            <Col>
                <Button variant="secondary" className="resButton"
                    onClick={() =>
                        setopt((prev) => ({
                            ...prev,
                            options: [...prev.options, { name: '', price: '', id: Date.now() }]
                        })
                        )}
                >Add Options</Button>
                <Button
                    onClick={() => deleteVariant()}
                >
                    Delete
                </Button>
            </Col>
        </Row>
        <br />
        {opt.options.map((opt, index) => <AddVariantOptions
            price={opt.price}
            key={opt.id}
            id={opt.id}
            onChange={((eVal) => {
                setopt((prevState) => {
                    let prev = { ...prevState }
                    prev.options[index] = eVal;
                    return prev;
                })
            }
            )}
        />)}
    </FormGroup>
    );
}

export default AddVariant;