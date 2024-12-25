/* eslint-disable react/prop-types */
const { RangePicker } = DatePicker;
import { Button, Dropdown, DatePicker, Space } from "antd";

import '../style.css'
import Icons from '../../../../utils/Icons';
import CircularIcon from '../../../RoundedIcons'
import priceItemsData from '../../../../utils/PriceItemsData';



const QuerySection = ({
    locationTitle,
    handleMenuClick,
    isDropdownVisible,
    setDropdownVisible,
    selectedItem,
    isSearchButtonEnabled,
    dates,
    handleDateChange,
    handleSearch

}) => {
    const { IcLocation, IcCalendar, IcDollar, IcSearch } = Icons;
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
    return (
        <section className='query-container'>
            <div className='query-sections'>
                <div className='query-info-sec'>
                    <div className='icon-title-sec'>
                        <CircularIcon src={IcLocation} alt='Location' height='32px' width='32px' />
                        <h2>Location</h2>
                    </div>
                    <p>{locationTitle}</p>
                </div>
            </div>
            <div className='section-divider'></div>
            <div className='query-sections'>
                <div className='query-info-sec'>
                    <div className='icon-title-sec'>
                        <CircularIcon src={IcCalendar} alt='Calendar' height='32px' width='32px' />
                        <h2>Choose Date</h2>
                    </div>
                    <Space direction="vertical" size={12}>
                        <RangePicker placeholder="Choose Here" className='range-picker' value={dates} onChange={handleDateChange} />
                    </Space>
                </div>
            </div>
            <div className='section-divider'></div>
            <div className='query-sections'>
                <div className='query-info-sec'>
                    <div className='icon-title-sec'>
                        <CircularIcon src={IcDollar} alt='Dollar' height='32px' width='32px' />
                        <h2>Price Range</h2>
                    </div>
                    <Dropdown
                        overlay={dropdownContent}
                        trigger={["click"]}
                        placement="bottom"
                        visible={isDropdownVisible}
                        onVisibleChange={(visible) => setDropdownVisible(visible)}
                    >
                        <Button className='date-choose-btn'>{selectedItem}</Button>
                    </Dropdown>
                </div>

                <button className='search-button' disabled={isSearchButtonEnabled()} onClick={() => handleSearch(locationTitle)}>
                    <img src={IcSearch} alt='Search' />
                </button>

            </div>
        </section>
    )
}

export default QuerySection
