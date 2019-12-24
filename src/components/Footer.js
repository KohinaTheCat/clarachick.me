import React, { Component } from 'react'
import { left, right } from 'glamor'

export class Footer extends Component {
    render() {
        return (
            <div className = 'footer' style = {{float: right}}>
                <div className = 'rowC'>
                    <ul>Instagram</ul>
                    <ul>Linkedin</ul>
                    <ul>Email</ul>
                    <ul></ul>
                    <ul></ul> 
                </div>
            </div>
        )
    }
}

export default Footer
