import React from 'react'
import { Link } from 'react-router-dom';

import { adventure ,beaches,family,nature,religious,friends_group,Honeymoon_romantic,wateractivities,wildlife} from '../../img/themes/index'

const ThemeCard = ({ theme, closeoption }) => {
  const img=theme.img
  console.log(theme.name)
  return (
    <div className=' card  flex gap-5 h-24 items-center rounded shadow right-0 px-5 mx-16 absolute  z-20   bg-white backdrop-blur-lg  '>
      {theme.map((item, index) => (
        <Link to={`/${item.link}`} key={index}>
          <div
            className='cursor-pointer w-28  flex flex-col justify-center items-center'
            onClick={closeoption}
            key={index}
          >
            <img
              className='h-12 object-cover'
              src={require(`../../img/themes/${item.img}.jpeg`)}
              alt='img'
            />
            <h1>{item.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ThemeCard
