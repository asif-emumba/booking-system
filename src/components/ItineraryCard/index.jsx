/* eslint-disable react/prop-types */
import { Card } from 'antd';

import Icons from "../../utils/Icons"
import './style.css'

const ItineraryCard = ({ items }) => {
    const { IcSun, IcClouds } = Icons
    return (
        <>
            <Card className='itinerary-cards' hoverable
                cover={null}
            >
                <div className='itinerary-cards-first-row'>
                    <h3>Day {items.day}</h3>
                    <div className='weather-content'>
                        <img src={items.weather > 15 ? IcSun : IcClouds} alt='Clouds icon' />
                        <h3>{items.weather}°C</h3></div>
                </div>
                {items.schedule.map((li, index) => (
                    <ul key={index}>
                        <li>{li}</li>
                    </ul>
                ))}
            </Card>
        </>
    )
}

export default ItineraryCard
