// TourDetails.js
import './style.css';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/index';
import ItinerarySchedule from './components/ItinerarySchedule';
import WhatsaInclude from './components/WhatsaInclude';
import TourDetailsSection from './components/TourDetailsSection';

const TourDetailsPage = () => {

    const bookingStatus = useSelector((state) => state.bookingStatus.status);
    const isBooked = bookingStatus === "booked";
    const navigate = useNavigate();
    const handleTourBook = (tour) => {
        navigate(`/book-tour/${tour.id}`);
    };

    const { id } = useParams();
    const tours = useSelector(state => state.tours.value);
    const selectedTour = useSelector(state => state.tours.selectedTour)
        || tours.find(tour => tour.id === parseInt(id));

    if (!selectedTour) {
        return <div>No tour selected</div>;
    }

    return (
        <div className='tour-details-main-content'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container'>
                <div className='tour-details-container'>
                    <TourDetailsSection
                        selectedTour={selectedTour}
                    />
                    {/* Whats included portion */}
                    <WhatsaInclude
                        selectedTour={selectedTour}
                    />
                    {/* iteniry Schedule portion */}
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
