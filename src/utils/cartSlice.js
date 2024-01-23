import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        //mutating the state --directly updating
        addItems:((state,action)=>{
            state.items.push(action.payload);
        }),
        removeItems:((state,action)=>{
            state.items.pop();
        }),
        clearCart:((state,action)=>{
            state.items.length=0
        })

    }
})
//export reducers and action

export const{addItems,removeItems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;