import Icons from "../../utils/Icons"
import "./style.css"
import PropTypes from 'prop-types';
const NotFound = ({ content }) => {
    const { IcNoTour } = Icons
    return (
        <div className="not-found">
            <img src={IcNoTour} alt="No tour found" />
            <p>{content}</p>
        </div>
    )
}
NotFound.propTypes = {
    content: PropTypes.string.isRequired,
};

export default NotFound

