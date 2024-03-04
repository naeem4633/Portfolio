import React from 'react';

const Checkout = () => {
    return (
        <>
            <div className='w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0'>
                <div className='mx-auto mt-8 border border-gray-300 border-t-0 border-l-0 border-r-0 border-b-1 w-3/4'>
                    <p className='font-medium text-3xl pb-8'>Checkout</p>
                </div>
                <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-between py-24'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between w-full mx-auto'>
                        <div className='w-full mr-8 flex flex-col'>
                            <p className='font-medium text-4xl mb-4'>Login With Your Account</p>
                            <div className='w-full border border-gray-200 mb-3'></div>
                            <p className='text-xl mb-4'>Enter Your E-Mail Address And Password To Log In.</p>
                            <div className='w-full bg-gray-100 my-4 h-16 p-5'>Email Address</div>
                            <div className='w-full bg-gray-100 my-4 h-16 p-5'>Password</div>
                            <p className='text-green-500 my-3'>Forgot password?</p>
                            <button className='bg-red-700 w-1/3 h-16 text-white font-semibold my-5 mx-auto'>Sign In</button>
                        </div>
                    
                        <div className='w-full mr-8 flex flex-col'>
                            <p className='font-medium text-4xl mb-4'>New Customers</p>
                            <div className='w-full border border-gray-200 mb-3'></div>
                            <p className='text-xl mb-4'>By Creating An Account With Us, Purchasing On Our Website Becomes Much Faster And Easier.</p>
                            <button className='bg-green-400 w-1/3 h-16 text-white font-semibold my-5 mx-auto'>Create an Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }

export default Checkout
