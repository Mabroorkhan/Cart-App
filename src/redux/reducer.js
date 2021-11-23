import { combineReducers } from "redux";
import CartSlice from "./productSlice";
import quantitySlice from "./quantitySlice";

const reducer = combineReducers({
    CartSlice: CartSlice.reducer,
    quantitySlice: quantitySlice.reducer
})

export default reducer;