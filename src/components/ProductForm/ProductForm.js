import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import CartSlice from "../../redux/productSlice";
import AddVariant from "../AddVariant/AddVariant";
import { registeredObjGet } from "../helper/localStorageHelper";

function ProductForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [FormValue, setFormValue] = useState({
        id: nanoid(),
        title: '',
        price: 0,
        category: '',
        details: '',
        variants: []
    })

    let logCheck = registeredObjGet("role")

    useEffect(() => {
        if (!logCheck.role || logCheck.role !== "admin") {
            navigate('/')
        }
    }, [])

    const handleChange = (e) => {
        let value = e.target.value;
        if (e.target.name === "price") {
            value = +value
        }
        setFormValue(vals => {
            const clone = { ...vals }
            clone[e.target.name] = value;
            return clone
        })
    }

    const handleConfirm = () => {

        dispatch(CartSlice.actions.updateProduct(FormValue))
        setTimeout(() => {
            setFormValue({
                category: '',
                title: '',
                price: 0,
                details: '',
                variants: []
            })
        });
    }

    const handleReset = () => {
        setFormValue({
            category: '',
            title: '',
            price: 0,
            details: '',
            variants: []
        })
    }

    const handleDelte = (index) => {
        setFormValue((prev) => {
            const prevClone = { ...prev }
            const variantClone = [...prevClone.variants];

            variantClone.splice(index, 1);

            prevClone.variants = variantClone;

            return prevClone;
        })

    }

    return (
        <Container>
            <Form>
                <h2 className="res2">Add Product</h2>
                <Row>
                    <Form.Label column lg={2} className="res2">
                        Title
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Add Title Here"
                            className="col-sm-2"
                            name="title"
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2} className="res2">
                        Price
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            placeholder="Add Price Here"
                            name="price"
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2} className="res2">
                        Category
                    </Form.Label>
                    <Col>
                        <Form.Select
                            aria-label="Default select example"
                            name="category"
                            onChange={(e) => handleChange(e)}>

                            <option value=''>Select Category </option>
                            <option value="Car" >Car</option>
                            <option value="Cell phone" >Cell Phone</option>
                            <option value="Jewellery" >Jewellery</option>
                            <option value="Accessories" >Accessories</option>
                            <option value="Electornic" >Electornic</option>
                        </Form.Select>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2} className="res2">
                        Details
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="textarea"
                            placeholder="Add Description of your product"
                            style={{ height: '150px' }}
                            name="details" onChange={(e) => handleChange(e)}
                        />
                    </Col>
                </Row>
                <br />
                {FormValue.variants.length && FormValue.variants.map((variant, index) => {

                    return <AddVariant
                        type={variant.type}
                        options={variant.options}
                        index={index}
                        key={variant.id}
                        id={variant.id}
                        val={FormValue.variants[index].type}
                        onChange={(val) => {
                            setFormValue((state) => {
                                let newState = { ...state };
                                newState.variants[index] = val;
                                return newState;
                            })
                        }}
                        deleteVariant={() => handleDelte(index)}
                    />;
                }
                )}

                <Button variant="primary" className="resButton" onClick={() =>
                    setFormValue((prev) => ({
                        ...prev,
                        variants: [...prev.variants, { type: '', options: [], id: Date.now() }]
                    }))
                }>Add Variant</Button>

                <Button variant="danger"
                    className=" resButton"
                    type="reset"
                    onClick={() => handleReset()}
                >Reset</Button>

                <Button
                    type="reset"
                    variant="primary"
                    className=" resButton"
                    onClick={() => handleConfirm()}
                    disabled={!(FormValue.title && FormValue.price && FormValue.category && FormValue.details)}
                >Confim</Button>
            </Form>
        </Container>
    );
}

export default ProductForm;