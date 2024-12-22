/* eslint-disable react/prop-types */
import '../style.css'

const WhatsaInclude = ({ selectedTour }) => {
    return (
        <div className='toursIncluded-container'>
            <h2>What&apos;s included</h2>
            <div className='toursIncluded-container-rows'>
                <div className='toursIncluded-container-rows-left'><h4>Destination</h4></div>
                <div className='toursIncluded-container-rows-right'><p>{selectedTour.city}</p></div>
            </div>
            <div className='toursIncluded-container-rows'>
                <div className='toursIncluded-container-rows-left'><h4>Departure Location</h4></div>
                <div className='toursIncluded-container-rows-right'><p>{selectedTour.included.deptLocation}</p></div>
            </div>
            <div className='toursIncluded-container-rows'>
                <div className='toursIncluded-container-rows-left'><h4>Return</h4></div>
                <div className='toursIncluded-container-rows-right'><p>{selectedTour.included.return}</p></div>
            </div>
            <div className='toursIncluded-container-rows'>
                <div className='toursIncluded-container-rows-left'>
                    <h4>Features</h4>
                </div>
                <div className='toursIncluded-container-rows-right'>
                    <ul className="features-list">
                        {selectedTour.included.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhatsaInclude
