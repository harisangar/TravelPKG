import React from 'react';
import { useParams } from 'react-router-dom';
import HotelCard from '../Card/HotelCard';

const SingleHotel = () => {
  const { country } = useParams();
  return (
    <div>
      <div className=''>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
};

export default SingleHotel;
