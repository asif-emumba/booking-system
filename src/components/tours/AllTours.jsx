import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header'
import './AllTours.css'
import Icons from '../../utils/Icons';
import { useNavigate } from 'react-router-dom';
import { setSelectedTour } from '../../tour/tourSlice';


const AllTours = () => {
    const tours = useSelector(state => state.tours.value)
    const dispatch = useDispatch(); // Dispatch action to Redux store
    const navigate = useNavigate(); // For navigation to the details page
    const { IcDollar, IcClock, IcFilter } = Icons;

    // Handle "View Details" button click
    const handleViewDetails = (tour) => {
        dispatch(setSelectedTour(tour)); // Dispatch the selected tour to Redux
        navigate(`/tour-details/${tour.id}`); // Navigate to the details page
    };
    return (
        <div className='main-content-tours'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container main-body-content'>
                {/* filter button */}
                <div className='filter-button'>
                    <img src={IcFilter} alt="filter-icon" />
                    <p>Filter</p>
                </div>
                {/* tour list container */}
                <div className='tour-container'>
                    {tours.map((tour) => {
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
                                            <div className='icon-container'>
                                                <img alt="dollar-icon" src={IcDollar} />
                                            </div>
                                            <p>{tour.priceRange}</p>
                                        </div>
                                        <div className='tour-details-footer-left'>
                                            <div className='icon-container'>
                                                <img alt="dollar-icon" src={IcClock} />
                                            </div>
                                            <p>{tour.numOfDays}</p>
                                        </div>
                                    </div>
                                    <button
                                        className='view-details-hover-btn'
                                        onClick={() => handleViewDetails(tour)} // Pass the selected tour to Redux and navigate
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default AllTours
