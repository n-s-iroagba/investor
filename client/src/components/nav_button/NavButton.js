import React from 'react'
import './NavButton.css'

const NavButton = ({ children, onClick }) => {
    return <div className="NavButton" onClick={onClick}>{children}</div>
}

export default NavButton