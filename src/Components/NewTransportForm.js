import React, { Component } from 'react';

import { TextField } from '@material-ui/core';

class NewTransport extends Component {
    constructor(props){
        super(props);

        this.state = {
            updating: false,
            id:  this.props.selectedTransport ? this.props.selectedTransport.id : null,
            date : this.props.selectedTransport ? this.props.selectedTransport.date : '',
            name :  this.props.selectedTransport ? this.props.selectedTransport.name : '',
            city :  this.props.selectedTransport ? this.props.selectedTransport.city : '',
        }
       
        this.save = this.save.bind(this);
        this.renderSave = this.renderSave.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
  
     componentDidUpdate(prevProps){
        if(prevProps.selectedTransport !== this.props.selectedTransport){
            console.log(this.props.selectedTransport); 
            this.setState({id:this.props.selectedTransport.id,
                date:this.props.selectedTransport.date,
                name:this.props.selectedTransport.name,
                city:this.props.selectedTransport.city});
        }
      
    }

    save(e){
        e.preventDefault();
        console.log(this.state);
        if(this.state.id){
            this.props.onUpdate({id:this.state.id, date: this.state.date,name: this.state.name,city:this.state.city})
        this.setState({
            id:null,
            date:'',
            name:'',
            city:''
        })
        } else{
            this.props.onSave({id:this.state.id, date: this.state.date,name: this.state.name,city:this.state.city});
        }
    
    }

    onInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    textField={
        width: '400px',
        backgroundColor: 'white',
        marginBottom:'14px',
        borderRadius: '5px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
    }

    buttonForm={
        backgroundColor: '#ED4D47',
        border: '0',
        color: 'White',
        borderRadius: '5px',
        width: '158px',
        height: '60px',
        fontWeight: 'bold',
        fontSize: '16px',
        marginTop:'16px',
        position: 'absolute',
        left: '115px'
    }

    renderSave(){
        const date = this.state.date;
        const name = this.state.name;
        const city =  this.state.city;
        const id = this.state.id ? this.state.id : null;
        return(
            <div>
            <form className="form">
                <div>
                <TextField style={this.textField} error={true }  id="outlined-basic" label="Enter date" name="date"  variant="outlined" onChange={this.onInputChange} value={ date } />
                </div>
                <div>
                <TextField style={this.textField} error={true } id="outlined-basic" label="Enter a name" name="name" variant="outlined" onChange={this.onInputChange} value={ name }   />
                </div>
                <div>
                <TextField style={this.textField} error={ true } id="outlined-basic" label="Enter a city" name="city" variant="outlined" onChange={this.onInputChange} value= { city }  />
                </div>
                <button style={this.buttonForm} onClick={this.save}>{id!==null ? 'Update':'Save' }</button>                
            </form>
            </div>
        )
    }

    render() {
        return this.renderSave();
    }
}
export default NewTransport;

