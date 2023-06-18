import {React,useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';

 
const CarouselComponent = () => {
    return(
        <div style={{ display: 'block', width: 1000, margin : '20px' , marginBottom : '50px', paddingLeft : '100px' }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
  src="https://thekannancrackers.com/ob_uploads/10116/images/m/img_slider/cf4c6a6ea18297b2340e2ec8e45601fe.jpg"
              alt="One"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
  src="https://thekannancrackers.com/ob_uploads/10116/images/m/img_slider/7329f618b745239c9ab01b18b13d2c7a.jpg"
              alt="Two"
            />
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default CarouselComponent
