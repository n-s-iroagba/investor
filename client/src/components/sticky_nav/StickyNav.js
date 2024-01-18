import React from 'react'
import './StickyNav.css'
import NavButton from '../nav_button/NavButton'
const StickyNav = () => {
    return (
    <div className="sticky-nav">
      <div className="sticky-nav-logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="sticky-nav-links">
        <NavButton>Home</NavButton>
      </div>
    </div>
  )
}
export default StickyNav;