import React from 'react'
import NavButton from '../NavButton';
import './Navbar.css';
export const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className='button-wrapper'>
                <NavButton text="About"/>
                <NavButton text="Experiences"/>
                <NavButton text="Projects"/>
                <NavButton text="Skills"/>
            </div>
        </div>
    )
}

export default Navbar;
