import './ResCard.css';
import { CDN_URL } from '../utils/constants';
const ResCard = (props) => {
    const { data } = props;
    const{name,cuisines,avgRating,cloudinaryImageId}=data?.info;   
//? is called optional chaining which means if the data is present then further chaining is done

    return (
        <div className="res-card">
            <img
                className='res-logo'
                src={CDN_URL +cloudinaryImageId}
                alt="CARD LOGO"
            />
            <h3>{name}</h3>
            <h4>CUISINES: {cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{data.info.sla.deliveryTime} min</h4>
        </div>
    );
}

export default ResCard;
