import React, { Component } from 'react';
import Transport from './Transport';

class TransportsList extends Component {
    constructor(props){
        super(props);
        this.eachTransport = this.eachTransport.bind(this);
        this.update = this.update.bind(this);
        this.onSelectedEdit = this.onSelectedEdit.bind(this);
    }


    update(newTransport, i){

        this.setState(prevState => ({
            transports: prevState.transports.map(
                transport => transport.id !== i ? transport : {...transport, transport: newTransport}
            )
        }));
    }
    onSelectedEdit(transport){
        this.props.onSelectedUpdate(transport);
    }

    eachTransport(item,i){
        return <Transport key={i} index={item.id} onSelected={this.onSelectedEdit} currentTransport={item} onDelete={this.props.onDelete}>
        </Transport>
    }

    nextId(transports = []) {
        let max = transports.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    render() {
        return(
            <div className="transport-list-box" >
                { this.props.list.map(this.eachTransport)}
            </div>
        )
    }
}

export default TransportsList;
           

