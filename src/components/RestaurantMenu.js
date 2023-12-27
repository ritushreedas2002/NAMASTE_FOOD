import React from "react"
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{

    const {restid}=useParams();//Params is a object to fetch the unique id of the dynamic routing
    console.log(restid);
    const [restInfo,setrestInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    });

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+restid+"&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setrestInfo(json.data);
    }

    const data=restInfo?.cards[0]?.card.card.info;
    const item=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards;
    console.log(item);
   
    return restInfo===null?<Shimmer/>:(
        <div>
            <h1>{data.name}</h1>
            <h3>{data.cuisines.join(",")}  -   {data.costForTwo/100}  cost For Two</h3>
            <h2>Menu</h2>
            <ul>
                {item.map((res) => (
                    <li key={res.card.id}>{res.card.info.name}- Rs {res.card.info.price / 100 || res.card.info.defaultPrice / 100}</li>
                 ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;