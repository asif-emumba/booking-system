/* eslint-disable react/prop-types */
import '../style.css'
import Icons from '../../../../utils/Icons'
import TitleWithIcon from './TitleWithIcon'

const TourDetailsSection = ({ selectedTour }) => {

    const { IcLocationSmall, IcDollarSmall, IcClock } = Icons
    return (
        <div>
            <h2 className='tour-h2-styles'>{selectedTour.name}</h2>
            <div className='details-with-icons-row'>
                <TitleWithIcon src={IcLocationSmall} alt='location' selectedTour={selectedTour.city} />
                <TitleWithIcon src={IcDollarSmall} alt='dollar' selectedTour={selectedTour.priceRange} />
                <TitleWithIcon src={IcClock} alt='clock' selectedTour={selectedTour.numOfDays} />
            </div>
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
            <div className="tour-description">
                {selectedTour.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    )
}

export default TourDetailsSection
