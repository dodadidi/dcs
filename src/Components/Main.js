import React, {Component} from 'react';
import transportsData from '../Data/transports.json';
import TransportsList from './TransportsList';
import NewTransport from './NewTransportForm';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            transports: [],
            selectedTransport:null
        }
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.nextId = this.nextId.bind(this);
    
    this.transportSelected = this.transportSelected.bind(this);

    this.update = this.update.bind(this);
    }
    componentDidMount(){
        transportsData.map(item => this.add({id: item.id, date: item.date, name: item.name, city: item.city}));
    }
    add( {id = null, date = 'default date', name = 'default name', city = 'default city'} ) {
        console.log(date)
        this.setState(prevState => ({
        transports: [
            ...prevState.transports, {
                id: id !== null ? id : this.nextId(prevState.transports),
                date: date,
                name: name,
                city: city
            }]
        }))
    }
    

    delete(id){
        this.setState(prevState => ({
            transports: prevState.transports.filter(transport => transport.id !== id)
        }))
    }

    update(newTransport){
        //console.log(`Update ${i}: newTransport: ${newTransport}`);
        console.log(newTransport);
        this.setState(prevState => ({
            transports: prevState.transports.map(
                transport => transport.id !== newTransport.id ? transport : newTransport
            )
        }));
    }

    nextId(transports = []) {
        let max = transports.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }
    transportSelected = (transport) =>{
        console.log(transport);
        this.setState({selectedTransport:transport},()=>{
            console.log(this.state.selectedTransport);
        });
       
    }
    render(){
        return (
            <div className="background">
                <TransportsList list={this.state.transports} onDelete={this.delete} onSelectedUpdate={this.transportSelected}></TransportsList>
                <NewTransport selectedTransport={this.state.selectedTransport} onSave={this.add} onUpdate={this.update}></NewTransport>
            </div>
        );
    }
}
export default Main;