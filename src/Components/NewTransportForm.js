import React, { Component } from 'react';
// import { MdSave } from 'react-icons/md';

// import { TextField } from '@material-ui/core';
class NewTransport extends Component {
    constructor(props){
        super(props);

        this.state = {
            updating: false
        }
        this.date = '';
        this.name = '';
        this.city = '';
        this.save = this.save.bind(this);
        this.renderSave = this.renderSave.bind(this);
        // this.renderUI = this.renderUI.bind(this);
        // this.renderForm = this.renderForm.bind(this);
    }

    save(e){
        e.preventDefault();
        this.props.onSave({id:null, date: this.date.value,name: this.name.value,city:this.city.value});
        // this.setState({
        //     editing: true
        // })
    }
         
    // renderForm() {
    //     return (
    //         <div>
    //         <form>
    //             {<textarea onChange={this.inputChanged} value={this.state.NewTransport} style={{border: "1px solid black", padding: "5px", marginTop:"10px"}}/>}
    //             {/* <textarea ref={input => (this.newTransport = input)}/> */}
    //             <button onClick={this.save} style={{marginLeft: 7+'px'}}><MdSave/></button>
    //         </form>
    //         </div>
    //     )
    // }

    // renderUI() {
    //     return (
    //         <div className="transport" style={{border: '1px solid red', padding: "5px", marginTop: "10px"}}>
    //             <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}><MdSave/></button>                    
    //         </div>            
    //     )
    // }

    renderSave(){
        return(
            <div>
            <form>
                {/* <div>
                    {<textarea onChange={this.inputChanged} value={this.state.newTransport}/>}
                </div> */}
                {/* <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form> */}
                <div>
                    <textarea ref={input => (this.date = input)}/>
                </div>
                <div>
                    <textarea ref={input => (this.name = input)}/>
                </div>
                <div>
                    <textarea ref={input => (this.city = input)}/>
                </div>
                {/* change button */}
                <button onClick={this.save} style={{marginLeft: 7+'px'}}>save</button>                
            </form>
            </div>
        )
    }

    render() {
        return this.state.updating ? this.renderUpdate() : this.renderSave();
    }
}
export default NewTransport;

