import React from "react";
import {connect} from "react-redux";
import circuitsReducer, {circuitsData} from "../../redux/circuitsReducer";
import Circuit from "./Circuit";

class CircuitsContainerApi extends React.Component {

    componentDidMount() {
        debugger;
        this.props.circuitsData();
    }

    render() {
        return <Circuit columns={this.props.columns} dataSource={this.props.dataSource}/>;
    }
}

let mapStateToProps=(state)=>{
    return {
        dataSource: state.circuitsReducer.dataSource,
        columns: state.circuitsReducer.columns,
    }
}

const CircuitsContainer=connect(mapStateToProps, {circuitsData})(CircuitsContainerApi);

export default CircuitsContainer;