import { useSelector } from "react-redux";
import Icons from "../../../utils/Icons";
import CircularIcon from "../RoundedIcons";
import './style.css';

/* eslint-disable react/prop-types */
const TourCard = ({ tour, handleDetailBtn, handleUpdatebtn, handleDeletebtn }) => {
    const { IcDollarSmall, IcClock, IcBin } = Icons;
    const bookingStatus = useSelector((state) => state.bookingStatus.status);
    const isBooked = bookingStatus === "booked";
    return (
        <div
            key={tour.id}
            className='tour-card'
        >
            <img alt="tour-cover-img" src={tour.coverImage} className='tour-image' />
            <div className='tour-details'>
                <h2>{tour.name}</h2>
                <p>{tour.description}</p>
                {/* card bottom details */}
                <div className='tour-details-footer'>
                    <div className='tour-details-footer-left'>
                        <CircularIcon src={IcDollarSmall} alt='dollar-icon' height='24px' width='24px' />
                        <p>{tour.priceRange}</p>
                    </div>
                    <div className='tour-details-footer-left'>
                        <CircularIcon src={IcClock} alt='clock-icon' height='24px' width='24px' />
                        <p>{tour.numOfDays}</p>
                    </div>
                </div>{
                    isBooked ?
                        (<div className="booked-hover-State">
                            <img src={IcBin} alt="bin-icon" onClick={() => handleDeletebtn(tour)} />
                            <button onClick={() => handleDetailBtn(tour)}>Details</button>
                            <button onClick={() => handleUpdatebtn(tour)}>Update</button>
                        </div>) :
                        (<button
                            className='view-details-hover-btn'
                            onClick={() => handleDetailBtn(tour)}
                        >
                            View Details
                        </button>)
                }

            </div>
        </div>
    )
}

export default TourCard
