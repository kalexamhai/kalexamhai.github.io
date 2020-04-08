import React, {Component} from 'react';
import classes from './Lists.css';
import axios from '../../../axios-items';

class Contents extends Component{
    render () {
        return (
            <div className = {classes.Contents}>
                Lists
            </div>
        )
    }
}

export default Contents;