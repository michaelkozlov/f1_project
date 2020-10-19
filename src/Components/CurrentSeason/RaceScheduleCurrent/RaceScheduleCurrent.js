import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css';

const RaceScheduleCurrent=(props)=>{
    return <div>
        <h1 className="h1_main_content">Race Schedule 2020</h1>
        <div className="table_container">
            <Table width="100px" dataSource={props.dataSource} columns={props.columns} pagination={{
                total: props.dataSource.length,
                pageSize: 10,
                hideOnSinglePage: true,
            }}/>
        </div>
    </div>
}

export default RaceScheduleCurrent;