import React from 'react';
import { Link } from 'react-router-dom';
import MovingImages from './MovingImages';
import { ResetPage } from './ResetPage';

const Body = () => {

  return (
    <>
    <ResetPage />
    <MovingImages />
    <div className='flex flex-col items-center mt-20'>
        <div className='mb-8 text-2xl underline'>
            <p>SHOP BY CATEGORIES</p>
        </div>

        <div class="flex flex-col justify-center items-center text-xl space-y-4 lg:flex-row">
            <Link to={'/beds'}>
                <div class="mx-16 border border-black w-64 h-64 flex flex-col items-center justify-center">
                    <img src="../static/images/bed.png"></img>
                    <p class="mt-2">Beds</p>
                </div>
            </Link>
            <Link to={'/dining'}>
            <div class="mx-16 border border-black w-64 h-64 flex flex-col items-center justify-center">
                <img src="../static/images/dining.png"></img>
                <p class="mt-2">Dining</p>
            </div>
            </Link>
            <Link to={'/wardrobes'}>
            <div class="mx-16 border border-black w-64 h-64 flex flex-col items-center justify-center">
                <img src="../static/images/closet.png"></img>
                <p class="mt-2">Wardrobe</p>
            </div>
            </Link>
        </div>
    </div>

    <div className='flex flex-col w-full'>
        <div className='hidden lg:block mt-20'>
            <Link to={'/all'}>
                <img className='p-6' src='../static/images/sample-image-3.jpg'></img>
            </Link>
        </div>
        <div className='flex flex-col justify-between lg:flex-row'>
            <Link to={'/all'}>
                <img  className='p-6' src='../static/images/sample-image-4-half.jpg'></img>
            </Link>
            <Link to={'/all'}>
                <img className='p-6' src='../static/images/sample-image-5-half.jpg'></img>
            </Link>
        </div>
    </div>
</>
  );
};

export default Body;
