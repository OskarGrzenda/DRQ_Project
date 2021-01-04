import React from 'react';
import axios from 'axios';
import {Headphoneitem} from './headphoneitem';


export class Phones extends React.Component {



render() {

    return this.props.phones.map( (headphone)=>{
        return <Headphoneitem headphone={headphone}></Headphoneitem>
    })
  
}
}