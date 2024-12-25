/* eslint-disable react/prop-types */
import '../style.css';

const BookTourForm = ({ register, errors, onSubmit, handleOptionClick, isOpen, selectedOption, toggleDropdown }) => {

    return (
        <form className="booking-form" onSubmit={onSubmit} noValidate>
            <p>Name</p>
            <div className="input-container">
                <input
                    type="text"
                    {...register('userName', {
                        required: 'Name is required',
                        minLength: { value: 5, message: 'Name must be at least 5 characters' },
                        maxLength: { value: 50, message: 'Name must be under 50 characters' },
                    })}
                />
                {errors.userName && <span className="error-message">{errors.userName.message}</span>}
            </div>

            <p>Email</p>
            <div className="input-container">
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Please enter a valid email address',
                        },
                    })}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="input-container-number-inputs">
                <div className="split-inut">
                    <p>Number of Adults</p>
                    <input
                        type="number"
                        {...register('numberOfAudults', {
                            required: 'One Adult is required',
                            min: { value: 1, message: 'At least One Adult is required' },
                            max: { value: 100, message: 'Maximum 100 adults allowed' },
                        })}
                    />
                    {errors.numberOfAudults && <span style={{ color: 'red' }}>{errors.numberOfAudults.message}</span>}
                </div>
                <div className="split-inut">
                    <p>Number of Childrens</p>
                    <input
                        type="number"
                        {...register('numberOfChildrens', {
                            min: { value: 0, message: 'Numbers cannot be negative' },
                            max: { value: 100, message: 'Maximum 100 children allowed' },
                        })}
                    />
                    {errors.numberOfChildrens && <span style={{ color: 'red' }}>{errors.numberOfChildrens.message}</span>}
                </div>
            </div>
            <p>Phone</p>
            <div className="input-container">
                <input
                    type="text"
                    {...register('phoneNumber', {
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]{11}$/,
                            message: 'Phone number must be 11 digits',
                        },
                    })}
                />
                {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber.message}</span>}
            </div>
            <p>Payment Methods</p>
            <div className="input-container">
                <div className="dropdown" name="selectedPaymentMethod">
                    <button type="button" className="dropdown-toggle" onClick={toggleDropdown}>
                        {selectedOption || 'Select Payment Method'}
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
    )
};

export default BookTourForm;
