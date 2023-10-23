import React from 'react';
import { useParams } from 'react-router-dom';

const SingleHotel = () => {
  const { country } = useParams();
  return (
    <div>
      <div className='bg-purple-100 h-80'>
        <h1>Hotels page</h1>
        <p>contry: {country}</p>
      </div>
    </div>
  );
};

export default SingleHotel;
