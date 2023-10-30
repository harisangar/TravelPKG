import React, { useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { travel2 } from '../../img/index';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from 'firebase/auth';
import { googleAuthProvider, auth } from '../../firebase';
import { useAuth } from '../../AuthContext';

function Signup() {
const { setIsLoggedIn } = useAuth();
const navigate=useNavigate();
  const handlesignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result.user.accessToken);
      localStorage.setItem("token",result.user.accessToken);
      localStorage.setItem("user",JSON.stringify(result.user));
       setIsLoggedIn(true);
       navigate('/')
      

    } catch (error) {
      console.log(error);
    }
  };

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
    <div className='min-h-screen m-2 flex items-center justify-center bg-purple-200'>
      <div className=' flex m-2 md:w-2/4  bg-white rounded-lg shadow-md'>
        <div className='md:w-2/4 rounded p-5 bg-purple-500 flex items-center '>
          {/* <img src={travel2} alt='travel' /> */}
        </div>
        <div className='p-10  w-full rounded-lg'>
          <h2 className='text-2xl font-semibold text-center mb-4'>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className='md:mb-4'>
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
          <div className='mt-4 text-center text-sm'>
            <p>
              Already have an account?{' '}
              <Link to='/login' className='text-blue-500'>
                Sign in
              </Link>
            </p>
            <div onClick={handlesignin} className='bg-blue-500 text-white text-sm p-2 cursor-pointer rounded'>signup with google</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
