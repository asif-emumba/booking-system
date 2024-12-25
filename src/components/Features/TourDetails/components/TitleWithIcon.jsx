/* eslint-disable react/prop-types */
import '../style.css'
import CircularIcon from '../../../RoundedIcons'

const TitleWithIcon = ({ src, alt, selectedTour }) => {
    return (
        <div className='details-with-icons'>
            <CircularIcon src={src} alt={alt} height='24px' width='24px' />
            <p>{selectedTour}</p>
        </div>
    )
}

export default TitleWithIcon
