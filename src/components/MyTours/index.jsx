import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './style.css';
import TourCard from '../CustomComponents/TourCard';
import NotFound from '../CustomComponents/NotFound';

const MyTours = () => {
    const bookedTours = useSelector((state) => state.bookedTours.bookings);
    const allTours = useSelector((state) => state.tours.value);
    const navigate = useNavigate();

    const handleUpdate = (tour) => {
        navigate(`/tour-details/${tour.id}`);
    };

    return (
        <div className='main-content-my-tours'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container main-body-content-my-tours'>
                <h2 className='booked-title'>My Booked Tours</h2>
                {bookedTours.length > 0 ? (
                    bookedTours.map((booking) => {
                        const tourDetails = allTours.find((tour) => tour.id === booking.id);
                        console.log('tourDetails', tourDetails);
                        return (
                            // Custom Tour Card component
                            <TourCard key={tourDetails.id} tour={tourDetails} handleDetailBtn={() => handleUpdate(tourDetails)} />
                        )
                    })
                ) : (
                    <NotFound content='Sorry, We didn’t found any booked tour right now' />
                )}

            </div>
        </div>
    );
};

export default MyTours;
