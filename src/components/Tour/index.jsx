import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/index'
import './style.css';
import Icons from '../../utils/Icons';
import { useNavigate } from 'react-router-dom';
import { setSelectedTour } from '../../tourDataManager/TourSlice/TourSlice';
import TourCard from '../CustomComponents/TourCard';
import { useEffect } from 'react';
import { setUnbooked } from '../../tourDataManager/TourStatusSlice/TourStatusSlice'

const AllTours = () => {
    const tours = useSelector(state => state.tours.value)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { IcFilter } = Icons;

    // Handle "View Details" button click
    const handleViewDetails = (tour) => {
        dispatch(setSelectedTour(tour));
        navigate(`/tour-details/${tour.id}`);
    };
    useEffect(() => {
        dispatch(setUnbooked());
    }, [dispatch]);
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
                            // Custom Tour Card component
                            <TourCard key={tour.id} tour={tour} handleDetailBtn={() => handleViewDetails(tour)} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default AllTours
