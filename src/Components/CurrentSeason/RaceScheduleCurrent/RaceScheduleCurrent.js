import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css';

const RaceScheduleCurrent=(props)=>{
    return  <div className="bbb">
        <h1 className="h1_main_content">Race Schedule 2020</h1>
        <Table dataSource={props.dataSource} columns={props.columns} pagination={{
            total: props.dataSource.length,
            pageSize: 6,
            hideOnSinglePage: true,
        }}/>
    </div>
}

export default RaceScheduleCurrent;