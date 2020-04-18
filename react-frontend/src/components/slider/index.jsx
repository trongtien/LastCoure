import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import './style.scss';

Slider.propTypes = {};

function Slider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-450"
            src="https://mrhoa.com/wp-content/uploads/2019/01/anh-hoa-dep-nhat-the-gioi.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-450"
            src="https://mrhoa.com/wp-content/uploads/2019/01/hoa-dai-dep.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-450"
            src="https://mrhoa.com/wp-content/uploads/2019/01/hinh-anh-hoa-dep.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
