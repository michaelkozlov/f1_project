import React from 'react';
import './App.css';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import Header from "./Components/Header/Header";
import Circuit from "./Components/Circuit/Circuit";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                <div className="left-sidebar">
                    <LeftSidebar/>
                </div>
                <div className="main-content">
                    <Circuit/>
                </div>
            </div>
        </div>
    );
}

export default App;
