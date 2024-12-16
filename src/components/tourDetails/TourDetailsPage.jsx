// TourDetails.js
import './TourDetailsPage.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Icons from '../../utils/Icons';

const TourDetailsPage = () => {

    const { IcLocation, IcDollar, IcClock, IcClouds, IcSun } = Icons

    const { id } = useParams();
    const tours = useSelector(state => state.tours.value);
    const selectedTour = useSelector(state => state.tours.selectedTour)
        || tours.find(tour => tour.id === parseInt(id));

    if (!selectedTour) {
        return <div>No tour selected</div>;
    }

    return (
        <div className='tour-details-main-content'>
            <Header isShow={false} onClick={() => { }} />
            <div className='container'>
                <div className='tour-details-container'>
                    <h2 className='tour-h2-styles'>{selectedTour.name}</h2>
                    {/* icons with details */}
                    <div className='details-with-icons-row'>
                        <div className='details-with-icons'>
                            <div className='detail-icons'>
                                <img src={IcLocation} alt='location' />
                            </div>
                            <p>{selectedTour.city}</p>
                        </div>
                        <div className='details-with-icons'>
                            <div className='detail-icons'>
                                <img src={IcDollar} alt='location' />
                            </div>
                            <p>{selectedTour.priceRange}</p>
                        </div>
                        <div className='details-with-icons'>
                            <div className='detail-icons'>
                                <img src={IcClock} alt='location' />
                            </div>
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
                    {/* Whats included portion */}
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
                    {/* iteniry Schedule portion */}
                    <div className='itinery-content-container'>
                        <h2>Itinerary Schedule</h2>
                        <div className='itinerary-cards-row '>
                            {selectedTour.itinerary.map((items, index) => (
                                <div key={index} className='itinerary-cards'>
                                    <div className='itinerary-cards-first-row'>
                                        <h3>Day {items.day}</h3>
                                        <div className='weather-content'>
                                            <img src={items.weather > 15 ? IcSun : IcClouds} alt='Clouds icon' />
                                            <h3>{items.weather}C</h3></div>
                                    </div>
                                    {items.schedule.map((li, index) => (
                                        <ul key={index}>
                                            <li>{li}</li>
                                        </ul>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <button className='book-now-btn'>Book Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourDetailsPage;
