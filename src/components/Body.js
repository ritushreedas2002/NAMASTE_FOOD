import './Body.css';
import ResCard from './ResCard'; // Assuming Rest_card is imported from another file
//import data from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {

//mock data
 // const [listOfRestaurants, setListOfRestaurants] = useState(data);  //array destructuring
  //useState is returning an array
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredlistOfRestaurants, setfilteredListOfRestaurants] = useState([]); //a copy of the listof restaurants,all changes are made here

  const [searchtext, setsearchtext] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);
 
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  }
  // //shows the fake cards then actual restaurant cards
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

return listOfRestaurants.length === 0?<Shimmer/>:(            //called conditional rendering
  <div className='body'>
    <div className='filter'>
      <div className='search'>
        <input type='text' className='search-box' value={searchtext} onChange={
          (e)=>{
            setsearchtext(e.target.value)
          }
        }></input>  
        <button className='search-btn' onClick={()=>{
              const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setfilteredListOfRestaurants(filteredList);
        }}>Search</button>
      </div>
      <button className='filter-btn' onClick={() => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4);
        setfilteredListOfRestaurants(filteredList);
      }}>
        TOP RATED RESTAURANTS
      </button>
    </div>
    <div className='res-container'>
      {
        // key is used to uniquely identify the cards
        filteredlistOfRestaurants.map((rest) => (
          <Link key={rest.info.id} to={"/restaurants/"+rest.info.id}><ResCard data={rest} /></Link>
        ))
      
      }
    </div>
  </div>
);
 }
export default Body;
