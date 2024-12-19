/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Icons from "../../utils/Icons";
import Header from "../Header/index";
import './style.css';
import { addBooking, updateBooking } from '../../tourDataManager/BookedTour/BookedTourSlice'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showAlert } from "../../tourDataManager/AlertSlice/AlertSlice";
import CustomAlert from "../CustomComponents/PopUpAlert";
import BookTourForm from "../CustomComponents/BookingForm";

const BookTour = ({ mode = "book" }) => {
    const { id } = useParams(); // Get tour ID from route params
    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tours.value);
    const selectedTour = useSelector(state => state.tours.selectedTour)
        || tours.find(tour => tour.id === parseInt(id));
    const bookedTours = useSelector((state) => state.bookedTours.bookings);
    const [selectedOption, setSelectedOption] = useState("Select");
    const { BokingCover } = Icons
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        numberOfAudults: '',
        numberOfChildrens: '',
        phoneNumber: '',
        selectedPaymentMethod: '',
    });

    const [errors, setErrors] = useState({
        userName: '',
        email: '',
        numberOfAudults: '',
        numberOfChildrens: '',
        phoneNumber: '',
        selectedPaymentMethod: '',
    });

    const resetFormData = {
        userName: '',
        email: '',
        numberOfAudults: '',
        numberOfChildrens: '',
        phoneNumber: '',
        selectedPaymentMethod: '',
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Update displayed option
        setFormData((prevFormData) => ({
            ...prevFormData,
            selectedPaymentMethod: option, // Sync formData
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            selectedPaymentMethod: '', // Clear the error
        }));
        setIsOpen(false); // Close the dropdown
    };

    // form validation function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };
    // form validation function
    const validate = () => {
        const newErrors = {};

        // Text Input Validation
        if (!formData.userName) {
            newErrors.userName = 'Name is required';
        } else if (formData.userName.length < 5) {
            newErrors.userName = 'Name must be at least 5 characters';
        } else if (formData.userName.length > 50) {
            newErrors.userName = 'Name must be under 50 characters';
        }
        // Email Validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        // NumberOfAdults Validation
        if (!formData.numberOfAudults) {
            newErrors.numberOfAudults = 'One Adult is required';
        } else if (isNaN(formData.numberOfAudults)) {
            newErrors.numberOfAudults = 'Please enter a valid number';
        } else if (parseInt(formData.numberOfAudults, 0) <= 0 || parseInt(formData.numberOfAudults, 10) > 100) {
            newErrors.numberOfAudults = 'Atleast One Adult is required';
        }
        // NumberOfAdults Validation
        if (isNaN(formData.numberOfChildrens)) {
            newErrors.numberOfChildrens = 'Please enter a valid number';
        } else if (parseInt(formData.numberOfChildrens, 0) < 0 || parseInt(formData.numberOfChildrens, 11) > 100) {
            newErrors.numberOfChildrens = 'Numbers not be in negitive';
        }
        // phone number validation 
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (/[^0-9]/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Only digits are allowed';
        } else if (formData.phoneNumber.length !== 11) {
            newErrors.phoneNumber = 'Phone number must be 11 digits';
        }

        // Payment Method Validation
        if (!formData.selectedPaymentMethod || formData.selectedPaymentMethod === 'Select') {
            newErrors.selectedPaymentMethod = 'Please select a payment method';
        }

        setErrors(newErrors);
        console.log(formData);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // get todays date 
        const todayDate = new Date().toISOString().split('T')[0];

        if (mode === 'update') {
            // Handle update
            if (validate() && selectedTour) {
                const updatedBooking = { ...formData, bookingDate: todayDate };
                dispatch(updateBooking({ id: selectedTour.id, updatedDetails: updatedBooking }));
                dispatch(
                    showAlert({
                        message: 'Tour update Successfully',
                        buttons: { confirm: 'Ok', cancel: null },
                    })
                );
                setFormData(resetFormData);
                setSelectedOption('Select');
            } else {
                console.log('Form validation failed during update');
            }
            return;
        }

        // Handle new booking
        if (validate() && selectedTour) {
            dispatch(addBooking({ ...formData, id: selectedTour.id, bookingDate: todayDate }));
            dispatch(
                showAlert({
                    message: 'Tour booked Successfully',
                    buttons: { confirm: 'Ok', cancel: null },
                })
            );
            setFormData(resetFormData);
            setSelectedOption('Select');
        } else {
            console.log('Form validation failed');
        }
    };

    useEffect(() => {
        // If mode is 'update', pre-fill the form with existing user details
        if (location.pathname.includes('update')) {
            const booking = bookedTours.find((booking) => booking.id === parseInt(id, 10));
            if (booking) {
                setFormData({
                    userName: booking.userName,
                    email: booking.email,
                    numberOfAudults: booking.numberOfAudults,
                    numberOfChildrens: booking.numberOfChildrens,
                    phoneNumber: booking.phoneNumber,
                    selectedPaymentMethod: booking.selectedPaymentMethod,
                });
                setSelectedOption(booking.selectedPaymentMethod || "Select"); // Set dropdown value
            }
        }
    }, [id, bookedTours]);

    // use effect to get the selected tour details
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
                        formData={formData}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleOptionClick={handleOptionClick}
                        isOpen={isOpen}
                        selectedOption={selectedOption}
                        toggleDropdown={toggleDropdown}
                    />
                    <CustomAlert />
                </div>
                <div className="book-tour-cover-img">
                    <img src={BokingCover} alt="book-tour-cover" />
                </div>
            </div>

        </div>

    )
}

export default BookTour
