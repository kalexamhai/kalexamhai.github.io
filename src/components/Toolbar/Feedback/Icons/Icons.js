import React, {Component} from 'react';
import classes from './Icons.css';

class Icons extends Component{
    render () {
        return (
            <div className = {classes.Icons}>
                <div>
                    <a href="https://t.me/akashvashisht" target="_blank"> <i className="fa fa-telegram"/></a>
                    <a href="https://www.instagram.com/akayishh/" target="_blank"> <i className="fa fa-instagram"/></a>
                    <a href="https://github.com/kalexamhai/kalexamhai.github.io" target="_blank"> <i className="fa fa-github"/></a>
                    <a href="mailto:kalexamhai19@gmail.com?subject=Feedback!" target="_blank"> <i className="fa fa-envelope"/></a>                    
                </div>
            </div>
        )
    }
}

export default Icons;
