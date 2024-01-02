import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const handleClick=()=>{
        setShowIndex();
    }
    return (
        <div>
             {/*Header */}
             <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-md">
                <div className="flex justify-between cursor-pointer "onClick={handleClick}>
                <span className="text-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="text-bold text-xl"> ^</span>
                </div>
                {/*BOdy */}
                {showItems&&<ItemList items={data.itemCards}/>}
             </div>
           
            
            
        </div>
        
    )
   
}
export default RestaurantCategory;