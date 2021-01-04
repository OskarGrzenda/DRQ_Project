import React from 'react';
import axios from 'axios';
import { Phoneitem } from './phoneitem';


export class Phones extends React.Component {


    render() {

        return this.props.phones.map((phone) => {
            return <Phoneitem phone={phone} ReloadData={this.props.ReloadData}></Phoneitem>
        })

    }
}

