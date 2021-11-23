import {
    // BrowserRouter,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import Home from "../Home/Home";
import ProductForm from "../ProductForm/ProductForm";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import LoginAdmin from "../LoginAdmin/LoginAdmin";
import NotFound from "../NotFound/NotFound";
import NavComponent from "../Navbar/NavComponent";

function Router() {
    return <Routes>
        <Route path="home" element={ <><NavComponent /><Home /></>} exact />
        <Route path="add-product" element={<><NavComponent /><ProductForm /></>} exact />
        <Route path="cart" element={<><NavComponent /><Cart /></>} exact />
        <Route path="product/:id" element={<><NavComponent /><Product /></>} exact />
        <Route path="Login" element={<Login />} exact />
        <Route path="SignUp" element={<SignUp />} exact />
        <Route path="Login/Admin" element={<LoginAdmin />} exact />
        <Route path="/" element={<Navigate replace to="Login" />} exact />
        <Route path="*" element={ <NotFound />} />
    </Routes>

}

export default Router;