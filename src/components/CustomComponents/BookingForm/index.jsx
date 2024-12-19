/* eslint-disable react/prop-types */
import './style.css';

const BookTourForm = ({ formData, errors, handleSubmit, handleChange, handleOptionClick, isOpen, selectedOption, toggleDropdown }) => {

    return (
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
            <div className="input-container">
                <input type="text" name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange} />
                {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
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
