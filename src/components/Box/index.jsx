import React, { Component } from 'react';
import './index.css'

class Box extends Component {


    render() {
        console.log(this.props);
        return (
            <div className='box'>{this.props.titulo}</div>
        );
    }
}

export default Box;