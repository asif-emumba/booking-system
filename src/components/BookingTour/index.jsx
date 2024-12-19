/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Icons from "../../utils/Icons";
import Header from "../Header/index";
import './style.css';
import PhoneInput from "antd-phone-input";
import { addBooking, updateBooking } from '../../tourDataManager/BookedTour/BookedTourSlice'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
import Popup from "../CustomComponents/PopUpAlert";
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
        selectedPaymentMethod: '',
    });

    const [errors, setErrors] = useState({
        userName: '',
        email: '',
        numberOfAudults: '',
        numberOfChildrens: '',
        selectedPaymentMethod: '',
    });

    const resetFormData = {
        userName: '',
        email: '',
        numberOfAudults: '',
        numberOfChildrens: '',
        selectedPaymentMethod: '',
    };

    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Update dropdown display
        setFormData({
            ...formData,
            selectedPaymentMethod: option, // Update formData
        });
        setErrors({
            ...errors,
            selectedPaymentMethod: '', // Clear error
        });
        setIsOpen(false); // Close dropdown
    };

    const validator = (_, { valid }) => {
        if (valid()) {
            return Promise.resolve();
        }
        return Promise.reject("Invalid phone number");
    }

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
        } else if (parseInt(formData.numberOfChildrens, 0) < 0 || parseInt(formData.numberOfChildrens, 10) > 100) {
            newErrors.numberOfChildrens = 'Numbers not be in negitive';
        }
        // Payment Method Validation
        if (selectedOption === 'Select') {
            newErrors.selectedPaymentMethod = 'Please select a payment method';
        } else {
            formData.selectedPaymentMethod = selectedOption
        }
        setErrors(newErrors);
        console.log(formData);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === 'update') {
            // Handle update
            if (validate() && selectedTour) {
                // Update booking with the form data
                dispatch(updateBooking({ id: selectedTour.id, updatedDetails: formData }));
                setPopupMessage('Booking updated successfully!');
                setShowPopup(true);

            } else {
                console.log('Form validation failed during update');
            }
            return;
        }

        // Handle new booking
        if (validate() && selectedTour) {
            dispatch(addBooking({ ...formData, id: selectedTour.id }));
            setPopupMessage('Booking confirmed!');
            setShowPopup(true);

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
                    <form className="booking-form" onSubmit={handleSubmit} noValidate>
                        <p>Name</p>
                        <div className="input-container">
                            <input type="text" name="userName" required value={formData.userName} onChange={handleChange} />
                            {errors.userName && <span className="error-message">{errors.userName}</span>}
                        </div>

                        <p>Email</p>
                        <div className="input-container">
                            <input type="email" name="email"
                                required
                                value={formData.email}
                                onChange={handleChange} />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="input-container-number-inputs">
                            <div className="split-inut">
                                <p>Number of Adults</p>
                                <input type="number" name="numberOfAudults"
                                    required
                                    value={formData.numberOfAudults}
                                    onChange={handleChange} />
                                {errors.numberOfAudults && <span style={{ color: 'red' }}>{errors.numberOfAudults}</span>}
                            </div>
                            <div className="split-inut">
                                <p>Number of Childrens</p>
                                <input type="number" name="numberOfChildrens"
                                    required
                                    value={formData.numberOfChildrens}
                                    onChange={handleChange} />
                                {errors.numberOfChildrens && <span style={{ color: 'red' }}>{errors.numberOfChildrens}</span>}
                            </div>
                        </div>
                        <p>Phone</p>
                        <div className="input-container"><FormItem rules={[{ validator }]}>
                            <PhoneInput enableSearch />
                        </FormItem></div>
                        <p>Payment Methods</p>
                        <div className="input-container">
                            <div className="dropdown" name="selectedPaymentMethod" onClick={handleChange}>
                                <button type="button" className="dropdown-toggle" onClick={toggleDropdown}>
                                    {selectedOption}
                                    <span className="icon">{isOpen ? "▲" : "▼"}</span>
                                </button>
                                {isOpen && (
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item" onClick={() => handleOptionClick("Master Card")}>
                                            Master Card
                                        </li>
                                        <li className="dropdown-item" onClick={() => handleOptionClick("Visa")}>
                                            Visa
                                        </li>
                                    </ul>
                                )}
                            </div>
                            {errors.selectedPaymentMethod && <span style={{ color: 'red' }}>{errors.selectedPaymentMethod}</span>}
                        </div>
                        <button className="submit-button">Confirm</button>
                    </form>
                    {/* Popup */}
                    {showPopup && (
                        <Popup
                            message={popupMessage}
                            onClose={() => {
                                setShowPopup(false)
                                setFormData(resetFormData)
                            }}
                        />
                    )}
                </div>
                <div className="book-tour-cover-img">
                    <img src={BokingCover} alt="book-tour-cover" />
                </div>
            </div>

        </div>

    )
}

export default BookTour
