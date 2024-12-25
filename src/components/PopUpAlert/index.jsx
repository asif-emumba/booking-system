/* eslint-disable react/prop-types */
import './style.css';

const CustomAlert = ({ isOpen, message, buttons, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="alert-backdrop">
            <div className="alert-box">
                <p>{message}</p>
                <div className="alert-buttons">
                    {buttons.cancel && (
                        <button className="alert-btn cancel" onClick={onCancel}>
                            {buttons.cancel}
                        </button>
                    )}
                    {buttons.confirm && (
                        <button className="alert-btn delete" onClick={onConfirm}>
                            {buttons.confirm}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
