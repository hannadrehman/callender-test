import React from 'react';
import PropTypes from 'prop-types'

import DateColumn from '../DateColumn'

import './style.css';

class DateEventsGrid extends React.Component{
    static propTypes={
        store: PropTypes.array.isRequired,
        timeSlots:PropTypes.array.isRequired,
        saveEvent:PropTypes.func.isRequired
    }
    constructor(props){
        super(props)
        this.state={
        }
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave(ev){
        this.props.saveEvent(ev)    
    }
    render(){
        return(
            <article className="dateeventsgrid_wrapper">
               {
                   this.props.store.map((current,i)=>(
                        <DateColumn saveEvent={this.handleSave} timeSlots={this.props.timeSlots} key={current.id} id={current.id} date={current} />
                   ))
               }
            </article>
        )
    }
}

export default DateEventsGrid