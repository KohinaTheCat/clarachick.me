import React, { Component } from 'react'
import { Pane, Text } from 'evergreen-ui'

export class Boxes extends Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Pane 
                    elevation = {this.state.hovered ? 3: 0}
                    border = {false}
                    border width = {250} 
                    height = {250} 
                    margin = {80} 
                    onMouseEnter = {() => this.setState({ hovered: true })}
                    onMouseLeave = {() => this.setState({ hovered: false })}
                    display = "flex"
                    justifyContent = "center"
                    alignItems = "center"
                    flexDirection = "column"
                    background = "tint1"
                    borderBottom = {true}
                >
                    <Text size = {600}>{this.props.title}</Text>
                </Pane>           
            </div>
        )
    }
}

export default Boxes
