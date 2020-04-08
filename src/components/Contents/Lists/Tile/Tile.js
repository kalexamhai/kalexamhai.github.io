import React, {Component} from 'react';
import classes from './Tile.css';

class Tile extends Component{
    render () {           
        return (
            <div className = {classes.Department}>
                {this.props.data}
            </div>
        )
    }
}

export default Tile;