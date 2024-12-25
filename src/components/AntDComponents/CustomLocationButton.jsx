import { Button } from 'antd';
import PropTypes from 'prop-types';

import './CustomLocationButton.css';

const CustomLocationButton = ({ location, onClick }) => {
    return (
        <Button className='location-btn' type="primary"
            onClick={onClick}>{location}</Button>
    )
}

CustomLocationButton.propTypes = {
    location: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CustomLocationButton
