import React, { Component } from 'react';


import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class Transport extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     editing: false
        // }

        this.newTransport = "";
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.renderUI = this.renderUI.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    edit(){
      
       this.props.onSelected(this.props.currentTransport)
    }

    delete(e){
        console.log(`delete:`);
        this.props.onDelete(this.props.index);
    }

    save(e){
       e.preventDefault();

       this.props.onChange(this.newTransport.value, this.props.index);

       this.setState({
           editing: false
       })
    }

    inputChanged({target: {value : text}}){
        this.setState({
            newTransport: text
        })
    }

    renderUI() {
        return (
            <div style={{   marginBottom: "14px"}}>
                <div>
                <p>{this.props.currentTransport.id}{'\t'}{this.props.currentTransport.date}{'\t'}{this.props.currentTransport.name}{'\t'}{this.props.currentTransport.city}</p>
                </div>
                <div className="button">
                    <IconButton aria-label="edit" className="btn btn-primary" style={{backgroundColor:'#ED4D47',color:'white'}} onClick={this.edit}>
                        <EditIcon />
                    </IconButton> 
                     <IconButton aria-label="delete" className="btn btn-primary" style={{backgroundColor:'#ED4D47',color:'white',right:'19px',}} onClick={this.delete}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>            
        )
    }

    render() {
        return this.renderUI();
    }
}
export default Transport;