import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({navigation, transparent}) => {
  return (
    <section className={transparent ? 'w-full fixed top-0 text-black tracking-wider bg-transparent z-10' : 'w-full fixed top-0 text-gray-300 tracking-wider bg-gray-950 z-10'}>
        <div className='w-full flex flex-row justify-between items-center py-2 px-2'>
            <Link className='' to={'/'}>
                {!transparent && (<img className='w-20 h-16' src='../static/images/logo-1.png' alt='logo'></img>)}
                {transparent && (<img className='w-20 h-16' src='../static/images/logo-transparent.png' alt='logo'></img>)}
            </Link>
            {navigation && (<ul className='w-1/2 lg:w-auto justify-end md:mx-4 lg:mx-0 flex flex-row space-x-5 text-xs md:text-sm'>
                <Link to={'/'} className='hidden lg:inline-block relative group'>
                    <span className='pb-1 block'>HOME</span>
                    {!transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>)}
                    {transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-black group-hover:-translate-y-2'></span>)}
                </Link>
                <Link to={'/work'} className='relative inline-block group'>
                    <span className='pb-1 block'>WORK</span>
                    {!transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>)}
                    {transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-black group-hover:-translate-y-2'></span>)}
                </Link>
                <Link to={'/about'} className='relative inline-block group'>
                    <span className='pb-1 block'>ABOUT</span>
                    {!transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>)}
                    {transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-black group-hover:-translate-y-2'></span>)}
                </Link>
                <Link to={'/contact'} className='relative inline-block group'>
                    <span className='pb-1 block'>CONTACT</span>
                    {!transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>)}
                    {transparent && (<span className='absolute bottom-1 left-0 w-full h-0.5 bg-black group-hover:-translate-y-2'></span>)}
                </Link>
            </ul>)}
        </div>
    </section>
  )
}

export default Header
