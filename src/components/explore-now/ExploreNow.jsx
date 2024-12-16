
import './ExploreNow.css';
import Header from '../header/Header';
import { Button, Dropdown, DatePicker, Space } from "antd";
import { useState } from 'react';
import Icons from '../../utils/Icons';
import priceItemsData from '../../utils/PriceItemsData';
import locationItemsData from '../../utils/LocationItemsData';
import CustomLocationButton from '../antD_components/CustomLocationButton';
const { RangePicker } = DatePicker;
const ExploreNow = () => {
    const { IcLocation, IcCalendar, IcDollar, IcSearch } = Icons;
    // drop down list for money 
    const [locationTitle, setLocationTitle] = useState('Where you want to go?');
    const [selectedItem, setSelectedItem] = useState("Select an item");
    // Handle item selection
    const handleMenuClick = (item) => {
        setSelectedItem(item.label);
    };

    // Render custom dropdown content
    const dropdownContent = (
        <div className="custom-dropdown-list">
            {priceItemsData.map((item) => (
                <div
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => handleMenuClick(item)}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );

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
        <div className='main-content'>
            {/* top background cover section */}
            <section className='background-image'>
                {/* header */}
                <Header isShow={false} onClick={() => { }} />
            </section>
            {/* query section */}
            <section className='query-container'>
                <div className='query-sections'>
                    <div className='logo-container'>
                        <img src={IcLocation} alt='Location' />
                    </div>
                    <div className='query-info-sec'>
                        <h2>Location</h2>
                        <p>{locationTitle}</p>
                    </div>
                </div>
                <div className='section-divider'></div>
                <div className='query-sections'>
                    <div className='logo-container'>
                        <img src={IcCalendar} alt='Calendar' />
                    </div>
                    <div className='query-info-sec'>
                        <h2>Choose Date</h2>
                        <Space direction="vertical" size={12}>
                            <RangePicker placeholder="Choose Here" className='range-picker' />
                        </Space>
                    </div>
                </div>
                <div className='section-divider'></div>
                <div className='query-sections'>
                    <div className='logo-container'>
                        <img src={IcDollar} alt='Dollar' />
                    </div>
                    <div className='query-info-sec'>
                        <h2>Price Range</h2>
                        <Dropdown
                            overlay={dropdownContent}
                            trigger={["click"]}
                            placement="bottom"
                        >
                            <Button className='date-choose-btn'>{selectedItem}</Button>
                        </Dropdown>
                    </div>

                    <button className='search-button'>
                        <img src={IcSearch} alt='Search' />
                    </button>

                </div>
            </section>
            {/* popular search section  */}
            <section className='popular-section'>
                <h2>
                    Popular Searches
                </h2>
                <div className='location-buttons'>
                    {locationButtons}
                </div>

            </section>
        </div >
    )
}


export default ExploreNow
