import React from 'react'
import  {img2} from '../../img/index.js'

const PackageDetailscard = ({country}) => {
  return (
    <div className=' w-max p-5 shadow-lg mb-5  rounded'>
      <div className='mainrow flex gap-2'>
        <div className='firstrow flex p-2 mr-5'>
          <img className='w-40 mr-2 rounded' src={img2} alt='img' />
          <div className='firstcol flex flex-col'>
            <h1 className='font-bold'>Charismatic {country} Tour Package</h1>
            <h1>
              <span className='text-red-500 font-bold'>4days & 3nights</span>{' '}
              <span className='text-gray-500'>| Custamizable</span>
            </h1>
            <h1>
              Starting From{' '}
              <span className='bg-blue-500 rounded-lg p-0.5 mr-1'>9% Off</span>
              <i class='ri-information-line'></i>
            </h1>
            <h1 className='text-green-500 text-2xl'>$1457</h1>
            <h1 className='text-gray-500'>Per Person on twin sharing</h1>
            <h1 className='font-bold'>Hotel included in package:</h1>
            <h1 className='p-1  text-white bg-purple-500 rounded w-min'>
              3Star
            </h1>
            <h1 className='text-sm font-bold'>
              Cities: Kochi(1D) to Munnar(3D)
            </h1>
          </div>
        </div>
        <div className='secondcol flex flex-col items-end justify-around'>
          <h1 className='text-blue-400 font-bold mb-2'>Add To Compare</h1>

          <div className=' flex flex-wrap gap-0.5 mb-2 w-max'>
            <h1 className='border border-gray-800 w-min rounded-[50px] p-1 '>
              waterfal
            </h1>
            <h1 className='border border-gray-800 w-min rounded-[50px] p-1 '>
              adventure
            </h1>
            <h1 className='border border-gray-800 w-min rounded-[50px] p-1 '>
              family
            </h1>
            <h1 className='border border-gray-800 w-min rounded-[50px] p-1 '>
              friends
            </h1>
          </div>

          <div className='w-60'>
            <h1 className='text-sm'>
              Planning a weekend getaway in South India? Famous for backwaters,
              beaches, hill station....
            </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-between border-gray-800 border-t'>
        <div className='flex gap-1'>
          <div className='flex flex-col justify-center items-center mr-1 '>
            <i class='ri-hotel-line'></i>
            <p className='text-[12px]'>upto 3 star</p>
          </div>
          <div className='flex flex-col justify-center items-center mr-1 '>
            <i class='ri-cake-3-line'></i>
            <p className='text-[12px]'>meals</p>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <i class='ri-road-map-line'></i>
            <p className='text-[12px]'>sightseening</p>
          </div>
        </div>
        <div className='text-sm'>
          <button className='text-red-500 p-2 m-2'>View Details</button>
          <button className='p-2 text-white bg-red-600 rounded'>
            Customize & Get Quotes
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageDetailscard
