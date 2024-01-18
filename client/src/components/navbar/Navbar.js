import React from 'react'
import './Navbar.css'
import SmallNav from '../small_nav/SmallNav'
import BigNav from '../big_nav /BigNav'

const Navbar = () => {
    return (
    <div className='navbar'>
        <SmallNav/>
        <BigNav/>
    </div>
  )

}
export default Navbar;