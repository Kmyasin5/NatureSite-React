import React from 'react'
import './Hero.css'
import { AiOutlineSearch } from 'react-icons/ai'

import Video from '../Assets/videos/Running_river.mp4'

function Hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className='overlay'></div>
      <div className='content'>
        <h1>Explore the stunning of Nature</h1>
        <form className='form'>
          <div>
            <input type="text" placeholder="Search the Nature" />
          </div>
          <div>
            <button><AiOutlineSearch className="icon" /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero