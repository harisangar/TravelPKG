import React from 'react'
import { Link } from 'react-router-dom';

const ThemeCard = ({ theme, closeoption }) => {
  return (
    <div className=' card  flex gap-5 h-20 items-center rounded  right-0 px-5 mx-16 absolute  z-20   bg-white/30 backdrop-blur-lg  '>
      {theme.map((item, index) => (
        <Link to={`/${item.link}`} key={index}>
          <div className='cursor-pointer' onClick={closeoption} key={index}>
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ThemeCard
