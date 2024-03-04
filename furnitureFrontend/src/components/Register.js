import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ResetPage } from './ResetPage';

const Register = () => {
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
      <div className='w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0 mb-12'>
        <ResetPage/>
        <div className='mx-auto mt-8 w-3/4'>
          <p className='font-medium text-3xl pb-8 border border-gray-300 border-t-0 border-x-0 border-b-1 mb-8'>Registration</p>
          <div className='w-3/5 mr-8 flex flex-col text-left space-y-8 justify-start'>
            <div>
              <p className='font-medium text-4xl mb-4'>New Customer</p>
              <p className='text mb-4'>Already Registered? <Link className='text-green-500 underline' to={'/login'}>Login</Link></p>
              <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('email')}`}
                onClick={() => handleInputFocus('email')}
                onBlur={handleInputBlur}
              >
                Email Address
                {focusedInput === 'email' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
              </div>
              <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('password')}`}
                onClick={() => handleInputFocus('password')}
                onBlur={handleInputBlur}
              >
                Password
                {focusedInput === 'password' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
              </div>
            </div>
            <div>
              <p className='font-medium text-2xl mb-4'>Contact Information</p>
              <div className='flex flex-row space-x-6'>
                <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('firstName')}`}
                  onClick={() => handleInputFocus('firstName')}
                  onBlur={handleInputBlur}
                >
                  First Name
                  {focusedInput === 'firstName' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
                </div>
                <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('lastName')}`}
                  onClick={() => handleInputFocus('lastName')}
                  onBlur={handleInputBlur}
                >
                  Last Name
                  {focusedInput === 'lastName' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
                </div>
              </div>
              <div className={`w-full bg-gray-100 my-4 h-16 p-5 ${getInputClassName('phoneNumber')}`}
                onClick={() => handleInputFocus('phoneNumber')}
                onBlur={handleInputBlur}
              >
                Phone Number
                {focusedInput === 'phoneNumber' && <span className="text-red-500 text-xs ml-2">Not Authorized in Sample Project</span>}
              </div>
              <button className='bg-green-500 hover:bg-green-600 w-1/3 h-16 text-white font-semibold my-5 mx-auto'>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
