import React from 'react'
import MarketLogo from '../../images/marketLogo.png'
import "./navigation.css"

function navigation() {
  return (
    <div className="nav-container">
        {/* <div className="logo"> */}
            <img src={MarketLogo} className="whitemarket" alt="" />
        {/* </div> */}
        
        <div className="nav-menu">
            <div className="home">
                Home
            </div>
            <div className="contact">
                Contact
            </div>
        </div>
    </div>
  )
}

export default navigation

{/* <div className="search">
            <input type="text" placeholder="Search" className="search-field" />
        </div> */}