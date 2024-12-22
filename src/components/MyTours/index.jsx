import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './style.css';
import TourCard from '../CustomComponents/TourCard';
import NotFound from '../CustomComponents/NotFound';
import { useEffect, useState } from 'react';
import { setBooked } from '../../tourDataManager/TourStatusSlice/TourStatusSlice';
import { deleteBooking } from '../../tourDataManager/BookedTour/BookedTourSlice';
import CustomAlert from '../CustomComponents/PopUpAlert';

const MyTours = () => {
    const bookedTours = useSelector((state) => state.bookedTours.bookings);
    const allTours = useSelector((state) => state.tours.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [alertData, setAlertData] = useState({
        isOpen: false,
        message: '',
        buttons: { cancel: 'Cancel', confirm: 'Confirm' },
        onConfirm: () => { },
        onCancel: () => { },
    });
    // navigate to tour details page
    const handleDetails = (tour) => {
        navigate(`/tour-details/${tour.id}`);
    };
    // navigate to update tour page
    const handleUpdate = (id) => {
        navigate(`/book-tour/${id}`, { state: { modeName: "update" } });
    };

    const handleDelete = (bookingId) => {
        const booking = bookedTours.find((b) => b.id === bookingId);
        if (!booking) {
            setAlertData({
                isOpen: true,
                message: 'Booking not found!',
                buttons: { confirm: 'Close' },
                onConfirm: () => setAlertData((prev) => ({ ...prev, isOpen: false })),
                onCancel: () => setAlertData((prev) => ({ ...prev, isOpen: false })),
            });
            return;
        }

        const bookingDate = new Date(booking.bookingDate);
        const currentDate = new Date();
        const differenceInTime = currentDate - bookingDate;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        if (differenceInDays < 3) {
            setAlertData({
                isOpen: true,
                message: 'You are not able to delete this tour within 3 days of booking.',
                buttons: { confirm: 'Close' },
                onConfirm: () => setAlertData((prev) => ({ ...prev, isOpen: false })),
                onCancel: () => setAlertData((prev) => ({ ...prev, isOpen: false })),
            });
            return;
        }

        setAlertData({
            isOpen: true,
            message: 'Are you sure you want to delete this booking?',
            buttons: { cancel: 'Cancel', confirm: 'Delete' },
            onConfirm: () => {
                dispatch(deleteBooking(bookingId));
                setAlertData((prev) => ({ ...prev, isOpen: false }));
                window.location.reload();
            },
            onCancel: () => setAlertData((prev) => ({ ...prev, isOpen: false })),
        });
    };

    useEffect(() => {
        dispatch(setBooked());
    }, [dispatch]);

    return (
        <div className='main-content-my-tours'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container'>
                <h2 className='booked-title'>My Booked Tours</h2>
                <div className='main-body-content-my-tours'>
                    {bookedTours.length > 0 ? (
                        bookedTours.map((booking, index) => {
                            const tourDetails = allTours.find((tour) => tour.id === booking.id);
                            console.log('tourDetails', tourDetails);
                            return (
                                // Custom Tour Card component
                                <TourCard
                                    key={index}
                                    tour={tourDetails}
                                    handleDetailBtn={() => handleDetails(tourDetails)}
                                    handleUpdatebtn={() => handleUpdate(booking.id)}
                                    handleDeletebtn={() => handleDelete(booking.id)}
                                />
                            )
                        })
                    ) : (
                        <NotFound content='Sorry, We didn’t found any booked tour right now' />
                    )}
                </div>

            </div>
            {/* Custom Alert */}
            <CustomAlert
                isOpen={alertData.isOpen}
                message={alertData.message}
                buttons={alertData.buttons}
                onConfirm={alertData.onConfirm}
                onCancel={alertData.onCancel}
            />
        </div>
    );
};

export default MyTours;
