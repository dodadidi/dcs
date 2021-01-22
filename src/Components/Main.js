import React, {Component} from 'react';
import transportsData from '../Data/transports.json';
import TransportsList from './TransportsList';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            transports: []
        }
    }
    componentDidMount(){
        transportsData.map(item => this.add({id: item.id, date: item.date, driver: item.driver, city: item.city}));
    }
    add( {id = null, date = 'default title', driver = 'default driver', city = 'default city'} ) {
        this.setState(prevState => ({
        transports: [
            ...prevState.transports, {
                id: id !== null ? id : this.nextId(prevState.transports),
                date: date,
                driver: driver,
                city: city
            }]
        }))
    }

    render(){
        return (
            <div>
                <TransportsList list={this.state.transports}></TransportsList>
            </div>
        );
    }
}
export default Main;