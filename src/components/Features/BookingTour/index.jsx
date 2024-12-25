import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addBooking, updateBooking } from '../../../store/Slice/BookedTourSlice';

import './style.css';
import Icons from "../../../utils/Icons";
import Header from "../../Features/Header";
import CustomAlert from "../../PopUpAlert";
import BookTourForm from "./components/form";
import { useForm } from "react-hook-form";

const BookTour = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate()
    const { BokingCover } = Icons

    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tours.value);
    const selectedTour = useSelector(state => state.tours.selectedTour)
        || tours.find(tour => tour.id === parseInt(id));
    const bookedTours = useSelector((state) => state.bookedTours.bookings);
    const [selectedOption, setSelectedOption] = useState("Select");
    const [isOpen, setIsOpen] = useState(false);
    const [alertData, setAlertData] = useState({
        isOpen: false,
        message: 'Are you sure you want to delete this?',
        buttons: { cancel: 'Cancel', confirm: 'Delete' },
    });
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const mode = location.state?.modeName || "book";

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleNavigation = () => {
        navigate(`/my-tours`);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setValue('selectedPaymentMethod', option);
        setIsOpen(false);
    };

    const handleConfirm = () => {
        setAlertData((prev) => ({ ...prev, isOpen: false }));
        handleNavigation()
    };

    const onSubmit = (data) => {
        // get todays date 
        const todayDate = new Date().toISOString().split('T')[0];
        if (!selectedOption || selectedOption === 'Select') {
            alert('Please select a payment method.');
            return;
        }

        if (mode === 'update' && selectedTour) {
            const updatedBooking = { ...data, bookingDate: todayDate, selectedPaymentMethod: selectedOption };
            dispatch(updateBooking({ id: selectedTour.id, updatedDetails: updatedBooking }));
            setAlertData({
                isOpen: true,
                message: 'TourDetails updated successfully!',
                buttons: { confirm: 'Done' },
            });
        } else {
            const newBooking = { ...data, id: selectedTour.id, bookingDate: todayDate, selectedPaymentMethod: selectedOption };
            dispatch(addBooking(newBooking));
            setAlertData({
                isOpen: true,
                message: 'Tour booked successfully!',
                buttons: { confirm: 'Done' },
            });
        }
    };

    useEffect(() => {
        // If mode is 'update', pre-fill the form with existing user details
        if (mode === 'update') {
            const booking = bookedTours.find((booking) => booking.id === parseInt(id, 10));
            if (booking) {
                reset({
                    userName: booking.userName,
                    email: booking.email,
                    numberOfAudults: booking.numberOfAudults,
                    numberOfChildrens: booking.numberOfChildrens,
                    phoneNumber: booking.phoneNumber,
                    selectedPaymentMethod: booking.selectedPaymentMethod,
                });
                setSelectedOption(booking.selectedPaymentMethod || 'Select'); // Set dropdown value
            }
        }
    }, [id, bookedTours, mode, reset]);

    if (!selectedTour) {
        return <div>No tour selected</div>;
    }

    return (
        <div className="content-book-tour">
            <Header isShow={false} onClick={() => { }} />
            <div className="main-content-book-tour">
                <div className="book-tour-form">
                    <h2>{mode === 'update' ? 'Update Your Booking' : 'Confirm Your Booking'}</h2>
                    <BookTourForm
                        register={register}
                        errors={errors}
                        onSubmit={handleSubmit(onSubmit)}
                        selectedOption={selectedOption}
                        toggleDropdown={toggleDropdown}
                        isOpen={isOpen}
                        handleOptionClick={handleOptionClick}
                    />
                    <CustomAlert
                        isOpen={alertData.isOpen}
                        message={alertData.message}
                        buttons={alertData.buttons}
                        onConfirm={handleConfirm}
                    />
                </div>
                <div className="book-tour-cover-img">
                    <img src={BokingCover} alt="book-tour-cover" />
                </div>
            </div>
        </div>
    )
}

export default BookTour
