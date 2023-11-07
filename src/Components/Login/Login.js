import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {travel} from "../../img/index"


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call).
    console.log('Email:', email, 'Password:', password);
  };
  return (
    <div className='min-h-screen  m-2 flex  items-center justify-center bg-purple-200'>
      <div className=' flex  m-2 md:w-2/4 lg:w-[500px] bg-white rounded-lg shadow-md'>
        {/* <div className='md:w-2/4 rounded bg-purple-500 px-10 flex items-center'>
          <img src={travel} alt='travel' />
        </div> */}
        <div className='p-10 w-full '>
          <h2 className='text-2xl font-semibold text-center mb-4'>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-3 border rounded-md '
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-700 font-semibold'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full p-3 border rounded-md'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
              >
                Login
              </button>
            </div>
            <div className='mt-4 text-center'>
              <p>
                Don't have an account?{' '}
                <Link to='/signup' className='text-blue-500'>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
