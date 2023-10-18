import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { logo } from '../../img/index';
import Card from '../Card/Card';

function Header() {
  return (
    <>
      

      <header className='shadow  top-0 '>
        <nav className='bg-gray-100 border-gray-200 py-2.5'>
          <div className='flex flex-wrap justify-between items-center mx-auto '>
            <Link to='/'>
              <img className='h-12 rounded-sm w-40 m-2' src={logo} alt='logo' />
            </Link>
            <div>
              <ul className='flex gap-5 mr-2'>
                <li>
                  <NavLink
                    to='/agent'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    1800-123-5555
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='agent'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer`
                    }
                  >
                    Travel Agent
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/blog'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/offers'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Offers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/offers'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    DownloadApp
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className='bg-white border-gray-200 py-2.5'>
          <div className='flex flex-wrap justify-between items-center mx-auto '>
            <div>
              <ul className='flex gap-5 ml-2'>
                <li>
                  <NavLink
                    to='/honeymoonpackages'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    honeymoon packages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/familypackages'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    family packages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/holidaypackages'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Holiday packages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/holidaydeals'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Holiday deals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/luxaryhotes'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Luxary Hotels
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex gap-5 mr-2 items-center'>
                <li>
                  <NavLink
                    to='/hotels'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Hotels
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/destinationguide'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Destination Guide
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/holidaythemes'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-gray-100 ${
                        isActive ? 'text-orange-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Holiday themes
                  </NavLink>
                </li>
                <li className='border-2 text-red-600 border-red-600 p-1 '>
                  Plan My Holiday
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header
