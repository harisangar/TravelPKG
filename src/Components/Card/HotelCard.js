import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { img1 } from '../../img/index';

const HotelCard = () => {
    const { country } = useParams();
  const location = useLocation();
  console.log(location);
  const [selectedMonth, setSelectedMonth] = useState('');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <div className='m-3 shadow p-2  '>
      <div className='flex flex-col lg:flex-row '>
        <div>
          <img
            className='h-80 md:mx-2 object-cover mb-2'
            src={img1}
            alt='img'
          />
        </div>
        <div className=' flex flex-col justify-between '>
          <div className='border p-2 rounded shadow mb-2 h-full '>
            <div>
              <div className='flex flex-col lg:flex-row justify-between '>
                <div>
                  <h1 className='md:text-xl font-bold'>{country} Hotel</h1>
                  <div className='star-rating'>
                    {[...Array(5)].map((star) => {
                      return (
                        <span className='star text-yellow-300'>&#9733;</span>
                      );
                    })}
                  </div>
                  <h1 className='felx mt-2 mb-5 flex-wrap font-semibold text-sm'>
                    {country}
                    <span className='text-blue-500'>| View Map</span>
                  </h1>
                </div>
                <div className='flex '>
                  <div className='flex flex-col m-1'>
                    <h1 className='text-sm text-gray-400'>expert Rating</h1>
                    <h1 className='text-sm'>Excellent</h1>
                  </div>
                  <div>
                    <h1 className='p-1 bg-green-500 text-white'>9.0</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex gap-1 mb-5 font-semibold'>
                  <h1>
                    <span className='text-sm p-1 border border-yellow-300 rounded-full text-yellow-300'>
                      Top Rated Luxary Property
                    </span>
                  </h1>
                  <h1 className='text-sm p-1 bg-blue-200 rounded-full'>
                    beach access
                  </h1>
                </div>
                <div className=''>
                  <h1 className='text-gray-500 text-sm'>Per Night</h1>
                </div>
                <div className=''>
                  <h1 className='text-green-500 font-bold text-lg'>NA</h1>
                </div>
                <div className=''>
                  <h1 className='text-sm'>5 km from City Center </h1>
                </div>
              </div>
            </div>
            <div className='flex gap-1 mb-5 font-semibold'>
              <div className='flex flex-col justify-center items-center mr-1 '>
                <i class='ri-hotel-line'></i>
                <p className='md:text-[12px] text-[10px]'>3 star</p>
              </div>
              <div className='flex flex-col justify-center items-center mr-1 '>
                <i class='ri-cake-3-line'></i>
                <p className='md:text-[12px] text-[10px]'>meals</p>
              </div>
              <div className='flex flex-col justify-center items-center '>
                <i class='ri-road-map-line'></i>
                <p className='md:text-[12px] text-[10px]'>sightseening</p>
              </div>
              <div className='flex flex-col justify-center items-center '>
                <i class='ri-taxi-line'></i>
                <p className='md:text-[12px] text-[10px]'>Transfer</p>
              </div>
              <div className='flex flex-col justify-center items-center '>
                <i class='ri-sailboat-fill'></i>
                <p className='md:text-[12px] text-[10px]'>HouseBoat</p>
              </div>
            </div>
          </div>
          <div className='bg-red-500 font-semibold rounded text-white p-2 text-center'>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
