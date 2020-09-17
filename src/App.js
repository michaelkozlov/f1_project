import React from 'react';
import './App.css';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import Header from "./Components/Header/Header";
import CircuitsContainer from "./Components/Circuit/CircuitsContainer";
import {Route} from "react-router-dom";
import NewsContainer from "./Components/News/NewsContainer";
import CurrentSeasonContainer from "./Components/CurrentSeason/CurrentSeasonContainer";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                <div className="left-sidebar">
                    <LeftSidebar/>
                </div>
                <div className="main-content">
                    <Route exact path="/current-season" render={() => <CurrentSeasonContainer/>}/>
                    <Route exact path="/news" render={() => <NewsContainer/>}/>
                    <Route exact path="/circuits" render={() => <CircuitsContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
