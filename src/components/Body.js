import './Body.css';
import ResCard,{withPromotedLabel} from './ResCard'; // Assuming Rest_card is imported from another file
//import data from '../utils/mockData';
import { useContext, useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from './UserContext';
const Body = () => {

//mock data
 // const [listOfRestaurants, setListOfRestaurants] = useState(data);  //array destructuring
  //useState is returning an array
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredlistOfRestaurants, setfilteredListOfRestaurants] = useState([]); //a copy of the listof restaurants,all changes are made here
 // console.log(listOfRestaurants);

  const RestaurantWithPromoted=withPromotedLabel(ResCard);
  const [searchtext, setsearchtext] = useState("");
  const {loggedInUser,setusername}=useContext(UserContext);

  useEffect(()=>{
    fetchData();
  },[]);
 
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6017521&lng=88.38313269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  }
  // //shows the fake cards then actual restaurant cards
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  const onlineinfo=useOnlineStatus();

  if(onlineinfo===false){
    return <h1>OOPS!! U are offline .CHECK UR NET CONNECTION</h1>
  }

return listOfRestaurants.length === 0?<Shimmer/>:(            //called conditional rendering
  <div className='body'>
    <div className='flex items-center'>
      <div className='m-4 p-4'>
        <input type='text' className='search-box border border-solid border-blue-600' value={searchtext} onChange={
          (e)=>{
            setsearchtext(e.target.value)
          }
        }></input>  
        <button className='px-3 py-1 m-3 bg-green-100 rounded-md' onClick={()=>{
              const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setfilteredListOfRestaurants(filteredList);
        }}>Search</button>
      </div>
      <div>
      <button className='px-2 py-1 bg-green-100 rounded-md' onClick={() => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
        setfilteredListOfRestaurants(filteredList);
      }}>
        TOP RATED RESTAURANTS
      </button>
      </div>
      <div className='p-4 m-4 '>
          <label>UserName : </label>
          <input className='border border-black p-2 ' value={loggedInUser} onChange={(e)=>setusername(e.target.value)}></input>
      </div>
    </div>
    <div className='flex flex-wrap justify-evenly'>
      {
        // key is used to uniquely identify the cards
        
        filteredlistOfRestaurants.map((rest) => (
          <Link key={rest.info.id} to={"/restaurants/"+rest.info.id}>
            {rest.info.id %5===0?<RestaurantWithPromoted data={rest}/>:<ResCard data={rest} />}
            
            </Link>
        ))
      
      }
    </div>
  </div>
);
    }
export default Body;
