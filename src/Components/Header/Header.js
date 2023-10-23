import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { logo } from '../../img/index';
import Card from '../Card/Card';


function Header() {
 const [hoveredItem, setHoveredItem] = useState(null);

 const items = [
   {
     text: 'Honeymoon Packages',
     img: 'image1',
     link: 'honeymoonpackages',
     content: {
       indian: [
         'Kerala',
         'Andaman',
         'Himachal',
         'Sikkim',
         'Kashmir',
         'Rajasthan',
         'Goa',
         'Uttarakhand',
       ],
       international: [
         'Bali',
         'Maldives',
         'SriLanka',
         'Europe',
         'Malaysia',
         'Turkey',
         'Thailand',
         'Mauritius',
         'Dubai',
         'Singapore',
         'Switzerland',
         'Seychelles',
       ],
     },
   },
   {
     text: 'Family Packages',
     link: 'familypackages',
     img: 'image2',
     content: {
       indian: [
         'Kerala',
         'Andaman',
         'Himachal',
         'Sikkim',
         'Kashmir',
         'Rajasthan',
         'Goa',
         'Uttarakhand',
       ],
       international: [
         'Bali',
         'Maldives',
         'SriLanka',
         'Europe',
         'Malaysia',
         'Turkey',
         'Thailand',
         'Mauritius',
         'Dubai',
         'Singapore',
         'Switzerland',
         'Seychelles',
       ],
     },
   },
   {
     text: 'Holiday Packages',
     link: 'holidaypackages',
     img: 'image3',
     content: {
       indian: [
         'Kerala',
         'Andaman',
         'Himachal',
         'Sikkim',
         'Kashmir',
         'Rajasthan',
         'Goa',
         'Uttarakhand',
       ],
       international: [
         'Bali',
         'Maldives',
         'SriLanka',
         'Europe',
         'Malaysia',
         'Turkey',
         'Thailand',
         'Mauritius',
         'Dubai',
         'Singapore',
         'Switzerland',
         'Seychelles',
       ],
     },
   },
   // Add more items as needed
 ];
 const close=()=>{
  setHoveredItem(null);
 }


  return (
    <>
      <header className='shadow-lg bg-white/30 top-0 rounded-lg pb-1.5 '>
        <nav className='bg-white  mb-1 border-gray-200  py-2.5'>
          <div className='ml-2  flex flex-wrap justify-between items-center mx-auto '>
            <Link to='/'>
              <h1 className=' shadow text-purple-800 bg-white px-7 py-1.5  rounded-lg tracking-wide ml-2 text-2xl'>
                <i className=' text-purple-800 ri-riding-line'></i> Travel
                <span className='text-red-500 '>X</span>
              </h1>
            </Link>
            <div>
              <ul className='flex gap-5 mr-2'>
                <li>
                  <NavLink
                    to='/agent'
                    className={({ isActive }) =>
                      `block py-2   duration-200 border-b border-purple-700 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-purple-700 lg:p-0`
                    }
                  >
                    <div className='flex'>
                      <span className='pr-1'>
                        <i class='ri-phone-line'></i>
                      </span>
                      1800-123-5555
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='agent'
                    className={({ isActive }) =>
                      `block py-2   duration-200 border-b border-purple-700 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-purple-700 lg:p-0 cursor-pointer`
                    }
                  >
                    <div className='flex'>
                      <span className='pr-1'>
                        <i class='ri-account-pin-circle-line'></i>
                      </span>
                      Travel Agent
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/blog'
                    className={({ isActive }) =>
                      `block py-2   duration-200 border-b border-purple-700 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-purple-700 lg:p-0`
                    }
                  >
                    <div className='flex'>
                      <span className='pr-1'>
                        <i class='ri-booklet-line'></i>
                      </span>
                      Blog
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/offers'
                    className={({ isActive }) =>
                      `block py-3   duration-200 border-b border-purple-700 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-purple-700 lg:p-0`
                    }
                  >
                    <div className='flex'>
                      <span className='pr-1'>
                        <i class='ri-gift-2-line'></i>
                      </span>
                      Offers
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/offers'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b border-purple-700 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-purple-700 lg:p-0`
                    }
                  >
                    <div className='flex'>
                      <span className='pr-1'>
                        <i class='ri-google-play-line'></i>
                      </span>
                      DownloadApp
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      `block    duration-200  border-gray-100 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                  >
                    <div className='px-5 flex border-l-[3px]'>
                      <span className='pr-1'>
                        <i class='ri-login-box-line'></i>
                      </span>
                      Login
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className='bg-purple-400 mx-1.5 rounded-lg  shadow border-gray-200 py-2.5'>
          <div className='relative flex flex-wrap justify-between items-center mx-auto '>
            <div>
              <ul className='flex gap-5 ml-2'>
                {items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={close}
                  >
                    <NavLink
                      to={`/${item.link}`}
                      className={({ isActive }) =>
                        `block py-2 duration-200 border-b text-white border-gray-100 ${
                          isActive ? 'text-purple-700' : 'text - gray - 700'
                        } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                      }
                    >
                      {item.text}
                    </NavLink>
                    {hoveredItem === index && (
                      <Card
                        closeoption={close}
                        img={item.img}
                        content={item.content}
                        link={item.link}
                      />
                    )}
                  </li>
                ))}
                <li>
                  <NavLink
                    to='/holidaydeals'
                    className={({ isActive }) =>
                      `block py-2 duration-200 text-white border-b border-gray-100 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                  >
                    Holiday deals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/luxaryhotes'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b  text-white border-gray-100 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                  >
                    Luxary Hotels
                  </NavLink>
                </li>
                {/* <li>
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
                </li> */}
              </ul>
            </div>
            <div>
              <ul className='flex gap-5 mr-2 items-center'>
                <li>
                  <NavLink
                    to='/hotels'
                    className={({ isActive }) =>
                      `block py-2 text-white duration-200 border-b border-gray-100 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                  >
                    Hotels
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/destinationguide'
                    className={({ isActive }) =>
                      `block py-2 text-white duration-200 border-b border-gray-100 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                  >
                    Destination Guide
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/holidaythemes'
                    className={({ isActive }) =>
                      `block py-2 text-white duration-200 border-b border-gray-100 ${
                        isActive ? 'text-purple-700' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                  >
                    Holiday themes
                  </NavLink>
                </li>
                <li className='border-2 rounded bg-purple-700 text-white   p-2 '>
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
