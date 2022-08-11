import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

import './Footer.css'

import { Link } from 'react-scroll'

function Footer() {
    return (
        <div name="Reach Us" className='footer'>
            <div className='container'>
                <div className='top'>
                    <h3>Nature</h3>
                    <div className='social'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaLinkedin className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <ul>
                            <Link to='Home' smooth={true} duration={500}> <li>Home</li></Link>
                            <Link to='Destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                            <Link to='Travel' smooth={true} duration={500}><li>Travel</li></Link>
                            <Link to='Sight' smooth={true} duration={500}><li>Sight</li></Link>
                            <Link to='Reach Us' smooth={true} duration={500}><li>Reach Us</li></Link>
                        </ul>
                    </div>
                    <div className='right'>
                        <ul>
                            <li>Reach Us</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Collaboration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer