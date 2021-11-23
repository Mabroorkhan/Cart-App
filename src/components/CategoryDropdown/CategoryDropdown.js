import { useEffect, useState } from "react";
import { DropdownButton, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import quantitySlice from "../../redux/quantitySlice";


function CategoryDrop(){

    const [category, setCategory] = useState("All Categories");
    const dispatch = useDispatch();

   useEffect(() => {

    dispatch(quantitySlice.actions.updateCategory({category}))
   },[category])

    return (
        <DropdownButton variant="secondary"
            title={category ? category : "All Categories"}
            id="basic-nav-dropdown">
            <NavDropdown.Item
                // href="#action/3.1" 
                onClick={() => setCategory("All Categories")}>
                All Categories
            </NavDropdown.Item>
            <NavDropdown.Item
                // href="#action/3.1" 
                onClick={() => setCategory("Car")}>
                Car
            </NavDropdown.Item>
            <NavDropdown.Item
                // href="#action/3.2" 
                onClick={() => setCategory("Cell Phone")}>
                Cell Phone
            </NavDropdown.Item>
            <NavDropdown.Item
                // href="#action/3.3" 
                onClick={() => setCategory("Jewellery")}>
                Jewellery
            </NavDropdown.Item>
            <NavDropdown.Item
                // href="#action/3.3" 
                onClick={() => setCategory("Accessories")}>
                Accessories
            </NavDropdown.Item>
            <NavDropdown.Item
                // href="#action/3.3" 
                onClick={() => setCategory("Electronic")}>
                Electronic
            </NavDropdown.Item>
        </DropdownButton>)

}

export default CategoryDrop;