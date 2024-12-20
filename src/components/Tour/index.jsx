import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/index'
import './style.css';
import Icons from '../../utils/Icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSelectedTour } from '../../tourDataManager/TourSlice/TourSlice';
import TourCard from '../CustomComponents/TourCard';
import { useEffect } from 'react';
import { setUnbooked } from '../../tourDataManager/TourStatusSlice/TourStatusSlice'
import NotFound from '../CustomComponents/NotFound';

const AllTours = () => {
    const locationName = useLocation().state?.locationName;
    const tours = useSelector(state => state.tours.value)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { IcFilter } = Icons;
    const filteredTours = locationName
        ? tours.filter((tour) => tour.city.toLowerCase() === locationName.toLowerCase())
        : tours;
    // Handle "View Details" button click
    const handleViewDetails = (tour) => {
        dispatch(setSelectedTour(tour));
        navigate(`/tour-details/${tour.id}`);
    };
    console.log(locationName)

    useEffect(() => {
        dispatch(setUnbooked());
    }, [dispatch]);
    return (
        <div className='main-content-tours'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container main-body-content'>
                {/* filter button */}

                {filteredTours.length > 0 ? (
                    <>
                        <div className='top-content-with-filter'>
                            {(locationName === '') && (
                                <h2>Top Destinantions At &quot;{locationName}&quot;</h2>
                            )}

                            <div className='filter-button'>
                                <img src={IcFilter} alt="filter-icon" />
                                <p>Filter</p>
                            </div>
                        </div>
                        <div className="tour-container">
                            {
                                filteredTours.map((tour) => (
                                    // Custom Tour Card component

                                    <TourCard
                                        key={tour.id}
                                        tour={tour}
                                        handleDetailBtn={() => handleViewDetails(tour)}
                                    />
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div className="no-tours-found">
                        <h2>Top Destinantions At &quot;{locationName}&quot;</h2>
                        <NotFound content={`Sorry, We didn't found any tour right now at "${locationName}"`} />
                    </div>
                )}

                {/* tour list container */}
                {(locationName === '') && (
                    <div className='tour-container'>
                        {tours.map((tour) => {
                            return (
                                // Custom Tour Card component
                                <TourCard key={tour.id} tour={tour} handleDetailBtn={() => handleViewDetails(tour)} />
                            )
                        })}
                    </div>
                )}

            </div>

        </div>
    )
}

export default AllTours
