import { Button } from 'antd';
import PropTypes from 'prop-types';

import './CustomButton.css';

const CustomButton = ({ title, onClick }) => {
    return (
        <Button onClick={onClick} className='h-explorer-btn' type="primary">{title}</Button>
    )
}
CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CustomButton
