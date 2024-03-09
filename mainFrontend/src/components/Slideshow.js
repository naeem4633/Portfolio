import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 100 },
    items: 1,
    slidesToSlide: 1
  }
};
const Slideshow = ({ images, isMobile }) => {

  const getImageSource = (imageName) => {
    const imageSuffix = isMobile ? '-mobile' : ''; // Add '-mobile' if isMobile is true
    return `../static/images/${imageName}${imageSuffix}.jpg`;
  }

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        {images.map((image, index) => (
          <div className="w-full" key={index}>
            <img
              className="w-full h-full"
              src={getImageSource(image)}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slideshow;
