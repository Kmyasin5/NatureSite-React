import React from 'react'
import './ImgCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Niagara from '.././Assets/images/niagara.jpg'
import Sky from '.././Assets/images/sky.jpg'
import Snow from '.././Assets/images/snow.jpg'
import Bridge from '.././Assets/images/bridge.jpg'
import Tree from '.././Assets/images/tree.jpg'

function ImgCarousel() {
    return (
        <div name="Sight" className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={Niagara} alt='/' />
                </div>
                <div>
                    <img src={Sky} alt='/' />
                </div>
                <div>
                    <img src={Snow} alt='/' />
                </div>
                <div>
                    <img src={Bridge} alt='/' />
                </div>
                <div>
                    <img src={Tree} alt='/' />
                </div>
            </Carousel>
        </div>
    )
}

export default ImgCarousel