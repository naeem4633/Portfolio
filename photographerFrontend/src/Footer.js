import React from 'react'

const Footer = () => {
  return (
    <section className='w-full bg-transparent'>
        <div className='mx-auto flex flex-col space-y-12 items-center py-8'>
            <div className='flex flex-col space-y-2 items-center'>
                <div className='bg-gray-900 p-2 text-white'>
                    <div className='w-24 lg:w-fit h-12 lg:h-24 p-2 bg-gray-900 flex flex-col items-center justify-center lg:text-2xl outline outline-2 outline-gray-100'>
                        <p>JOHN DOE</p>
                        <p className='font-bold'>IMAGES</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-xs'>
                    <p className=''>John Doe Images 2023</p>
                    <p className='John Doe Images 2023'>(123) 111 1234</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer