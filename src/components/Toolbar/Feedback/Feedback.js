import React, {Component} from 'react';
import classes from './Feedback.css';
import Icons from './Icons/Icons';

class Feedback extends Component{
    render () {
        return (
            <div className = {classes.Feedback}>
                <p>Feedback :</p>
                <Icons />
            </div>
        )
    }
}

export default Feedback;