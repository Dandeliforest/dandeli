import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function BannerCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/outlook.jpg"
          alt="Third slide"
          style={{ width: "100%", height: 600, objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h2>Dandeli Forest Escapes Welcomes You</h2>
          <p>Your Home Away From Home</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/room.jpg"
          alt="Third slide"
          style={{ width: "100%", height: 600, objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h2>Dandeli Forest Escapes Welcomes You</h2>
          <p>Your Home Away From Home</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/garden.jpg"
          alt="Third slide"
          style={{ width: "100%", height: 600, objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h2>Dandeli Forest Escapes Welcomes You</h2>
          <p>Your Home Away From Home</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;
