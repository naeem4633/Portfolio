import React, { useState, useEffect } from 'react';
import Header from './Header';
import { ResetPage } from './ResetPage';

const Home = ({isMobile}) => {

  const handleArrowClick = () => {
    smoothScrollTo(0, window.innerHeight * 0.2, 800); // Scroll to 20% of the viewport height in 0.8 seconds
  };
  
  const smoothScrollTo = (endX, endY, duration) => {
    const startX = window.scrollX;
    const startY = window.scrollY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = performance.now();
  
    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
    const step = currentTime => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        window.scrollTo(endX, endY);
        return;
      }
      const progress = easeInOutQuad(elapsedTime / duration);
      window.scrollTo(startX + distanceX * progress, startY + distanceY * progress);
      window.requestAnimationFrame(step);
    };
  
    window.requestAnimationFrame(step);
  };

  return (
    <>
    <Header fixed={true} transparent={true}/>
    <section className='w-full'>
        <ResetPage />
        <div className='flex flex-col bg-gray-800'>
          <div className='w-full flex flex-col justify-center items-center'>
              <img className='w-full h-[100vh]' src={isMobile ? "../static/images/home-3-mobile.jpg" : "../static/images/home-3.jpg"}></img>
              <img className='absolute bottom-0 w-8 lg:w-14 h-8 lg:h-14 cursor-pointer -translate-y-16' src='../static/images/down-arrow-big.png' onClick={handleArrowClick}></img>
          </div>
          <div className='w-full'>
              <img className='w-full h-[100vh]' src={isMobile ? "../static/images/home-2-mobile.jpg" : "../static/images/home-2.jpg"}></img>
          </div>
          <div className='w-full'>
              <img className='w-full h-[100vh]' src={isMobile ? "../static/images/home-1-mobile.jpg" : "../static/images/home-1.jpg"}></img>
          </div>
        </div>
        <div className='mx-auto w-full lg:w-4/5 xl:w-3/5 flex flex-col lg:flex-row lg:border border-gray-300 border-x-0 justify-between lg:space-x-20 my-20 items-center lg:items-start'>
          <div className='w-2/3 lg:w-1/3 flex flex-col space-y-6 items-center py-20 text-center'>
            <img src='../static/images/1.jpg' className='rounded-full w-24 h-24'></img>
            <p className='font-bold lg:text-lg space'>"IMPRESSIVE!"</p>
            <p className='w-full lg:w-3/4 text-sm lg:text-lg'>John's product photography gave my pet boutique a vibrant edge. His quick delivery and fair rates are unbeatable.</p>
          </div>
          <div className='w-2/3 lg:w-1/3 flex flex-col space-y-6 items-center py-20 text-center'>
          <img src='../static/images/2.jpg' className='rounded-full w-24 h-24'></img>
            <p className='font-bold lg:text-lg'>"EXCELLENT WORK!"</p>
            <p className='w-full lg:w-3/4 text-sm lg:text-lg'>John's photography captured my architecture projects beautifully. Quick delivery, reasonable rates - he brought my designs to life.</p>
          </div>
          <div className='w-2/3 lg:w-1/3 flex flex-col space-y-6 items-center py-20 text-center'>
          <img src='../static/images/3.jpg' className='rounded-full w-24 h-24'></img>
            <p className='font-bold lg:text-lg'>"OUTSTANDING!"</p>
            <p className='w-full lg:w-3/4 text-sm lg:text-lg'>Speedy delivery, fair costs - he truly understood my brand's essence.</p>
          </div>
        </div>
        <div className='mx-auto w-full lg:w-4/5 xl:w-3/5 flex flex-col text-lg space-y-10 my-10'>
          <div className='flex flex-col lg:flex-row space-y-32 lg:space-y-0 lg:space-x-6 justify-between items-center text-center border border-gray-300 border-x-0 lg:border-0 py-20'>
            <div className='w-2/3 lg:w-1/3 flex flex-col space-y-4'>
              <p className='font-bold text-base lg:text-xl'>JOHN DOE IMAGES</p>
              <p className='text-sm lg:text-base'>Studio and location commercial photography, executive head shot, employee engagement, product, environmental portrait and photo-journalistic photography.</p>
            </div>
            <div className='w-2/3 lg:w-1/3 flex flex-col space-y-4'>
              <p className='font-bold text-base lg:text-xl'>ADDRESS</p>
              <div className='text-sm lg:text-base'>
                <p>1345 North Abington Road Waverly, PA 18471</p>
                <p>M: (570) 466 7732</p>
              </div>
              <p className='text-sm lg:text-base'>johndoe@comcast.net</p>
            </div>
          </div>
          <p className='text-center text-sm lg:text-lg'>© Copyright 2023 John Doe Images</p>
        </div>
    </section>
    </>
  )
}

export default Home
