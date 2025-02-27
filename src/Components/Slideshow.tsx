import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";// requires a loader
import slide1 from '../assets/images/picture4.jpg';
import slide2 from '../assets/images/picture5.jpg';
import slide3 from '../assets/images/picture3.jpg';

function Slideshow() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
      };

    const slideshow = {
        width: '80%',
        height: '400px',
        martinTop: '50px',
    }
    const slideImages = {
        width: '100%',
        height: '380px',
    }
  return (
    <div className='slideshow' style={slideshow}>
    <Slider {...settings}>
      <div>
       <img style={slideImages} src={slide1} alt='logo'/>
      </div>
      <div>
        <img style={slideImages} src={slide2} alt='logo'/>
      </div>
      <div>
        <img style={slideImages} src={slide3} alt='logo'/>
      </div>
    </Slider>
  </div>
  )
}

export default Slideshow