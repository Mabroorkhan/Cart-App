import { useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registeredObjGet } from "../helper/localStorageHelper";
import CartCounter from "./CartCounter";


function Cart() {

    const navigate = useNavigate();
    const showCart = useSelector((state) => state.quantitySlice?.products);

    let logCheck = registeredObjGet("role")

    useEffect(() => {
        if (!logCheck.role || logCheck.role !== "user") {
            navigate('/')
        }
    },[])

    const total = useMemo(() => {

        let totalPrice = 0;

        showCart.map((item) => {
            totalPrice += item.prodPrice * item.quantity;
            return totalPrice;
        })

        return totalPrice;
    }, [showCart])


    return (
        <Container className="res2">
            <h2 >Cart</h2>
            {showCart.map((prods, index) =>

                <Row key={prods.id} >
                    <CartCounter
                        idx={index}
                        prod={prods}
                    />
                </Row>
            )}
            <Row>
                <Col className="cartPrice">
                    {total ? "Total Price: Rs. " + total : ""   }
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;