import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import {img1,img2,img3} from "../../img/index"

const Card = ({ content,link,img ,closeoption}) => {
    const indian= content.indian;
    const international=content.international
    const [image, setImage] = useState(null);
    useEffect(() => {
      if (img === 'image1') {
        setImage(img1);
      } else if (img === 'image2') {
        setImage(img2);
      } else {
        setImage(img3);
      }
    }, [img]);


    
  return (
    <>
      <div className='card rounded  left-0  mx-16 absolute  z-20 grid grid-cols-3  bg-white/30 backdrop-blur-lg  '>
        <div className=' p-4 rounded bg-white/30 '>
          <h2 className='text-xl font-bold mb-4'>Indian</h2>
          <ul>
            {indian.map((item, index) => (
              <Link to={`${link}/${item}`} key={item}>
                <li onClick={closeoption} key={index} className='mb-2'>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='rounded bg-white/30  p-4'>
          <h2 className='text-xl font-bold mb-4'>international</h2>
          <ul>
            {international.map((item, index) => (
              <Link to={`${link}/${item}`} key={item}>
                <li onClick={closeoption} key={index} className='mb-2'>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=' flex items-center p-4 rounded bg-white/30'>
        
          <img src={image} alt='img' />
        
        </div>
      </div>
    </>
  );
};

export default Card;
