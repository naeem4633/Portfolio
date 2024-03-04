import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MovingImages = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <img
            className="hidden"
            src={isMobile ? "../static/images/sample-image-1-mobile.jpg" : "../static/images/sample-image-1.jpg"}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="hidden"
            src={isMobile ? "../static/images/sample-image-2-mobile.jpg" : "../static/images/sample-image-2.jpg"}
            alt="Slide 2"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MovingImages;
