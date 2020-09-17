import React from "react";
import {connect} from "react-redux";
import RaceScheduleCurrent from "./RaceScheduleCurrent";
import raceScheduleCurrentReducer, {RaceScheduleCurrentData} from "../../../redux/raceScheduleCurrent";

class RaceScheduleCurrentApi extends React.Component {
    componentDidMount() {
        this.props.RaceScheduleCurrentData();
    }

    render() {
        return <RaceScheduleCurrent columns={this.props.columns} dataSource={this.props.dataSource}/>;
    }
}

const mapStateToProps=(state)=>{
    return {
        dataSource: state.raceScheduleCurrentReducer.dataSource,
        columns: state.raceScheduleCurrentReducer.columns,
    }
}

const RaceScheduleCurrentContainer=connect(mapStateToProps, {RaceScheduleCurrentData})(RaceScheduleCurrentApi);

export default RaceScheduleCurrentContainer;