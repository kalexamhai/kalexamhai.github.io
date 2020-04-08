import React, {Component} from 'react';
import classes from './Footer.css';

class Footer extends Component{
    render () {
        return (
            <div className = {classes.Footer}>
                <p>Ab bas previous year kar ja. Pass ho jayega!</p>
                <span>- Someone famous in <cite>Source Titles</cite></span>
            </div>
        )
    }
}

export default Footer;