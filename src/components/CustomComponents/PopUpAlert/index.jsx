
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { hideAlert } from '../../../tourDataManager/AlertSlice/AlertSlice';

const CustomAlert = () => {
    const dispatch = useDispatch();
    const { isOpen, message, buttons } = useSelector((state) => state.alert);

    const handleConfirm = () => {
        console.log('Delete confirmed');
        dispatch(hideAlert());
    };

    const handleCancel = () => {
        dispatch(hideAlert());
    };

    if (!isOpen) return null;

    return (
        <div className="alert-backdrop">
            <div className="alert-box">
                <p>{message}</p>
                <div className="alert-buttons">
                    {buttons.cancel && (
                        <button className="alert-btn cancel" onClick={handleCancel}>
                            {buttons.cancel}
                        </button>
                    )}
                    {buttons.confirm && (
                        <button className="alert-btn delete" onClick={handleConfirm}>
                            {buttons.confirm}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;

