import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {setNewsData} from "../../redux/newsReducer";

class NewsContainerApi extends React.Component {

    componentDidMount() {this.props.setNewsData()
       setInterval(()=>{
           this.props.setNewsData();
       }, 1000000)
    }

    render() {
        return <News news={this.props.news}/>;
    }
}

let mapStateToProps=(state)=>{
    return {
        news : state.newsReducer.news,
    }
}

const NewsContainer=connect(mapStateToProps, {setNewsData})(NewsContainerApi);

export default NewsContainer;