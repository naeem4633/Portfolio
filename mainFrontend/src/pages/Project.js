import React from 'react'
import { ResetPage } from '../components/ResetPage'
import Header from '../components/Header'
import Slideshow from '../components/Slideshow'
import useIntersectionObserver from '../components/Animations'


const Project = ({images, name, description, isMobile }) => {
    const firstGroupRef = useIntersectionObserver('.first-group');

    const handleArrowClick = () => {
        smoothScrollTo(0, window.innerHeight * 1, 800); // Scroll to 100% of the viewport height in 1 second
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
    <Header navigation={true} transparent={true}/>
    <section className="w-full bg-gray-950 text-gray-300 tracking-wider">
        <ResetPage/>
        <div className='h-[100vh] flex flex-col'>
            <div className='w-full h-1/2 flex flex-col items-center justify-center bg-gray-300 text-black first-group'>
            {name.split(' ').map((word, index) => (
                <p key={index} className='text-6xl lg:text-[10rem] lg:h-40'>{word}</p>
            ))}
            </div>
            <div className='mx-auto w-3/4 h-1/2 lg:w-1/3 flex flex-col justify-center items-center text-gray-300 text-left'>
                <p className='text-sm lg:text-xl'>{description}</p>
                <div className='flex flex-col items-center absolute bottom-0 -translate-y-10'>
                    <img className='w-8 lg:w-16 h-8 lg:h-16 cursor-pointer' src='../static/images/down-arrow.png' alt='down' onClick={handleArrowClick}></img>
                </div>
            </div>
        </div>
        <div className='min-h-[100vh] mx-auto w-full md:w-3/4 flex flex-col justify-center items-center text-xl font-bold p-4 lg:p-10 space-y-10'>
            <p className='tracking-wider'>IMAGES</p>
            <div className='w-full relative p-2'>
                <Slideshow isMobile={isMobile} images={images} />
            </div>
        </div>
    </section>
    </>
  )
}

export default Project
