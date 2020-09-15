import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {setNewsData} from "../../redux/newsReducer";

class NewsContainerApi extends React.Component {

    componentDidMount() {
        debugger;
        this.props.setNewsData();
    }

    render() {
        return <News newsTitle={this.props.newsTitle}/>;
    }
}

let mapStateToProps=(state)=>{
    return {
        newsTitle : state.newsReducer.newsTitle,
    }
}

const NewsContainer=connect(mapStateToProps, {setNewsData})(NewsContainerApi);

export default NewsContainer;