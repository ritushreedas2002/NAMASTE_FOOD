import './ResCard.css';

const ResCard = (props) => {
    const { data } = props;
    const{name,cuisines,avgRating,cloudinaryImageId}=data?.info;   
//? is called optional chaining which means if the data is present then further chaining is done

    return (
        <div className="res-card">
            <img
                className='res-logo'
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                alt="IMAGE CARD LOGO"
            />
            <h3>{name}</h3>
            <h4>CUISINES: {cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{data.info.sla.deliveryTime} min</h4>
        </div>
    );
}

export default ResCard;
