import React from 'react';
import {Route} from 'react-router-dom';
import TransportsList from '../Components/TransportsList';
import MyTransports from '../Components/MyTransports';
import Header from '../Components/Header';

const ReactRouter = () => {
    return(
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={TransportsList}/>
            <Route path="/MyTransports" component={MyTransports}/> 
        </React.Fragment>
    )
}

export default ReactRouter;