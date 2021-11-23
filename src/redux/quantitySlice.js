import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    category:{}
}

const quantitySlice = createSlice({
    name: "Quantity",
    initialState,
    reducers: {

        cartProducts: (state, action) => {

            let idx = state.products.findIndex((i) => i.id === action.payload.id);
            
            if(action.payload.id === state.products[idx]?.id){
                console.log("inside quantitySlice if");
                state.products[idx].quantity += 1
            }
           else{ state.products.push(action.payload);
           }
        },
        remove: (state, action) => {

            state.products.splice(action.payload, 1)

        },
       
        addCounter: (state, action) => {

            state.products[action.payload.idx].quantity += 1;
        },

        subCounter: (state, action) => {
            if (state.products[action.payload.idx].quantity >= 2) {
                state.products[action.payload.idx].quantity -= 1;
            }
            else if(state.products[action.payload.idx].quantity === 1){
                state.products.splice(action.payload.idx, 1)
            }

        },

        updateCategory:(state, action) => {
            state.category = action.payload
        }
    }
})

export default quantitySlice;