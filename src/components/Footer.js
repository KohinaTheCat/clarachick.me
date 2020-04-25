import React from 'react'
import './css/footer.css'

function Footer(props) {
    return (
        <div className = 'footer center' style = {{marginTop: "5%"}}>
                <div className = 'footer center'>
                    <div className = "cont">
                        <a href = "https://www.instagram.com/aaclr60/" >
                        <img src = {require('../imgs/icons/insta.png')} className = "icon" alt = 'insta'/></a>
                    </div>
                    <div className = "cont">
                        <a href = "https://www.linkedin.com/in/clara-chick-a1096b191/?originalSubdomain=ca">
                        <img src = {require('../imgs/icons/link.png')} className = "icon" alt = 'link'></img></a>
                    </div>
                    <div className = "cont">
                        <a href ="https://github.com/KohinaTheCat">
                        <img src = {require('../imgs/icons/github.png')} className = "icon" alt = 'github'></img></a>
                    </div>
                    <div className = "cont">
                        <a href ="mailto:clara.chick@mail.utoronto.ca">
                        <img src = {require('../imgs/icons/mail.png')} className = "icon" alt = 'email'></img></a>
                    </div>
                </div>
            </div>
    )
}

export default Footer
