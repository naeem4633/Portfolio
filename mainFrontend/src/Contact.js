import React from 'react'
import Header from './Header'
import { ResetPage } from './ResetPage';

const Contact = () => {
  return (
    <>
    <Header fixed={true} transparent={true}/>
    <section className='w-full'>
        <ResetPage />
        <div className="h-[60vh] flex flex-col bg-gray-800 justify-center bg-[url('./static/images/contact-cover.jpg')]">
            <div className='w-full flex flex-col text-center text-white justify-center space-y-2'>
                <p className='text-5xl lg:text-8xl font-bold'>Contact.</p>
                <p className='lg:text-lg'>Please let me know how I can help. I look forward to working with you.</p>
            </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row p-4 mt-20'>
            <div className='hidden lg:block w-1/2'>
                <img src='../static/images/contact.jpg' className='w-3/4 h-[80vh] p-6'></img>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col space-y-3 text-gray-400 p-4'>
                <p className='text-2xl lg:text-5xl text-gray-600 tracking-wide'>LET'S DO THIS</p>
                <p className='text-sm lg:text-base'>Please contact me at 570 466 7732 for whatever you need, OR think you need.</p>
                <p className='text-sm lg:text-base'>OR Email me: johndoe@comcast.net</p>
                <ul className='w-full lg:w-4/5 flex flex-col space-y-4 text-gray-400 text-sm lg:text-lg'>
                    <li>
                        <label className=''>Name</label>
                        <input className='w-full p-3 border border-gray-300 text-sm text-black'></input>
                    </li>
                    <li>
                        <label className=''>Email</label>
                        <input className='w-full p-3 border border-gray-300 text-sm text-black'></input>
                    </li>
                    <li>
                        <label className=''>Phone Number</label>
                        <input className='w-full p-3 border border-gray-300 text-sm text-black'></input>
                    </li>
                    <li>
                        <label className=''>Message</label>
                        <textarea className='h-40 w-full p-3 border border-gray-300 text-sm text-black'></textarea>
                    </li>
                    <li>
                        <div className='w-32 h-16 bg-gray-400 flex justify-center items-center p-2 hover:bg-gray-600 cursor-pointer'>
                            <p className='text-white'>Submit</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
