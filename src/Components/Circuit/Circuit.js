import React from 'react';
import '../../App.css';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const Circuit=(props)=>{
    return (
        <div className="bbb">
            <h1 className="h1_main_content">Circuit</h1>
            <Table dataSource={props.dataSource} columns={props.columns}/>;
        </div>
    )
}

export default Circuit;