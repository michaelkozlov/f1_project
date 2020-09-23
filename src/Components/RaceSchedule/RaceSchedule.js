import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css';
import * as antd from "antd";

const {Select}=antd;
const {Option}=Select;

const RaceSchedule=(props)=>{
    debugger;
    const ref=React.createRef();

    const changeYear=(value)=>{
        props.setSelectedYear(+value);
    }

    let yearsArray=[];

    for (let i=2020; i>2000; i--) {
        yearsArray.push(i);
    }

    debugger;
    return <div className="bbb">
        <h1 className="h1_main_content">Race Schedule</h1>
        <Select value={props.selectedYear} style={{width: 120}} ref={ref} onChange={changeYear}>
            {yearsArray.map(year=><Option value={`${year}`}>{year}</Option>)}
        </Select>
        <Table dataSource={props.dataSource} columns={props.columns} pagination={{
            total: props.dataSource.length,
            pageSize: 6,
            hideOnSinglePage: true,
        }}/>
    </div>
}

export default RaceSchedule;