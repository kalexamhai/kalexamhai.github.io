import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Departments from '../Departments/Departments';
import Footer from '../Footer/Footer';
import classes from './Layout.css';

class Layout extends Component{
    render () {
        return (
            <div className = {classes.Layout}>
                <Toolbar/>
                <Departments/>
                <Footer/>
            </div>
        )
    }
}

export default Layout;