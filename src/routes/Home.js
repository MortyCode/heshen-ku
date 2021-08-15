import React from 'react';
import 'antd/dist/antd.css';

import HomePage  from './HomePage';

export default class Home extends React.Component {
    
    constructor(props){
        super(props);
    }

    tiaozhuan = ()=>{
        this.props.history.push(`/products`);
      }

    render() {
        return (
        <HomePage history ={this.props.history} />
      );        
    }

}

