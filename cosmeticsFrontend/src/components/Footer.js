import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='w-full relative bottom-0 flex flex-col tracking-wide mt-16'>
        <div className='bg-black min-h-[40vh] lg:min-h-[60vh] mx-auto w-full xl:w-5/6 xl:px:0 flex flex-col justify-between p-2 lg:p-4'>
            <div className='w-full flex flex-row text-white text-xs lg:text-sm justify-between lg:justify-evenly'>
                <ul className='w-full space-y-4'>
                    <li className='flex flex-row space-x-2 items-center'>
                        <img className='hidden lg:block w-4 h-4' src='../static/images/footer-location.png'></img>
                        <div className='flex flex-col xl:flex-row xl:space-x-2'>
                            <p className='font-semibold'>Find a Store:</p>
                            <p className='text-semibold'>Store Locator</p>
                        </div>
                    </li>
                    <li className='flex flex-row space-x-2 items-center'>
                        <img className='hidden lg:block w-4 h-4' src='../static/images/footer-headphone.png'></img>
                        <div className='flex flex-col xl:flex-row xl:space-x-2'>
                            <p className='font-semibold'>Call Us:</p>
                            <p className='text-semibold'>(+92) - 304-111-0075</p>
                        </div>
                    </li>
                    <li className='flex flex-row space-x-2 items-center'>
                        <img className='hidden lg:block w-4 h-4' src='../static/images/footer-email.png'></img>
                        <div className='flex flex-col xl:flex-row xl:space-x-2'>
                            <p className='font-semibold'>Email:</p>
                            <p className='text-semibold'>support@brand.com</p>
                        </div>
                    </li>
                    <li className='flex flex-row space-x-2 items-center'>
                        <img className='hidden lg:block w-4 h-4' src='../static/images/footer-clock.png'></img>
                        <div className='flex flex-col xl:flex-row xl:space-x-2'>
                            <p className='font-semibold'>Hours:</p>
                            <p className='text-semibold'>09:00 - 20:00, Mon - Sat</p>
                        </div>
                    </li>
                </ul>
                <ul className='w-full space-y-4 pt-2'>
                    <p className='lg:text-xl font-semibold py-2'>Company</p>
                    <li className='flex flex-row space-x-2 items-baseline'>About Us</li>
                    <li className='flex flex-row space-x-2 items-baseline'>Contact Us</li>
                    <li className='flex flex-row space-x-2 items-baseline'>Privacy Policy</li>
                    <li className='flex flex-row space-x-2 items-baseline'>Terms & Conditions</li>
                    <li className='flex flex-row space-x-2 items-baseline'>Blog</li>
                </ul>
                <ul className='w-full space-y-4 pt-2'>
                    <p className='lg:text-xl font-semibold py-2'>Account</p>
                    <li className='flex flex-row space-x-2 items-baseline'>Sign In</li>
                    <li className='flex flex-row space-x-2 items-baseline'>View Cart</li>
                    <li className='flex flex-row space-x-2 items-baseline'>My Wishlist</li>
                    <li className='flex flex-row space-x-2 items-baseline'>Track My Order</li>
                </ul>
                <ul className='hidden lg:block w-full space-y-4 pt-2'>
                    <p className='lg:text-xl font-semibold py-2'>Popular Brands</p>
                    <Link to={`/brands/NYX%20Professional%20Makeup`} className='flex flex-row space-x-2 items-baseline'>NYX Professional Makeup</Link>
                    <Link to={`/brands/Maybelline%20New%20York`} className='flex flex-row space-x-2 items-baseline'>Maybelline New York</Link>
                    <Link to={`/brands/Kerastase`} className='flex flex-row space-x-2 items-baseline'>Kerastase</Link>
                    <Link to={`/brands/Wet%20n%20Wild%20Beauty`} className='flex flex-row space-x-2 items-baseline'>Wet n Wild Beauty</Link>
                    <Link to={`/brands/SugarBear%20Hair`} className='flex flex-row space-x-2 items-baseline'>SugarBear Hair</Link>
                </ul>
                <div className='hidden xl:flex w-full flex-col space-y-2 text-base'>
                    <p className='font-semibold'>Secure Payment Gateways</p>
                    <div className='flex flex-row items-center space-x-4'>
                        <img src='../static/images/footer-visa.png' className='w-16 h-16'></img>
                        <img src='../static/images/footer-mastercard.png' className='w-16 h-10'></img>
                    </div>
                </div>
            </div>
            <div className='border border-x-0 border-b-0 border-white pt-4 flex flex-row items-center justify-between text-white'>
                <div className='w-1/3 flex flex-row space-x-3'>
                    <img className='w-6 h-6' src='../static/images/footer-facebook.png'></img>
                    <img className='w-6 h-6' src='../static/images/footer-youtube.png'></img>
                    <img className='w-6 h-6' src='../static/images/footer-instagram.png'></img>
                </div>
                <div className='w-1/3 flex flex-row space-x-1 items-center'>
                    <p className='text-sm lg:text-base'>© 2022 - 2023. All rights reserved.</p>
                </div>
                <div className='w-1/3 lg:w-1/5 flex flex-col space-x-1 justify-start items-center'>
                    <p className='lg:text-xl text-red-600'>+76 583 1110327</p>
                    <p className='text-xs lg:text-sm text-gray-500'>Working Hours: 09:00 - 12:00</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer