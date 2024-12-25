/* eslint-disable react/prop-types */
import '../style.css'
import ItineraryCard from '../../../ItineraryCard'

const ItinerarySchedule = ({ selectedTour, isBooked, handleTourBook }) => {
    return (
        <div className='itinery-content-container'>
            <h2>Itinerary Schedule</h2>
            <div className='itinerary-cards-row '>
                {selectedTour.itinerary.map((items, index) => (
                    <ItineraryCard key={index} index={index} items={items} />
                ))}
            </div>
            {isBooked ?
                (<div className='hide-book-btn'></div>) :
                (<button className='book-now-btn' onClick={() => handleTourBook(selectedTour)}>Book Now</button>)
            }
        </div>
    )
}

export default ItinerarySchedule
