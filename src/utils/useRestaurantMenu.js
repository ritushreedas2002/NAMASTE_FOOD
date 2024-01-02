//CUSTOM HOOK

import { useEffect,useState } from "react";

const useRestaurantMenu=(restid)=>{
    const [restInfo,setrestInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    });

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6017521&lng=88.38313269999999&restaurantId="+restid+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setrestInfo(json.data);
    }

    return restInfo;
}

export default useRestaurantMenu;