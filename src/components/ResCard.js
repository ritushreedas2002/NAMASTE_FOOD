import './ResCard.css';
import { CDN_URL } from '../utils/constants';
const ResCard = (props) => {
    const { data } = props;
    const{name,cuisines,avgRating,cloudinaryImageId}=data?.info;   
//? is called optional chaining which means if the data is present then further chaining is done

    return (
        <div className="m-4 p-4  bg-gray-100 w-[250px] rounded-lg hover:bg-gray-300">
            <img
                className='rounded-md'
                src={CDN_URL +cloudinaryImageId}
                alt="CARD LOGO"
            />
            <h3 className='font-bold py-2 text-xl'>{name}</h3>
            <h4>CUISINES: {cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{data.info.sla.deliveryTime} min</h4>
        </div>
    );
}
//HIGHER OREDR FUNCTION

//this function takes rescard and returns a component 
//making every 5 th card promoted
export const withPromotedLabel=(ResCard)=>{
    return (props)=>{
        return(
            <div>
                <label className='absolute bg-black text-white m-3 p-2  rounded-lg'>Promoted</label>
                <ResCard {...props}/>     {/*passing props by spreading it as when we pass data we bundle everything in props and then we pass the props by destructing it*/}
            </div>
        )
    }
}
export default ResCard;
