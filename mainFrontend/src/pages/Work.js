import React from 'react'
import { ResetPage } from '../components/ResetPage'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '../components/Animations'
import { BACKEND_URL } from '../backendUrl.js';

const Work = () => {
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

    const handleRedirect = () => {
      const state = {};
      const title = 'Euphoria';
      const url = '/euphoria';
      window.history.pushState(state, title, url);
    };

  return (
    <>
    <Header  navigation={true} transparent={true}/>
    <section className="w-full min-h-[100vh] bg-gray-950 flex flex-col items-center text-gray-300 text-sm lg:text-base space-y-[20vh]">
      <div className='w-full h-[50vh] flex flex-col bg-gray-300 first-group'>
          <div className='w-full h-3/5 flex flex-col items-center justify-end text-black'>
            <p className='text-6xl lg:text-[8rem] 2xl:text-[10rem] lg:h-40'>PROJECTS</p>
          </div>
          <div className='mx-auto w-3/4 h-2/5 lg:w-2/5 flex flex-col justify-center items-start text-black text-left'>
              <p className='text-sm lg:text-lg 2xl:text-xl'>This is a carefully curated showcase of the projects I've poured my passion and skills into, illustrating my journey through creativity and innovation.</p>
          </div>
      </div>
      <div className='w-full flex flex-col lg:flex-col justify-around items-center third-group pb-[10vh]'>
        <div className='flex flex-col h-full w-full 2xl:w-4/5 justify-evenly text-2xl lg:text-5xl items-start p-4 lg:p-10 2xl:p-0'>
          <div className='w-full h-full grid gid-cols-1 lg:grid-cols-3 justify-items-stretch gap-x-10 gap-y-32'>
            {/* Single Item */}
            <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start bg-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 select-none">
              <Link to={'/cosmetics'} className="w-full bg-white relative hover:cursor-pointer">
                <div className="w-full h-full">
                  <img className='w-full' src='../static/images/cosmetics-1.jpg'></img>
                </div>
                <div className="w-full h-full flex justify-center items-center absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 opacity-0 hover:opacity-40 bg-black transition-opacity duration-300 border border-black">
                  <div className='flex px-3 py-1 items-center space-x-2'>
                    <button className="text-white rounded text-xs lg:text-lg">Preview</button>
                    <img className='w-4 h-4' src='../static/images/link.png'></img>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col px-4 py-2 space-y-8'>
                <div className="w-full space-y-2">
                  <p className="text-black text-xl lg:text-2xl">E-commerce Cosmetics Boutique</p>
                  <p className="text-black text-xs lg:text-sm tracking-wide">A Full stack software for a cosmetics shop built with React and Django</p>
                </div>
                <div className='w-full space-x-2 flex items-center'>
                  <Link to={'/cosmetics'} className='p-3 flex-grow h-full text-gray-200 bg-black rounded flex items-center justify-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <button className="text-xs lg:text-lg">Live Preview</button>
                    <img className='w-4 h-4 opacity-90' src='../static/images/link.png'></img>
                  </Link>
                  <a href='https://github.com/naeem4633/Django-React-Cosmetics-Store' className='py-2 px-4 w-fit h-full text-gray-200 bg-black rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <img className='w-8 h-8 opacity-90' src='../static/images/github.png'></img>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start bg-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 select-none">
              <Link to={'/music'} className="w-full bg-white relative hover:cursor-pointer">
                <div className="w-full h-full">
                  <img className='w-full' src='../static/images/musicApp-1.jpg'></img>
                </div>
                <div className="w-full h-full flex justify-center items-center absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 opacity-0 hover:opacity-40 bg-black transition-opacity duration-300 border border-black">
                  <div className='flex px-3 py-1 items-center space-x-2'>
                    <button className="text-white rounded text-xs lg:text-lg">Preview</button>
                    <img className='w-4 h-4' src='../static/images/link.png'></img>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col px-4 py-2 space-y-8'>
                <div className="w-full space-y-2">
                  <p className="text-black text-xl lg:text-2xl">Spotify Music App</p>
                  <p className="text-black text-xs lg:text-sm tracking-wide">A music app which uses the Spotify API to show the users recommendations and playlists.
                  Built with React and Django</p>
                </div>
                <div className='w-full space-x-2 flex items-center'>
                  <Link to={'/music'} className='p-3 flex-grow h-full text-gray-200 bg-black rounded flex items-center justify-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <button className="text-xs lg:text-lg">Live Preview</button>
                    <img className='w-4 h-4 opacity-90' src='../static/images/link.png'></img>
                  </Link>
                  <a href='https://github.com/naeem4633/Music-App' className='py-2 px-4 w-fit h-full text-gray-200 bg-black rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <img className='w-8 h-8 opacity-90' src='../static/images/github.png'></img>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start bg-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 select-none">
              <Link to={'/furniture'} className="w-full bg-white relative hover:cursor-pointer">
                <div className="w-full h-full">
                  <img className='w-full' src='../static/images/furniture-1.jpg'></img>
                </div>
                <div className="w-full h-full flex justify-center items-center absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 opacity-0 hover:opacity-40 bg-black transition-opacity duration-300 border border-black">
                  <div className='flex px-3 py-1 items-center space-x-2'>
                    <button className="text-white rounded text-xs lg:text-lg">Preview</button>
                    <img className='w-4 h-4' src='../static/images/link.png'></img>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col px-4 py-2 space-y-8'>
                <div className="w-full space-y-2">
                  <p className="text-black text-xl lg:text-2xl">Furniture Emporium</p>
                  <p className="text-black text-xs lg:text-sm tracking-wide">A Full stack software for a furniture store built with React and Django</p>
                </div>
                <div className='w-full space-x-2 flex items-center'>
                  <Link to={'/furniture'} className='p-3 flex-grow h-full text-gray-200 bg-black rounded flex items-center justify-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <button className="text-xs lg:text-lg">Live Preview</button>
                    <img className='w-4 h-4 opacity-90' src='../static/images/link.png'></img>
                  </Link>
                  <a href='https://github.com/naeem4633/furnitureStore' className='py-2 px-4 w-fit h-full text-gray-200 bg-black rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <img className='w-8 h-8 opacity-90' src='../static/images/github.png'></img>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start bg-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 select-none">
              <Link to={'/photographer'} className="w-full bg-white relative hover:cursor-pointer">
                <div className="w-full h-full">
                  <img className='w-full' src='../static/images/portfolio-1.jpg'></img>
                </div>
                <div className="w-full h-full flex justify-center items-center absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 opacity-0 hover:opacity-40 bg-black transition-opacity duration-300 border border-black">
                  <div className='flex px-3 py-1 items-center space-x-2'>
                    <button className="text-white rounded text-xs lg:text-lg">Preview</button>
                    <img className='w-4 h-4' src='../static/images/link.png'></img>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col px-4 py-2 space-y-8'>
                <div className="w-full space-y-2">
                  <p className="text-black text-xl lg:text-2xl">Photographer Portfolio</p>
                  <p className="text-black text-xs lg:text-sm tracking-wide">A photographer portfolio website.</p>
                </div>
                <div className='w-full space-x-2 flex items-center'>
                  <Link to={'/photographer'} className='p-3 flex-grow h-full text-gray-200 bg-black rounded flex items-center justify-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <button className="text-xs lg:text-lg">Live Preview</button>
                    <img className='w-4 h-4 opacity-90' src='../static/images/link.png'></img>
                  </Link>
                  <a href='https://github.com/naeem4633/photographer-portfolio-website' className='py-2 px-4 w-fit h-full text-gray-200 bg-black rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <img className='w-8 h-8 opacity-90' src='../static/images/github.png'></img>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start bg-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 select-none">
              <Link to={'/euphoria'} className="w-full bg-white relative hover:cursor-pointer">
                <div className="w-full h-full">
                  <img className='w-full' src='../static/images/euphoria-1.jpg'></img>
                </div>
                <div className="w-full h-full flex justify-center items-center absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 opacity-0 hover:opacity-40 bg-black transition-opacity duration-300 border border-black">
                  <div className='flex px-3 py-1 items-center space-x-2'>
                    <button className="text-white rounded text-xs lg:text-lg">Preview</button>
                    <img className='w-4 h-4' src='../static/images/link.png'></img>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col px-4 py-2 space-y-8'>
                <div className="w-full space-y-2">
                  <p className="text-black text-xl lg:text-2xl">Café Euphoria</p>
                  <p className="text-black text-xs lg:text-sm tracking-wide">A simple business website for a coffee shop</p>
                </div>
                <div className='w-full space-x-2 flex items-center'>
                  <Link to={'/euphoria'} className='p-3 flex-grow h-full text-gray-200 bg-black rounded flex items-center justify-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <button className="text-xs lg:text-lg">Live Preview</button>
                    <img className='w-4 h-4 opacity-90' src='../static/images/link.png'></img>
                  </Link>
                  <a href='https://github.com/naeem4633/coffee-shop' className='py-2 px-4 w-fit h-full text-gray-200 bg-black rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out'>
                    <img className='w-8 h-8 opacity-90' src='../static/images/github.png'></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Work
