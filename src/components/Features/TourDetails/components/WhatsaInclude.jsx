/* eslint-disable react/prop-types */
import '../style.css'
import IncludeSectionRow from './IncludeSectionRow'

const WhatsaInclude = ({ selectedTour }) => {
    return (
        <div className='toursIncluded-container'>
            <h2>What&apos;s included</h2>
            <IncludeSectionRow
                title={'Destination'}
                childrens={<p>{selectedTour.city}</p>}
            />
            <IncludeSectionRow
                title={'Departure Location'}
                childrens={<p>{selectedTour.included.deptLocation}</p>}
            />
            <IncludeSectionRow
                title={'Return'}
                childrens={<p>{selectedTour.included.return}</p>}
            />
            <IncludeSectionRow
                title={'Feature'}
                childrens={<ul className="features-list">
                    {selectedTour.included.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>}
            />
        </div>
    )
}

export default WhatsaInclude
