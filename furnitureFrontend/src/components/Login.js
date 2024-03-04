import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ResetPage } from './ResetPage';

const Login = () => {
const [focusedInput, setFocusedInput] = useState(null);

const handleInputFocus = (inputId) => {
    setFocusedInput(inputId);
};

const handleInputBlur = () => {
    setFocusedInput(null);
};

const getInputClassName = (inputId) => {
    return focusedInput === inputId ? 'inputField focused' : 'inputField';
};
  return (
    <>
        <div className='w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0'>
            <ResetPage/>
            <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-between py-24'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between w-full mx-auto'>
                    <div className='w-full mr-8 flex flex-col'>
                        <p className='font-medium text-4xl mb-4'>Login With Your Account</p>
                        <div className='w-full border border-gray-200 mb-3'></div>
                        <p className='text-xl mb-4'>Enter Your E-Mail Address And Password To Log In.</p>
                        <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('email')}`}
                            onClick={() => handleInputFocus('email')}
                            onBlur={handleInputBlur}>
                            Email Address
                            {focusedInput === 'email' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
                        </div>
                        <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('password')}`}
                            onClick={() => handleInputFocus('password')}
                            onBlur={handleInputBlur}>
                            Password
                            {focusedInput === 'password' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
                        </div>
                        <p className='text-green-500 my-3 underline'>Forgot password?</p>
                        <button className='bg-red-700 hover:bg-red-800 w-1/3 h-16 text-white font-semibold my-5 mx-auto'>Sign In</button>
                    </div>
                
                    <div className='w-full mr-8 flex flex-col'>
                        <p className='font-medium text-4xl mb-4'>New Customers</p>
                        <div className='w-full border border-gray-200 mb-3'></div>
                        <p className='text-xl mb-4'>By Creating An Account With Us, Purchasing On Our Website Becomes Much Faster And Easier.</p>
                        <Link to={'/registration'}>
                            <button className='bg-green-400 hover:bg-green-500 w-1/3 h-16 text-white font-semibold my-5 mx-auto'>Create an Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login