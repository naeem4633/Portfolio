import React, { useEffect, useRef } from 'react';
import './App.css';

function MyApp() {
  const firstGroupRef = useRef(null);
  useEffect(() => {
    const targets = document.querySelectorAll('.first-group');
    firstGroupRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    targets.forEach((el) => firstGroupRef.current.observe(el));

    return () => {
      if (firstGroupRef.current) {
        firstGroupRef.current.disconnect();
      }
    };
  }, []);


  const secondGroupRef = useRef(null);
  useEffect(() => {
    const targets = document.querySelectorAll('.second-group');
    secondGroupRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    targets.forEach((el) => secondGroupRef.current.observe(el));

    return () => {
      if (secondGroupRef.current) {
        secondGroupRef.current.disconnect();
      }
    };
  }, []);


  const thirdGroupRef = useRef(null);
  useEffect(() => {
    const targets = document.querySelectorAll('.third-group');
    thirdGroupRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    targets.forEach((el) => thirdGroupRef.current.observe(el));

    return () => {
      if (thirdGroupRef.current) {
        thirdGroupRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className='bg-stone-800 text-white flex flex-col space-y-[50vh]'>
        <div>
          <p className='absolute left-1/2 -translate-x-1/2 mt-10 text-3xl md:text-4xl md:mt-20 font-Poppins'>Café Euphoria</p>
          <img className='w-full p-5 lg:hidden' src='../images/cover-image-mobile.jpg' alt='Cover'></img>
          <img className='hidden lg:block w-full p-5' src='../static/images/cover-image.jpg' alt='Cover'></img>
        </div>
        <div className='mx-auto w-full lg:w-3/4 xl:w-1/2 flex flex-col space-y-8 items-center'>
          <p className='text-xl md:text-2xl first-group'>Coffee meets bliss</p>
          <div className='mx-auto border border-y-0 border-gray-500 tracking-wider leading-7 space-y-4 p-6 first-group'>
            <p className='text-sm lg:text-lg font-Poppins text-center'>At Café Euphoria, we believe that coffee is more than just a beverage, it's an experience. Our passionate baristas meticulously craft each cup, using only the finest beans sourced from around the globe.</p>
            <p className='text-sm lg:text-lg font-Poppins text-center'>Café Euphoria is more than just great coffee. It's a haven where connections are made and memories are cherished. Whether you're seeking a quiet escape to indulge in a book, catching up with friends over a steaming cup of joe, or seeking inspiration for your next creative endeavor, our inviting ambiance provides the perfect setting.</p>
          </div>
        </div>

        <div className='mx-auto w-3/4 xl:w-1/2 flex flex-col space-y-16 items-center '>
          <p className='text-xl md:text-2xl text-center'>From Bean to Cup: Our Artisanal Coffee Process</p>
          <div className='border-4 border-white border-y-0 border-r-0 text-sm md:text-lg  '>
            <div className='flex flex-col tracking-wider'>
              <ul>
                <li className='flex flex-row items-center space-x-2 mt-12 second-group'>
                  <img className='h-3 -translate-x-2' src='../static/images/white-circle.png'></img>
                  <p className=''>Selecting exceptional beans from renowned coffee-growing regions</p>
                </li>
                <li className='flex flex-row items-center space-x-2 mt-16 second-group'>
                  <img className='h-3 -translate-x-2' src='../static/images/white-circle.png'></img>
                  <p className=''>Meticulously roasting beans to unlock their optimal flavors and aromas</p>
                </li>
                <li className='flex flex-row items-center space-x-2 mt-20 second-group'>
                  <img className='h-3 -translate-x-2' src='../static/images/white-circle.png'></img>
                  <p className=''>Skillfully brewing each cup with precision and expertise</p>
                </li>
                <li className='flex flex-row items-center space-x-2 mt-28 mb-24 second-group'>
                  <img className='h-3 -translate-x-2' src='../static/images/white-circle.png'></img>
                  <p className=''>Adding personalized touches and presentation for a visually delightful experience</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mx-auto w-full lg:w-3/4 xl:w-1/2 flex flex-col space-y-8 items-center'>
          <div className='mx-auto w-full '>
            <p className='text-xl md:text-2xl text-center'>Features</p>
          </div>  
          <div className='mx-auto w-full items-center border border-y-0 border-gray-500'>
            <ul className='flex flex-col space-y-12 md:flex-row md:space-y-0 mx-auto font-light tracking-widest'>
              <li className='w-full flex flex-col space-y-4 third-group'>
                <img className='w-32 mx-auto border border-gray-200 rounded p-4' src='../static/images/live-music.png'></img>
                <p className='text-sm md:text-lg text-center'>Live Music</p>
              </li>
              <li className='w-full flex flex-col space-y-4 third-group'>
                <img className='w-32 mx-auto border border-gray-200 rounded p-4' src='../static/images/art-wall.png'></img>
                <p className='text-sm md:text-lg text-center'>Art Wall</p>
              </li>
              <li className='w-full flex flex-col space-y-4 third-group'>
                <img className='w-32 mx-auto border border-gray-200 rounded p-4' src='../static/images/workstation.png'></img>
                <p className='text-sm md:text-lg text-center'>Workstations</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-stone-900 text-white tracking-wider'>
            <p className='w-full text-center mt-12 text-xl md:text-2xl'>Café Euphoria</p>
          <div className='grid grid-cols-1 space-y-8 justify-around w-full py-12 md:grid-cols-2 md:space-y-0'>
            <div className='flex flex-col space-y-8 border border-gray-500 border-l-0 border-y-0 w-full items-center'>
              <p className='text-lg md:text-xl'>Contact</p>
              <ul>
                <li className='flex space-x-2 items-center my-1'>
                  <img className='h-4' src='../static/images/call.png'></img>
                  <p className='font-light text-sm md:text-lg'>222-111-333</p>
                </li>
                <li className='flex space-x-2 items-center my-1'>
                  <img className='h-4' src='../static/images/email.png'></img>
                  <p className='font-light'>cafe-euphoria @email.com</p>
                </li>
                <li className='flex space-x-2 items-center my-1'>
                  <img className='h-4' src='../static/images/location.png'></img>
                  <p className='font-light'>123 Main Street. Anytown, USA 12345</p>
                </li>
              </ul>
            </div>
            <div className='flex flex-col space-y-8 border border-gray-500 border-x-0 border-y-0 w-full items-center'>
              <p className='text-lg md:text-xl'>Business Hours</p>
              <ul>
                <li className='flex space-x-2 my-1'>
                  <p className='font-normal'>Monday - Friday :</p>
                  <p className='font-light'>9 AM - 9 PM</p>
                </li>
                <li className='flex space-x-2 my-1'>
                  <p className='font-normal'>Saturday - Sunday :</p>
                  <p className='font-light'>9 AM - 12 AM</p>
                </li>
                <li className='flex space-x-2 my-1'>
                  <p className='font-normal'>Holidays :</p>
                  <p className='font-light'>9 AM - 5 AM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;