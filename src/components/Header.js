import React, { Component } from 'react'
import '../Pages/Home.css';

export class Header extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className = 'header' style={{height: this.props.height, backgroundColor: this.props.colour}}>
                <div className = 'text-header'>{this.props.text}</div>
            </div>
        )
    }
}

export default Header
