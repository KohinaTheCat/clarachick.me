import React from 'react'

function Header(props) {
    return (
        <div className = 'header center' style={{height: props.height, backgroundImage: `url(${props.background})`, backgroundSize: '100%'}}>
        <div className = 'text-header'>
            <div className = 'text-child'>
                {props.text}
            </div>
        </div>
    </div>
    )
}

export default Header

