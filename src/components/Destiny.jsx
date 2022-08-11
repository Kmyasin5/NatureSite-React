import React from 'react'
import '../components/Destiny.css'

import Desert from '.././Assets/images/desert.jpg'
import River from '.././Assets/images/River_home.jpg'
import Road from '.././Assets/images/road.jpg'
import Sea from '.././Assets/images/Sea_dive.jpg'
import Sail from '.././Assets/images/sail.jpg'


function Destiny() {
    return (
        <div name="Destinations" className='destination'>
            <div className='container'>
                <h1>Here, you can explore the nature types</h1>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Desert} alt='/' />
                    <img src={River} alt='/' />
                    <img src={Road} alt='/' />
                    <img src={Sea} alt='/' />
                    <img src={Sail} alt='/' />
                </div>
            </div>
        </div>
    )
}

export default Destiny