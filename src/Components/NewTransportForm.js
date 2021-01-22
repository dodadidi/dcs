// import React, { Component } from 'react';
// import { MdSave } from 'react-icons/md';

// class NewTransport extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             editing: false,
//             date: '',
//             name: '',
//             city: ''
//         }
//         this.save = this.save.bind(this);
//         this.renderUI = this.renderUI.bind(this);
//         this.renderForm = this.renderForm.bind(this);
//     }
//         save(e){
//             e.preventDefault();
     
//             this.props.onChange(this.NewTransport.value, this.props.index);
     
//             this.setState({
//                 editing: true
//             })
//          }
         
//     renderForm() {
//         return (
//             <div>
//             <form>
//                 {<textarea onChange={this.inputChanged} value={this.state.NewTransport}/>}
//                 {/* <textarea ref={input => (this.newTransport = input)}/> */}
//                 <button onClick={this.save} style={{marginLeft: 7+'px'}}><MdSave/></button>
//             </form>
//             </div>
//         )
//     }

//     renderUI() {
//         return (
//             <div className="transport" style={{border: '1px solid red', padding: "5px", marginTop: "10px"}}>
//                 <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}><MdSave/></button>                    
//             </div>            
//         )
//     }

//     render() {
//         return this.state.editing ? this.renderForm() : this.renderUI();
//     }
// }
// export default NewTransport;

