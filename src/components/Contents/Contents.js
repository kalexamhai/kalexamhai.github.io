import React, {Component} from 'react';
import classes from './Contents.css';
import Banner from './Banner/Banner';
import Lists from './Lists/Lists';

class Contents extends Component{
    state = {
        heading : 'Department'
    }
    componentWillMount() {
        const uri = window.location.pathname;
        if (uri !== '/') {
            this.setState({heading : 'Subject'})
        }
    }
    render () {
        return (
            <div className = {classes.Contents}>
                <Banner heading={this.state.heading}/>
                <Lists/>
            </div>
        )
    }
}

export default Contents;