import React, { Component } from 'react';
import Transport from './Transport';


// import { Fab } from '@material-ui/core';
// import AddICon from '@material-ui/icons/Add';
// import Scene from '../Images/Scene.svg';

// var SceneStyle = {

//   backgroundImage: `url(${Scene})`
// };

class TransportsList extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.eachTransport = this.eachTransport.bind(this);
        this.update = this.update.bind(this);
        //this.delete = this.delete.bind(this);
       // this.nextId = this.nextId.bind(this);
    }

    componentDidMount(){
        // transportsData.map(item => this.add({id: item.id, date: item.date, driver: item.driver, city: item.city}));
    }
    update(newTransport, i){
        console.log(`Update ${i}: newTransport: ${newTransport}`);

        this.setState(prevState => ({
            transports: prevState.transports.map(
                transport => transport.id !== i ? transport : {...transport, transport: newTransport}
            )
        }));
    }

    eachTransport(item,i){
        return <Transport key={i} index={item.id} onChange={this.update} onDelete={this.props.onDelete}>
            <p>{item.id} {item.date} {item.driver} {item.city}</p>
            {/* change button color:ED4D47 and location */}
        </Transport>
    }

   

    nextId(transports = []) {
        let max = transports.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    render() {
        return(
            <div className="transports-list" >
                { this.props.list.map(this.eachTransport)}
            </div>
            // <div style={ SceneStyle }>
            //     <div className="transports-list">
            //         { this.props.list.map(this.eachTransport)}      
            //     </div>
            // </div>
        )
    }
}

export default TransportsList;
           

