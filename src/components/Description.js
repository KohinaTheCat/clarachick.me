import React, { Component } from 'react'

export class Description extends Component {
    render() {
        return (
            <div className = 'Description'>
                <br></br>
                <br></br>  
                <h1>{this.props.title}</h1>                
                <h4>{this.props.status}</h4>
                <br></br>
                <h3>{this.props.body}</h3>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Description
