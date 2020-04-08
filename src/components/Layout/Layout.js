import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Contents from '../Contents/Content';
import Footer from '../Footer/Footer';
import classes from './Layout.css';

class Layout extends Component{
    render () {
        return (
            <div className = {classes.Layout}>
                <Toolbar/>
                <Contents/>
                <Footer/>
            </div>
        )
    }
}

export default Layout;