import React, {Component} from 'react';
import Truck from './Truck';
import Main from './Main';

class App extends Component{
    render(){
        return (
            <div>
                <Main/>
                <Truck/>
            </div>
        );
    }
}
export default App;