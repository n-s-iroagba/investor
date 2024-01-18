import React from 'react'
import './BigNav.css'
import NavButton from '../nav_button/NavButton'
const BigNav = () => {
    return (
    <div className="sticky-nav">
      <div className="sticky-nav-logo">
       
      </div>
      <div className="sticky-nav-links">
        <NavButton>Big nav</NavButton>
      </div>
    </div>
  )
}
export default BigNav;