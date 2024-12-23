import locationItemsData from '../../../utils/LocationItemsData';
import CustomLocationButton from '../../AntDcomponents/CustomLocationButton';
import '../style.css'
/* eslint-disable react/prop-types */

const PopularSection = ({ setLocationTitle }) => {
    // location selection buttons
    const locationButtons = (
        <div>
            {locationItemsData.map((item) => (
                <CustomLocationButton
                    key={item.id}
                    location={item.label}
                    onClick={() => { setLocationTitle(item.label) }}
                />
            ))}
        </div>
    );
    return (
        <section className='popular-section'>
            <h2>
                Popular Searches
            </h2>
            <div className='location-buttons'>
                {locationButtons}
            </div>
        </section>
    )
}

export default PopularSection
