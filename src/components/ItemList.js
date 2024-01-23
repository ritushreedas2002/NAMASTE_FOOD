import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch();
    const handleAddItems=(item)=>{
        //dispatch an action of addItems
        dispatch(addItems(item));
    }
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="m-2 p-3 border-b-4 shadow-sm text-left flex justify-between">
                    <div className="w-9/12">
                      <div className="py-3">
                        <span className="text-bold">{item.card.info.name}</span>
                        <span>  -₹{item.card.info.price?item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                      </div>
                       <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute ">
                            <button className="mx-14 p-2 bg-black text-white shadow-lg rounded-md text-xs" onClick={()=>handleAddItems(item)}>ADD +</button>
                        </div>
                       {item.card.info.imageId?<img src={CDN_URL+item.card.info.imageId} alt="res" className="w-41"/>:""   /*as in many items img not exits */}
                    </div>
                    
                </div>
                
            ))}
        </div>
    );
}
export default ItemList;
