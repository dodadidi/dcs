import React, { Component } from 'react';
import { MdSave } from 'react-icons/md';


import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class Transport extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }

        this.newTransport = "";
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.renderUI = this.renderUI.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    edit(){
        this.setState({
            editing: true
        })
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

    renderForm() {
        return (
            <div>
            <form>
                {<textarea onChange={this.inputChanged} value={this.state.newTransport}/>}
                {/* <textarea ref={input => (this.newTransport = input)}/> */}
                <button onClick={this.save} style={{marginLeft: 7+'px'}}><MdSave/></button>                
            </form>
            </div>
        )
    }

    renderUI() {
        return (
            // <div className="transport" style={{border: '1px solid red', padding: "5px", marginTop: "10px"}}>
            <div className="transport" style={{padding: "5px", marginTop: "10px"}}>
                <div>{this.props.children}</div>
                <span>
                    <IconButton aria-label="edit" className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}>
                        <EditIcon />
                    </IconButton> 
                     <IconButton aria-label="delete" className="btn btn-primary" onClick={this.delete}>
                        <DeleteIcon />
                    </IconButton>
                </span>
            </div>            
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderUI();
    }
}
export default Transport;