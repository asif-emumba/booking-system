/* eslint-disable react/prop-types */
import Icons from '../../../utils/Icons'
import CircularIcon from '../../CustomComponents/RoundedIcons'
import '../style.css'

const TourDetailsSection = ({ selectedTour }) => {

    const { IcLocationSmall, IcDollarSmall, IcClock } = Icons
    return (
        <div>
            <h2 className='tour-h2-styles'>{selectedTour.name}</h2>
            {/* icons with details */}
            <div className='details-with-icons-row'>
                <div className='details-with-icons'>
                    <CircularIcon src={IcLocationSmall} alt='location' height='24px' width='24px' />

                    <p>{selectedTour.city}</p>
                </div>
                <div className='details-with-icons'>
                    <CircularIcon src={IcDollarSmall} alt='dollar' height='24px' width='24px' />
                    <p>{selectedTour.priceRange}</p>
                </div>
                <div className='details-with-icons'>

                    <CircularIcon src={IcClock} alt="Clock" height='24px' width='24px' />

                    <p>{selectedTour.numOfDays}</p>
                </div>
            </div>
            {/* images area */}
            <div className="tour-images-container">
                <div className="left-image">
                    <img src={selectedTour.images[0]} alt="Main Tour" />
                </div>
                <div className="right-images">
                    {selectedTour.images.slice(1).map((img, index) => (
                        <div key={index} className="grid-image">
                            <img src={img} alt={`Tour ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            {/* tour description */}
            <div className="tour-description">
                {selectedTour.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    )
}

export default TourDetailsSection
