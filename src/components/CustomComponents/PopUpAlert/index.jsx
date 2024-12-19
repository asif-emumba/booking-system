import './style.css';
import PropTypes from 'prop-types';

const Popup = ({ message, onClose }) => (
    <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content">
            <p>{message}</p>
            <button onClick={onClose}>OK</button>
        </div>
    </div>
);

Popup.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default Popup

