import React, {Component} from 'react';
import classes from './Toolbar.css';
import Logo from './Logo/Logo';
import Name from './Name/Name';
import Feedback from './Feedback/Feedback';

class Toolbar extends Component{
    render () {
        return (
            <div className = {classes.Toolbar}>
                <div className = {classes.container}>
                    <Logo />
                    <Name />
                    <Feedback />
                </div>
            </div>
        )
    }
}

export default Toolbar;