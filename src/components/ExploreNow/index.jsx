import './style.css';
import Header from '../Header/index';
import { Button, Dropdown, DatePicker, Space } from "antd";
import { useState } from 'react';

import priceItemsData from '../../utils/PriceItemsData';
import locationItemsData from '../../utils/LocationItemsData';
import CustomLocationButton from '../antDcomponents/CustomLocationButton';
import Icons from '../../utils/Icons';
import CircularIcon from '../CustomComponents/RoundedIcons';
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
                    <CircularIcon src={IcLocation} alt='Location' height='32px' width='32px' />
                    <div className='query-info-sec'>
                        <h2>Location</h2>
                        <p>{locationTitle}</p>
                    </div>
                </div>
                <div className='section-divider'></div>
                <div className='query-sections'>
                    <CircularIcon src={IcCalendar} alt='Calendar' height='32px' width='32px' />
                    <div className='query-info-sec'>
                        <h2>Choose Date</h2>
                        <Space direction="vertical" size={12}>
                            <RangePicker placeholder="Choose Here" className='range-picker' />
                        </Space>
                    </div>
                </div>
                <div className='section-divider'></div>
                <div className='query-sections'>
                    <CircularIcon src={IcDollar} alt='Dollar' height='32px' width='32px' />
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
