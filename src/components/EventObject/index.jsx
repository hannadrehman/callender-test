import React from 'react';
import PropTypes from 'prop-types'
import EventPopup from '../EventPopup';

import './style.css';

class EventObject extends React.Component{
    static propTypes={
        event: PropTypes.object.isRequired,
        timeSlot:PropTypes.string.isRequired,
        saveEvent:PropTypes.func.isRequired,
        eventDateId:PropTypes.number.isRequired,
    }
    constructor(props){
        super(props)
        this.state={
            set:false,
            event:this.props.event,
            visible:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        
    }
    componentWillReceiveProps({event}){
        this.setState(prevState=>(
            {
                ...prevState,
                event,
            }
        ));
    }
    handleClose(){
        this.setState(prevState=>(
            {
                ...prevState,
                visible:false
            }
        ))
    }
    handleSave(value){
       const ob={
           title:value,
           startTime:this.props.event.startTime,
           date:this.props.event.date,
           evId:this.props.event.id,
           eventDateId:this.props.eventDateId
       }
     this.props.saveEvent(ob);
     this.handleClose()
    }
    handleClick(){
        this.setState(prevState=>(
            {
                ...prevState,
                visible:true
            }
        ))    }
    render(){
        return(
            <article className="eventobject_wrapper" >
              <section className="ev" onClick={this.handleClick}>
                {this.state.event.event.title || ''}
              </section>
              <EventPopup 
                  id={`${this.state.event.date}_${this.props.timeSlot}`}
                  visible={this.state.visible} 
                  onClose={this.handleClose}
                  save={this.handleSave}
                  date={`${this.state.event.date} ${this.props.timeSlot}`}
                  />
            </article>
        )   
    }
}

export default EventObject