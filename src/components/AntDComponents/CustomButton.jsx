import { Button } from 'antd';
import './CustomButton.css';
import PropTypes from 'prop-types';
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
