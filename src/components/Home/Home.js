import { Col, Container, Row } from "react-bootstrap";
import PrintGird from "../PrintGrid/PrintGrid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import CategoryDrop from "../CategoryDropdown/CategoryDropdown";
import { registeredObjGet } from "../helper/localStorageHelper";



function Home() {

    const navigate = useNavigate();
    const printHomeGrid = useSelector((state) => state.CartSlice.data);
    const category = useSelector((state) => state.quantitySlice.category);

    let logCheck = registeredObjGet("role")

    useEffect(() => {
        if (!logCheck.role) {
            navigate('/')
        }
    },[])

    return (
        <Container>
            <Col className="category-button">
            <CategoryDrop />
            </Col>
            <Row>
                {printHomeGrid && printHomeGrid.map((text, index) => {
                    return ( 
                        (category.category === "All Categories" || category.category === text.category ) &&
                    
                    <PrintGird
                        key={`${text.title + index}`}
                        index={index}
                        title={text.title}
                        price={text.price}
                    /> )
                })}
            </Row>
        </Container>
    );
}

export default Home;