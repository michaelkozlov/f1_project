import React from "react";
import {connect} from "react-redux";
import {CurrentDriverStandingsThunk} from "../../../redux/currentDriverStandings";
import DriverStandingsCurrent from "./DriverStandingsCurrent";

class DriverStandingsCurrentApi extends React.Component {
    componentDidMount() {
        this.props.CurrentDriverStandingsThunk();
    }

    render() {
        return <DriverStandingsCurrent columns={this.props.columns} dataSource={this.props.dataSource}/>;
    }
}

const mapStateToProps=(state)=>{
    return {
        dataSource: state.currentDriverStandings.dataSource,
        columns: state.currentDriverStandings.columns,
    }
}

const DriverStandingsCurrentContainer=connect(mapStateToProps, {CurrentDriverStandingsThunk})(DriverStandingsCurrentApi);

export default DriverStandingsCurrentContainer;