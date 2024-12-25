// TourDetails.js
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelectBookingStatus } from '../../../store/Slice/TourStatusSlice';

import './style.css';
import Header from '../Header/index';
import ItinerarySchedule from './components/ItinerarySchedule';
import WhatsaInclude from './components/WhatsaInclude';
import TourDetailsSection from './components/TourDetailsSection';
import { useSelectTours } from '../../../store/Slice/TourSlice';

const TourDetailsPage = () => {
    const { id } = useParams();
    const tours = useSelectTours();
    const bookingStatus = useSelectBookingStatus();
    const navigate = useNavigate();
    const isBooked = bookingStatus === "booked";
    const selectedTour = useSelector(state => state.tours.selectedTour)
        || tours.find(tour => tour.id === parseInt(id));


    if (!selectedTour) {
        return <div>No tour selected</div>;
    }

    const handleTourBook = (tour) => {
        navigate(`/book-tour/${tour.id}`);
    };

    return (
        <div className='tour-details-main-content'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container'>
                <div className='tour-details-container'>
                    <TourDetailsSection
                        selectedTour={selectedTour}
                    />
                    <WhatsaInclude
                        selectedTour={selectedTour}
                    />
                    <ItinerarySchedule
                        selectedTour={selectedTour}
                        isBooked={isBooked}
                        handleTourBook={handleTourBook}
                    />
                </div>

            </div>
        </div>
    );
};

export default TourDetailsPage;
