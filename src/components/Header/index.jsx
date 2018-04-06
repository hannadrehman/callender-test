import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

const Header = ({list,next, prev}) =>(
    <div className="header_wrapper">
        <div className="title">My Callender</div>
        <div className="options">
            <button onClick={prev}>Next week</button>
            <button onClick={next}>Next week</button>
        </div>
    </div>
)

export default Header;