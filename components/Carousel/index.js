import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/front-view-woman-eating-meat-burgers_141793-17491.jpg?w=1380&t=st=1661109024~exp=1661109624~hmac=08d25365e70b38edc233e0cc349841455955cb7302f26dce16f90911327ebc96"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hamburguesas Food4U</h3>
          <p>Hamburguesas de primer nivel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/happy-beautiful-young-woman-smiling-widely-holds-tasty-burger-two-hands_8353-7003.jpg?w=1380&t=st=1661109070~exp=1661109670~hmac=6a8e233e6f9ed54369189161b8a6a07e09c9089f99832fb92013ddf20bd1c5a7"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Porque comer nos hace felices!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/young-lovers-couple-are-having-fun-fast-food-restaurant_496169-1292.jpg?w=1380&t=st=1661109105~exp=1661109705~hmac=76eded2cfa50dc076e057688aa7ce88ac6da24827ff8c5d8c19228ded4ca0304"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aprovecha el 2x1!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;