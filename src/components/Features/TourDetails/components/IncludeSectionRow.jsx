/* eslint-disable react/prop-types */
import '../style.css'

const IncludeSectionRow = ({ title, childrens }) => {
    return (
        <div className='toursIncluded-container-rows'>
            <div className='toursIncluded-container-rows-left'><h4>{title}</h4></div>
            <div className='toursIncluded-container-rows-right'>{childrens}</div>
        </div>
    )
}

export default IncludeSectionRow
