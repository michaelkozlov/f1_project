import React from "react";
import {connect} from "react-redux";
import RaceSchedule from "./RaceSchedule";
import {RaceScheduleData, setSelectedYear} from "../../redux/raceScheduleReducer";

class RaceScheduleApi extends React.Component {
    componentDidMount() {
        this.props.RaceScheduleData(this.props.selectedYear);
    }

    render() {
        return <RaceSchedule columns={this.props.columns} dataSource={this.props.dataSource}/>;
    }
}

const mapStateToProps=(state)=>{
    return {
        selectedYear : state.raceScheduleReducer.year,
        dataSource: state.raceScheduleReducer.dataSource,
        columns: state.raceScheduleReducer.columns,
    }
}

const RaceScheduleContainer=connect(mapStateToProps, {RaceScheduleData, setSelectedYear})(RaceScheduleApi);

export default RaceScheduleContainer;