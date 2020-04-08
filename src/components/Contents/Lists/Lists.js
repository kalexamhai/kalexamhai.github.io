import React, {Component} from 'react';
import classes from './Lists.css';
import Dept from './Dept/Dept';
import Subs from './Subs/Subs';
import { Switch, Route } from 'react-router-dom';
import Axios from'../../../axios-items';

class Lists extends Component{
    state = {
        Departments : []
    }
    componentDidMount() {
        Axios.get('/Departments.json')
            .then(res => {
                let fetchedData = [];
                for (let key in res.data){
                    fetchedData.push({
                    ...res.data[key],
                    id: key
                    });
                }
                this.setState({Departments : fetchedData}) 
            });
    }
    render () {
        return (
            <div className = {classes.Lists}>    
                <Switch>
                    <Route path= '/' exact render={(props) => (<Dept depts = {this.state.Departments} {...props}/>)}/>
                    <Route path= '/subs' exact render={(props) => (<Subs {...props}/>)}/>
                </Switch>  
            </div>
        )
    }
}

export default Lists;
