import React, { Component } from 'react'
import { Pane, Text } from 'evergreen-ui'

export class SumBox extends Component {
    render() {
        return (
            <Pane 
                    border = {false}
                    height = {200} 
                    width={1040}
                    display = "flex"
                    justifyContent = "center"
                    alignItems = "center"
                    flexDirection = "column"
                    background = "tint2"
                    margin = {50}
                >
                <Text size = {600}>{this.props.text}</Text>
                </Pane>    
        )
    }
}

export default SumBox
