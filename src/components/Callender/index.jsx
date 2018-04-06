import React from 'react';

import {dateSeed,timeSeed} from './seed';

import TimeSlots from '../TimeSlots';
import Header from '../Header';
import DateEventsGrid from '../DateEventGrid';

import {pagination} from './utility';

import './style.css';

class Callender extends React.Component{
    constructor(props){
        super(props)
        this.state={
            daysCount:30,
            pageNo:0,
            pageSize:7,
            timeSlots:timeSeed,
            store:dateSeed
        }
        this.handleSave= this.handleSave.bind(this)
        this.handleNext= this.handleNext.bind(this)
        this.handlePrev= this.handlePrev.bind(this)
    }
    handleSave(ev){
        const column = this.state.store.find((c)=>c.id == ev.eventDateId);
        const evObject = {
            id:ev.evId,
            title:ev.title,
            startTime:ev.startTime,
            date: ev.date,
            dateId:ev.eventDateId
        }
        column.events.push(evObject);
        this.setState(prevState=>(
            {
                ...prevState,
                store:prevState.store.map((c)=>{
                    if(c.id ==column.id){
                        return column;
                    }
                    return c;
                })
            }
        ))
    }
    handleNext(){
        this.setState(prevState=>(
            {
                ...prevState,
                pageNo:prevState.pageNo+=1
            }
        ))
    }
    handlePrev(){
        this.setState(prevState=>(
            {
                ...prevState,
                pageNo:prevState.pageNo-=1
            }
        ))
    }
    render(){
        return(
            <article className="callender_wrapper">
                <Header next={this.handleNext} prev={this.handlePrev} />
                <section className="timeslots">
                    <TimeSlots list={this.state.timeSlots} />
                </section>
                <section className="datewise-events" >
                    <DateEventsGrid saveEvent={this.handleSave} timeSlots={this.state.timeSlots} store={pagination(this.state.store,this.state.pageSize,this.state.pageNo)} />
                </section>
            </article>
        )
    }
}

export default Callender