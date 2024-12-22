import './style.css';
import Header from '../Header/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularSection from './components/popularSection';
import QuerySection from './components/QuerySection';

const ExploreNow = () => {

    const [locationTitle, setLocationTitle] = useState('Where you want to go?');
    const [selectedItem, setSelectedItem] = useState("Select an item");
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const [dates, setDates] = useState(null);

    const handleSearch = (locationName) => {
        navigate(`/all-tours`, { state: { locationName } });
    };

    const handleMenuClick = (item) => {
        setSelectedItem(item.label);
        setDropdownVisible(false);
    };

    const isSearchButtonEnabled = () => {
        return !(locationTitle !== 'Where you want to go?' && selectedItem !== 'Select an item' && dates !== null);
    };

    const handleDateChange = (dates) => {
        setDates(dates);
    };
    return (
        <div className='main-content'>
            {/* top background cover section */}
            <section className='background-image'>
                {/* header */}
                <Header isShow={false} onClick={() => { }} />
            </section>
            {/* query section */}
            <QuerySection
                locationTitle={locationTitle}
                handleMenuClick={handleMenuClick}
                isDropdownVisible={isDropdownVisible}
                setDropdownVisible={setDropdownVisible}
                selectedItem={selectedItem}
                isSearchButtonEnabled={isSearchButtonEnabled}
                dates={dates}
                handleDateChange={handleDateChange}
                handleSearch={handleSearch}
            />
            {/* popular search section  */}
            <PopularSection setLocationTitle={setLocationTitle} />
        </div >
    )
}


export default ExploreNow
