import React from 'react';
import './App.css';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import Header from "./Components/Header/Header";
import CircuitsContainer from "./Components/Circuit/CircuitsContainer";
import {Route} from "react-router-dom";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                <div className="left-sidebar">
                    <LeftSidebar/>
                </div>
                <div className="main-content">
                    <Route exact path="/circuits" render={() => <CircuitsContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
