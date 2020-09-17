import React from "react";
import {connect} from "react-redux";
import RaceScheduleCurrent from "./RaceScheduleCurrent";

class RaceScheduleCurrentApi extends React.Component{
    componentDidMount() {
    }
    render() {
        return <RaceScheduleCurrent/>;
    }
}

const mapStateToProps = ()=>{

}

const RaceScheduleCurrentContainer = connect()(RaceScheduleCurrentApi);

export default RaceScheduleCurrentContainer;