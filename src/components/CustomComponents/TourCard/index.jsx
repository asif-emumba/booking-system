import Icons from "../../../utils/Icons";
import CircularIcon from "../RoundedIcons";
import './style.css';

/* eslint-disable react/prop-types */
const TourCard = ({ tour, handleDetailBtn }) => {
    const { IcDollarSmall, IcClock } = Icons;
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
                </div>
                <button
                    className='view-details-hover-btn'
                    onClick={() => handleDetailBtn(tour)}
                >
                    View Details
                </button>
            </div>
        </div>
    )
}

export default TourCard
