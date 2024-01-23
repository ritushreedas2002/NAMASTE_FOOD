import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center p-4 m-4">
            <h1 className="text-2xl font-bold">Cart</h1>
        <div className="m-auto w-6/12">
            <button className="m-2 p-2 bg-black text-white"
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length===0?<h1>Aff items to cart</h1>:<ItemList items={cartItems}/>}
            
        </div>
        </div>
        
    )
}
export default Cart;