import React from 'react'
import './SmallNav.css'
import NavButton from '../nav_button/NavButton'
const SmallNav = () => {
    return (
    <div className="sticky-nav">
      <div className="sticky-nav-logo">
       
      </div>
      <div className="sticky-nav-links">
        <NavButton>small nav</NavButton>
      </div>
    </div>
  )
}
export default SmallNav;