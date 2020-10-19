import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css';


const DriverStandingsCurrent=(props)=>{
    return <div>
        <h1 className="h1_main_content">Общий зачет пилотов</h1>
        <div className="table_container">
            <Table dataSource={props.dataSource} columns={props.columns} pagination={{
                total: props.dataSource.length,
                pageSize: 10,
                hideOnSinglePage: true,
            }}/>
        </div>
    </div>
}

export default DriverStandingsCurrent;