import React from 'react';
import PropTypes from 'prop-types'

import EventObject from '../EventObject';

import {generateEventData} from './utility';

import './style.css';

class DateColumn extends React.Component{
    static propTypes={
        date: PropTypes.object.isRequired,
        timeSlots: PropTypes.array.isRequired,
        saveEvent:PropTypes.func.isRequired,
        id:PropTypes.number
    }
    constructor(props){
        super(props)
        this.state={
            boxes:24,
            dateEvents:[]
        }
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
    }
    componentWillMount(){
        this.setState(prevState=>(
            {
                ...prevState,
                dateEvents:generateEventData(this.props.date,this.state.boxes,this.props.timeSlots)
            }
        ))
    }
    componentWillReceiveProps({date,timeSlots}){
        this.setState(prevState=>(
            {
                ...prevState,
                dateEvents:generateEventData(date,this.state.boxes,timeSlots)
            }
        ))
    }
    handleSaveEvent(ev){
      this.props.saveEvent(ev)  
    }
    render(){
        return(
            <article className="datecolumn_wrapper">
                <section className="date">
                    {this.props.date.date}
                </section>
                {
                    this.state.dateEvents.map((current,i)=>(
                        <div className="eventbox" key={current.id}>
                            <EventObject eventDateId={this.props.id} saveEvent={this.handleSaveEvent} timeSlot={this.props.timeSlots[i]}  event={current}/>
                        </div>
                    ))
                }
            </article>
        )
    }
}

export default DateColumn