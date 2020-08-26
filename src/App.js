import React from 'react';
import './App.css';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <LeftSidebar />
    </div>
  );
}

export default App;
