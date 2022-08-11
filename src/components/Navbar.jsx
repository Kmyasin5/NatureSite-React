import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './Navbar.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name="Home" className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Nature</h2>
            </div>
            <ul className='nav-menu'>
                <Link to='Home' smooth={true} duration={500}> <li>Home</li></Link>
                <Link to='Destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='Travel' smooth={true} duration={500}><li>Travel</li></Link>
                <Link to='Sight' smooth={true} duration={500}><li>Sight</li></Link>
                <Link to='Reach Us' smooth={true} duration={500}><li>Reach Us</li></Link>
            </ul>
            <div className='nav-icons'>
                <BiSearch className="icon" style={{ marginRight: '1rem' }} />
                <BsPerson className="icon" />
            </div>
            <div className='hamburger' onClick={handleNav}>
                {!nav ? (<HiOutlineMenu className='icon' />) : (<AiOutlineClose style={{ color: "#000" }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : "mobile-menu"}>
                <ul className='mobile-nav'>
                    <Link to='home' smooth={true} duration={500}> <li>Home</li></Link>
                    <Link to='Destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                    <Link to='Travel' smooth={true} duration={500}><li>Travel</li></Link>
                    <Link to='Sight' smooth={true} duration={500}><li>Sight</li></Link>
                    <Link to='Reach Us' smooth={true} duration={500}><li>Reach Us</li></Link>
                </ul>

                <div className='mobile-menu-bottom'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='social-icons'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaLinkedin className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar