import { Fragment, useEffect, useMemo, useState } from "react";
import { ButtonGroup, Col, Container, Row, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import image from "../../asset/img1.jpg";
import quantitySlice from "../../redux/quantitySlice";
import { registeredObjGet } from "../helper/localStorageHelper";
import Variants from "../Variants/Variants";



function Product() {

    const navigate = useNavigate();
    const params = useParams();
    const printPorduct = useSelector((state) => state.CartSlice.data);
    const [productCount, setProductCount] = useState(0);
    let basePrice = printPorduct[+params.id].price;
    const [ProdPrice, setProdPrice] = useState(basePrice);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();




    const logCheck = registeredObjGet("role")

    useEffect(() => {
        if (!logCheck.role) {
            navigate('/')
        }
    }, [])

    const updatePrice = (selectedObj) => {

        if (selectedObj) {

            setSelectedOptions((data) => {
                const clone = [...data];
                const item = clone?.find(obj => obj.type === selectedObj.type)
                if (item?.type === selectedObj.type) {
                    clone.splice(clone.indexOf(item), 1,
                        selectedObj
                    )
                } else {
                    clone.push(selectedObj)
                }
                return clone
            })

        }

    }

    const handleQuantityadd = () => {

        setProductCount((prev) => {
            return prev + 1;
        })
    }

    const handleQuantitysub = () => {

        if (productCount >= 1) {
            setProductCount((prev) => {
                return prev - 1;
            })
        }
    }
    useEffect(() => {
        let totalPrice = basePrice;

        selectedOptions.map((item) => {
            return totalPrice += item.options.price
        })

        setProdPrice(totalPrice);

    }, [selectedOptions, basePrice])

    const addCart = () => {

        const cartProduct = {
            prodTitle: printPorduct[+params.id].title,
            prodPrice: ProdPrice,
            category: printPorduct[+params.id].category,
            quantity: productCount,
            id: `${printPorduct[+params.id].variants[0].type + ProdPrice}`,
            opt: selectedOptions
        }

        dispatch(quantitySlice.actions.cartProducts(cartProduct));
        setShowAlert(true);
        setProductCount(0);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    return (
        <>
            <Container className="res4" >
                {showAlert ? <Alert variant="primary">Product Has been Added</Alert> : <></>}
                <Row>
                    <Col>
                        <img src={image} alt="img" height="300px" width="600px" />
                    </Col>
                    <Col>
                        <Row>
                            <Col className="prod-display">
                                Title: <br />{printPorduct[+params.id].title}
                            </Col>
                            {(logCheck.role === "user") ?
                                <Col className="cartButton">
                                    <Button 
                                    variant="outline-warning" 
                                    onClick={addCart}
                                    disabled={!(productCount)}
                                    >
                                        Add To Cart
                                    </Button>
                                    <br />
                                    <ButtonGroup className="cartCount">
                                        <Button variant="outline-warning" onClick={() => handleQuantitysub()}>-</Button>
                                        <Button variant="outline-warning" disabled={true} >{productCount}</Button>
                                        <Button variant="outline-warning" onClick={() => handleQuantityadd()}>+</Button>
                                    </ButtonGroup>
                                </Col> : <></>}
                        </Row>
                        <Row className="prod-display">
                            Price: <br />{ProdPrice}
                        </Row>
                        <Row className="prod-display">
                            Category: <br />{printPorduct[+params.id].category}
                        </Row>
                        <Row className="prod-display">
                            Details: <br />{printPorduct[+params.id].details}
                        </Row>
                        <Row className="prod-display">
                            Variants <br />
                            {
                                printPorduct[+params.id].variants.map((variant, index) => {

                                    return (
                                        <Fragment key={`${variant.type + index}`}>
                                            <Row>
                                                Type:
                                                <Col className="color">
                                                    {variant.type}
                                                </Col>
                                            </Row>
                                            <Row>
                                                Options:<br />
                                                <ButtonGroup>
                                                    {
                                                        <Variants
                                                            key={`${variant.type + index}`}
                                                            type={variant.type}
                                                            option={variant.options}
                                                            onChange={((selectedVariant, id) => {
                                                                updatePrice(selectedVariant);
                                                            })}
                                                        />
                                                    }
                                                </ButtonGroup>
                                            </Row>
                                        </Fragment>)
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Product;