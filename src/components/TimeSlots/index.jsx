import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

const TimeSlots = ({list}) =>(
    <div className="timeslot_wrapper">
        {
            list.map((current,i)=>(
                <div key={i} className="time-slot-container">
                    {current}
                </div>
            ))
        }
    </div>
)
TimeSlots.propTypes={
    list:PropTypes.array
}
export default TimeSlots;