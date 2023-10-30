import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Card from '../Card/Card';
import ThemeCard from '../HolidayThemes/ThemeCard';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

import { useAuth } from '../../AuthContext';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredItemtwo, setHoveredItemtwo] = useState(null);
  const [hoveredTheme, setHoveredTheme] = useState(false);
  const [ismobile, setIsMobile] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  

  const handleLogout = async ()=>{
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedOut(true); 
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error)
    }
  }
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
  const items2 = [
    {
      text: 'Hotels',
      img: 'image1',
      link: 'hotels',
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
      text: 'Destination Guid',
      link: 'destinationguide',
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

    // Add more items as needed
  ];

  const themes = [
    {
      name: 'Seasonal',
      link: 'seasonalpackages',
      img: 'beaches',
    },
    {
      name: 'Adventure',
      link: 'adventure',
      img: 'adventure',
    },
    {
      name: 'Family',
      link: 'family',
      img: 'family',
    },
    {
      name: 'Nature',
      link: 'nature',
      img: 'nature',
    },
    {
      name: 'Honeymoon',
      link: 'honeymoon',
      img: 'honeymoon',
    },
    {
      name: 'WildLife',
      link: 'wildlife',
      img: 'wildlife',
    },
    {
      name: 'Friends',
      link: 'friends',
      img: 'friends_group',
    },
    {
      name: 'Water Activities',
      link: 'wateractivities',
      img: 'wateractivities',
    },
    {
      name: 'Religious',
      link: 'religious',
      img: 'religious',
    },
  ];
  const close = () => {
    setHoveredItem(null);
  };
  const closetwo = () => {
    setHoveredItemtwo(null);
  };
  const closetheme = () => {
    setHoveredTheme(false);
  };
console.log("user for header",user)
  return (
    <>
      <header className=' hidden lg:block shadow-lg bg-white/30 top-0 rounded-lg pb-1.5 '>
        <nav className='bg-white  mb-1 border-gray-200  py-2.5'>
          <div className='ml-2  flex flex-wrap justify-between items-center mx-auto '>
            <Link to='/'>
              <h1 className=' shadow text-primary bg-white px-7 py-1.5  rounded-lg tracking-wide ml-2 text-2xl'>
                <i className=' text-primary ri-riding-line'></i> Travel
                <span className='text-red-500 '>X</span>
              </h1>
            </Link>
            <div>
              <ul className='flex gap-5 mr-2'>
                <li>
                  <a
                    href='#themeexplore'
                    className={({ isActive }) =>
                      `block py-2   duration-200 border-b border-navhover ${
                        isActive ? 'navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-navhover lg:p-0`
                    }
                  >
                    <div className='flex'>
                      <span className='pr-1'>
                        <i class='ri-phone-line'></i>
                      </span>
                      1800-123-5555
                    </div>
                  </a>
                </li>
                <li>
                  <NavLink
                    to='agent'
                    className={({ isActive }) =>
                      `block py-2   duration-200 border-b border-navhover ${
                        isActive ? 'text-navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-navhover lg:p-0 cursor-pointer`
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
                      `block py-2   duration-200 border-b border-navhover ${
                        isActive ? 'text-navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-navhover lg:p-0`
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
                      `block py-3   duration-200 border-b border-navhover ${
                        isActive ? 'text-navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-navhover lg:p-0`
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
                      `block py-2 duration-200 border-b border-navhover ${
                        isActive ? 'text-navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0  hover:text-navhover lg:p-0`
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
                  {user ? (
                    // If a user exists, show the logout div
                    <div
                      onClick={handleLogout}
                      className='cursor-pointer'
                      // Add your logout div styles here
                    >
                      <div className='px-5 flex border-l-[3px]'>Logout</div>
                    </div>
                  ) : (
                    // If there's no user, show an empty placeholder (or you can customize this further)
                    <NavLink
                      to='/login'
                      className={({ isActive }) =>
                        `block    duration-200  border-gray-100 ${
                          isActive ? 'text-navhover' : 'text - gray - 700'
                        } lg:hover:bg-transparent lg:border-0 hover:text-navhover lg:p-0`
                      }
                    >
                      <div className='px-5 flex border-l-[3px]'>
                        <span className='pr-1'>
                          <i class='ri-login-box-line'></i>
                        </span>
                        Login
                      </div>
                    </NavLink>
                  )}
                </li>
                {user ? (
                  <li>
                    {' '}
                    <div>
                      <img
                        className='h-[35px] rounded-full'
                        src={user.photoURL}
                        alt='profile'
                      />
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
        <nav className='bg-navbg mx-1.5 rounded-lg  shadow border-gray-200 py-2.5'>
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
                          isActive ? 'text-navhover' : 'text - gray - 700'
                        } lg:hover:bg-transparent lg:border-0 hover:text-navhover lg:p-0`
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
                        isActive ? 'text-navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-navhover lg:p-0`
                    }
                  >
                    Holiday deals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/luxaryhotels'
                    className={({ isActive }) =>
                      `block py-2 duration-200 border-b  text-white border-gray-100 ${
                        isActive ? 'text-navhover' : 'text - gray - 700'
                      } lg:hover:bg-transparent lg:border-0 hover:text-navhover lg:p-0`
                    }
                  >
                    Luxary Hotels
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex gap-5 mr-2 items-center'>
                {items2.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredItemtwo(index)}
                    onMouseLeave={() => setHoveredItemtwo(null)}
                    onClick={close}
                  >
                    <NavLink
                      to={`/${item.link}`}
                      className={({ isActive }) =>
                        `block py-2 duration-200 border-b text-white border-gray-100 ${
                          isActive ? 'text-navhover' : 'text - gray - 700'
                        } lg:hover:bg-transparent lg:border-0 hover:text-navhover lg:p-0`
                      }
                    >
                      {item.text}
                    </NavLink>
                    {hoveredItemtwo === index && (
                      <Card
                        closeoption={closetwo}
                        img={item.img}
                        content={item.content}
                        link={item.link}
                      />
                    )}
                  </li>
                ))}

                <li
                  onMouseEnter={() => setHoveredTheme(true)}
                  onMouseLeave={() => setHoveredTheme(false)}
                  onClick={close}
                  className={`block py-2 duration-200 cursor-pointer border-b text-white border-gray-100 
                     lg:hover:bg-transparent lg:border-0 hover:text-navhover lg:p-0`}
                >
                  Holiday Themes
                  {hoveredTheme && (
                    <ThemeCard closeoption={closetheme} theme={themes} />
                  )}
                </li>

                <li className='border-2 rounded bg-primary text-white   p-2 '>
                  Plan My Holiday
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className='lg:hidden relative  m-2'>
        <div className='flex justify-between items-center'>
          <div>
            <Link to='/'>
              <h1 className=' shadow text-primary bg-white px-7 py-1.5  rounded-lg tracking-wide ml-2 text-2xl'>
                <i className=' text-primary ri-riding-line'></i> Travel
                <span className='text-red-500 '>X</span>
              </h1>
            </Link>
          </div>
          <div className='text-[20px]' onClick={() => setIsMobile(true)}>
            <i class='ri-menu-line'></i>
          </div>
        </div>
        <div className=''>
          {ismobile && (
            <div className=' bg-white z-[99999] absolute top-0 left-0  w-full '>
              <div
                className='text-[30px] text-red-500 flex justify-end'
                onClick={() => setIsMobile(false)}
              >
                <i class='ri-close-circle-line'></i>
              </div>

              {user && (
                <div>
                  <img
                    className='h-20 rounded-full'
                    src={user.photoURL}
                    alt='profile'
                  />
                </div>
              )}
              <div>
                <ul className='flex flex-col m-2 '>
                  <Link
                    to='/honeymoonpackages'
                    onClick={() => setIsMobile(false)}
                  >
                    <li className='mb-5 py-2 border-b'>Packages</li>
                  </Link>
                  <Link to='/hotels' onClick={() => setIsMobile(false)}>
                    <li className='mb-5 py-2 border-b'>Hotels</li>
                  </Link>
                  <Link
                    to='/destinationguide'
                    onClick={() => setIsMobile(false)}
                  >
                    <li className='mb-5 py-2 border-b'>DestinationGuides</li>
                  </Link>
                  <Link
                    to='/holidaypackages'
                    onClick={() => setIsMobile(false)}
                  >
                    <li className='mb-5 py-2 border-b'>HolidayThemes</li>
                  </Link>
                  <Link to='/luxaryhotels' onClick={() => setIsMobile(false)}>
                    <li className='mb-5 py-2 border-b'>LuxaryHotels</li>
                  </Link>
                  {user ? (
                    <div onClick={handleLogout}>LogOut</div>
                  ) : (
                    <Link to='/login' onClick={() => setIsMobile(false)}>
                      <li className='mb-5 py-2 border-b'>login</li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
