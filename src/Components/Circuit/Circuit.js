import React from 'react';
import '../../App.css';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const Circuit=(props)=>{

    // const dataSource = [
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ];
    //
    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: 'Age',
    //         dataIndex: 'age',
    //         key: 'age',
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ];

    return (
        <div className="bbb">
            <h1 className="h1_main_content">Circuit</h1>
            <Table dataSource={props.dataSource} columns={props.columns}/>;
        </div>
    )
}

export default Circuit;