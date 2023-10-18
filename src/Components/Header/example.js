import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function example() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 py-2.5'>
        //first main navbar
        <div className='flex flex-wrap justify-between items-center mx-auto '>
          <Link to='/'>
            <img src={logo} className='h-3' alt='logo' />
          </Link>
          <div>
            <ul className='flex '>
              <li>
                <NavLink
                  to='/agent'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                1800-123-5555
              </li>
              <li>
                <NavLink
                  to='/agent'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Travel Agent
              </li>
              <li>
                <NavLink
                  to='/blog'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Blog
              </li>

              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Offers
              </li>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                DownloadApp
              </li>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Login
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className='bg-white border-gray-200 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto '>
          <div>
            <ul className='flex '>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                honeymoon packages
              </li>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                family packages
              </li>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Holiday packages
              </li>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Holiday deals
              </li>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Luxary Hotels
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex '>
              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Hotels
              </li>

              <li>
                <NavLink
                  to='/offers'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Destination Guide
              </li>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    `block py-2 duration-200 border-b border-gray-100 ${
                      isActive ? 'text-orange-700' : text - gray - 700
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                />
                Holiday themes
              </li>
              <li className='border-2 text-red-600 border-red-600 p-1 '>
                Plan My Holiday
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default example
