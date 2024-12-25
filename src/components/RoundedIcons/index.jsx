import './style.css'
import PropTypes from 'prop-types';

const CircularIcon = ({ src, alt, height, width }) => {

    return (
        <div style={{ height, width, borderRadius: '50%' }} className='logo-container'>
            <img src={src} alt={alt} />
        </div>
    )
};
CircularIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
};

export default CircularIcon

