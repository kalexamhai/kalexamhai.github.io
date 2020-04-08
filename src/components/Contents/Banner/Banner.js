import React, {Component} from 'react';
import classes from './Banner.css';

class Banner extends Component{
    render () {
        return (
            <div className = {classes.Banner}>
                Choose your {this.props.heading}
            </div>
        )
    }
}

export default Banner;