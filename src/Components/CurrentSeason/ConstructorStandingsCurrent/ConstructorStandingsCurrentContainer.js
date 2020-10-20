import React from "react";
import {connect} from "react-redux";
import ConstructorStandingsCurrent from "./ConstructorStandingsCurrent";
import {CurrentConstructorStandingsThunk} from "../../../redux/currentConstructorStandings";


class ConstructorStandingsCurrentApi extends React.Component {
    componentDidMount() {
        this.props.CurrentConstructorStandingsThunk();
    }

    render() {
        return <ConstructorStandingsCurrent dataSource={this.props.dataSource} columns={this.props.columns}/>;
    }
}

const mapStateToProps = (state)=>{
    return {
        dataSource: state.currentConstructorStandings.dataSource,
        columns: state.currentConstructorStandings.columns,
    }
}


const ConstructorStandingsCurrentContainer=connect(mapStateToProps, {CurrentConstructorStandingsThunk})(ConstructorStandingsCurrentApi);

export default ConstructorStandingsCurrentContainer;