import React from 'react'
import { useNavigate } from 'react-router-dom'
import MarketLogo from '../../images/marketLogo.png'
import "./navigation.css"

function Navigation() {
    let navigate = useNavigate()
    return (
        <div className="nav-container">
            {/* <div className="logo"> */}
            <img src={MarketLogo} className="whitemarket" alt="" />
            {/* </div> */}

            <div className="nav-menu">
                <div className="home" onClick={() => navigate("/home")}>
                    Home
                </div>
                <div className="contact" onClick={() => navigate("/contact")}>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Navigation
