import React from 'react';
import classes from './Logo.css';
import logo from '../../../assets/images/logo.png'

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src= {logo} alt="Logo"/>
    </div>
);

export default Logo;