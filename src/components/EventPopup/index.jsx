import React from 'react';
import PropTypes from 'prop-types'

import './style.css';

class EventPopup extends React.Component{
    static propTypes={
        id: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
        date: PropTypes.string.isRequired
    }
    constructor(props){
        super(props)
        this.state={
            title:''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleClick(){
        this.props.save(this.state.title);
    }
    handleChange(ev){
        const {target:{value}} = ev
        this.setState(prevState=>(
            {
                ...prevState,
                title:value
            }
        ))
    }
    render(){
        return(
            <article className="eventpopup_wrapper">
                <article id={this.props.id} >
                    <div className={`overlay ${(this.props.visible) ? 'showpopup' : ''}`}>
                    <div className="popup">
                        <button className="close fa fa-times" onClick={this.props.onClose} >X</button>
                        <div className="content">
                            <h3>Add title</h3>
                            <input onChange={this.handleChange} type="text" value={this.state.title} />
                            <button onClick={this.handleClick}>Save</button>
                            <br/><br/>
                            <h3>{this.props.date}</h3>
                        </div>
                    </div>
                    </div>
                </article>
            </article>
        )
    }
}

export default EventPopup