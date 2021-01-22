import React, { Component } from 'react';
import truck from '../Images/mobel.svg';

class Truck extends Component {
    render() {
        return (
            <div>
                <img src={truck} className="truck" alt="Truck" style={{width: 811, height: 394.55}} />
            </div>
        )
    }
}
export default Truck;