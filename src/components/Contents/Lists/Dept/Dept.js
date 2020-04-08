import React, {Component} from 'react';
import classes from './Dept.css';
import Tile from '../Tile/Tile';

class Dept extends Component{
    render () {
        const Department = (
            this.props.depts.map(department => {
                return (<Tile
                            key={department.id}
                            data={department.id}
                        />
        )}));
        return (
            <div className = {classes.Department}>
                {Department}
            </div>
        )
    }
}

export default Dept;