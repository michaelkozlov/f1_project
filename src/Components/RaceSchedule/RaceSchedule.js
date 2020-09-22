import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css';
import * as antd from "antd";
const {  Select  } = antd;
const { Option } = Select;

const RaceSchedule=(props)=>{
    return  <div className="bbb">
        <h1 className="h1_main_content">Race Schedule</h1>
        <Select defaultValue="2019" style={{ width: 120 }}>
            <Option value="2019">2019</Option>
            <Option value="2018">2018</Option>
        </Select>
        <Table dataSource={props.dataSource} columns={props.columns} pagination={{
            total: props.dataSource.length,
            pageSize: 6,
            hideOnSinglePage: true,
        }}/>
    </div>
}

export default RaceSchedule;