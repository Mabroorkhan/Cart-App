import { useEffect, useState } from "react";
import { ButtonGroup, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import quantitySlice from "../../redux/quantitySlice";

function CartCounter({ idx, prod }) {

    const [price, setPrice] = useState(prod.prodPrice);
    const dispatch = useDispatch()

    useEffect(() => {

        let Price = prod.prodPrice * prod.quantity;
        setPrice(Price);

    }, [prod.quantity,])

    const removeCartPro = (idx) => {
        dispatch(quantitySlice.actions.remove(idx))
    }

    const handleQuantityadd = (idx) => {

        dispatch(quantitySlice.actions.addCounter({ idx }));
    }

    const handleQuantitysub = (idx) => {

        dispatch(quantitySlice.actions.subCounter({ idx }));
    }

    return (
        <>
            <Col>
                Title: {prod.prodTitle}<br />
                variants:{prod.opt.map((opt) => {
                    return opt.options.name
                })}
            </Col>

            <Col>
                <ButtonGroup className="prod-display2 me-2">
                    <Button variant="secondary" onClick={() => handleQuantitysub(idx)}>-</Button>
                    <Button variant="light" disabled={true}>{prod.quantity}</Button>
                    <Button variant="secondary" onClick={() => handleQuantityadd(idx)}>+</Button>
                </ButtonGroup>
                <Button className="me-5"
                    variant="danger"
                    onClick={() => removeCartPro(idx)}
                >Delete</Button>
            </Col>

            <Col className="cartPrice">
                Price: Rs. {price}
            </Col>
        </>
    )

}

export default CartCounter