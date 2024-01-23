import React, { useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{

    const {restid}=useParams();//Params is a object to fetch the unique id of the dynamic routing
    const [showIndex,setShowIndex]=useState(null);

    //Use of Custom Hook to fetch data of each Restaurant
   const restInfo=useRestaurantMenu(restid);
   if(restInfo===null)return<Shimmer/>;

    const data=restInfo?.cards[0]?.card.card.info;
    //const {itemCards}= restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card ;
    //console.log(itemCards);
   
    //FILTER----out all the item categories and enhance the individual restaurant menu
    const categories=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="font-bold text-2xl my-9">{data.name}</h1>
            <h3 className="px-3 text-lg">{data.cuisines.join(",")}  -   {data.costForTwo/100}  cost For Two</h3>
           {/*Categories----acoordions */}
           {categories.map((category,index)=>(
                <RestaurantCategory key={category?.card?.card.title} 
                data={category?.card?.card} 
                showItems={index===showIndex?true:false}
                setShowIndex={()=>showIndex===null || showIndex!==index?setShowIndex(index):setShowIndex(null)}
                />
                
           ))}
           {/* */}
        </div>
    )
}
export default RestaurantMenu;