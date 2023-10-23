import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { travel2 } from '../../img/index';

function Signup() {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     password: '',
   });

   const { name, email, password } = formData;

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     // Add your signup logic here, such as sending the data to an API
   };
  return (
    <div className='min-h-screen flex items-center justify-center bg-purple-200'>
      <div className=' flex   w-2/4  bg-white rounded-lg shadow-md'>
        <div className='w-2/4 rounded p-5 bg-purple-500 flex items-center '>
          {/* <img src={travel2} alt='travel' /> */}
        </div>
        <div className='p-10  w-full rounded-lg'>
          <h2 className='text-2xl font-semibold text-center mb-4'>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
            >
              Sign Up
            </button>
          </form>
          <div className='mt-4 text-center'>
            <p>
              Already have an account?{' '}
              <Link to='/login' className='text-blue-500'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
