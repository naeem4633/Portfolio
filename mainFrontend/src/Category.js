import React from 'react'
import Header from './Header'
import { ResetPage } from './ResetPage';

const Category = ({name, cover, images, isMobile}) => {
const mobileCover = isMobile ? cover.replace('.jpg', '-mobile.jpg') : cover;
  return (
    <>
    <Header fixed={true} transparent={true}/>
    <section className='w-full'>
        <ResetPage />
        <div className="w-full h-[100vh] flex flex-col bg-gray-800 justify-center" style={{ backgroundImage: `url(${mobileCover})` }}>
            <div className='w-full flex flex-col text-center text-white justify-center'>
                <p className='text-5xl lg:text-8xl font-bold'>{name}</p>
            </div>
        </div>
        <div className='gap-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-3'>
        {images.map((image, index) => (
            // <img key={index} src={image.src} alt={`Image ${index}`} className='w-full border border-black h-80'/>
            <div className='w-full border border-gray-300 h-80 flex justify-center items-center'>
                <p className='text-center text-lg font-semibold text-gray-600'>{image}</p>
            </div>
        ))}
        </div>
    </section>
    </>
  )
}

export default Category
