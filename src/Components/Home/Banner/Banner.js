import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import banner1 from "../../../../src/images/banner-1.jpg"
import banner2 from "../../../../src/images/banner-2.jpg"
import banner3 from "../../../../src/images/banner-3.jpg"
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img img-fluid"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">Welcome to The Dentist Care!</h3>
            <p className="text-dark">I always try to give my best service.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img img-fluid"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Welcome to The Dentist Care!</h3>
            <p className="text-dark">I always try to give my best service.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img img-fluid"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Welcome to The Dentist Care!</h3>
            <p className="text-dark">I always try to give my best service.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;