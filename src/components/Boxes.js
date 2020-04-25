import React from 'react'
import {Pane} from 'evergreen-ui'

import {
    Link
} from "react-router-dom";

function Boxes(props) {
    return (
        <div>
            <Link to = {props.link} style={{ textDecoration: 'none' }}>
                    <Pane className = "pane"
                        border width = {250} 
                        height = {250}
                        margin = {80} 
                    >
                        <div className = "text-child center" style = {{backgroundImage: `url(${props.background})`}}>
                            <div className = "text center">
                                {props.title}
                            </div>
                        </div>
                    </Pane> 
            </Link>
        </div>
    )
}

export default Boxes
