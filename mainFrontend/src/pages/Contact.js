import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <>
    <Header  navigation={true} transparent={false}/>
    <section className="w-full h-[100vh] bg-gray-950 flex items-center text-gray-300 text-sm lg:text-base">
        <div className='h-3/4 mx-auto w-3/4 flex flex-col space-y-12 justify-center'>
            <p className='text-8xl lg:text-[16rem]'>Hello.</p>
            <div className='lg:ml-6 flex flex-col space-y-8'>
                <p>Seeking an elegant and organized website that you can manage independently? Let's chat! </p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex space-x-2'>
                        <p>Email:</p>
                        <a href='mailto:ahmedn3700@gmail.com' className='relative inline-block group cursor-pointer'>
                            <span className='pb-1 block'>ahmedn3700@gmail.com</span>
                            <span className='absolute bottom-1.5 left-0 w-full h-[1px] bg-white group-hover:-translate-y-2'></span>
                        </a>
                    </div>
                    <div className='flex space-x-2'>
                        <p>On the Internet :</p>
                        <a href='https://www.linkedin.com/in/syed-naeem-ahmed-156003188/' className='relative inline-block group cursor-pointer'>
                            <span className='pb-1 block'>LinkedIn</span>
                            <span className='absolute bottom-1.5 left-0 w-full h-[1px] bg-white group-hover:-translate-y-2'></span>
                        </a>
                        <p> | </p>
                        <a href='https://github.com/naeem4633' className='relative inline-block group cursor-pointer'>
                            <span className='pb-1 block'>Github</span>
                            <span className='absolute bottom-1.5 left-0 w-full h-[1px] bg-white group-hover:-translate-y-2'></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
