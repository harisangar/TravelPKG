import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Explore from '../shared/explore';
import { img1, img2, img3, img4, img5 } from '../../img/index';
import ThemeExplore from '../ThemeExplore/ThemeExplore';

function Home() {

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      className=' h-[500px] w-full'
      src={img1}
      alt='img'
      onDragStart={handleDragStart}
      role='presentation'
    />,
    <img
      className='h-[500px]  w-full'
      src={img2}
      alt='img'
      onDragStart={handleDragStart}
      role='presentation'
    />,
    <img
      className=' h-[500px] w-full'
      src={img3}
      alt='img'
      onDragStart={handleDragStart}
      role='presentation'
    />,
    <img
      className='h-[500px] w-full'
      src={img4}
      alt='img'
      onDragStart={handleDragStart}
      role='presentation'
    />,
    <img
      className='  h-[500px] w-full'
      src={img5}
      alt='img'
      onDragStart={handleDragStart}
      role='presentation'
    />,
  ];
  return (
    <>
      <div className='flex flex-col items-center mt-2'>
        <h1 className='font-bold text-xl'>Customize & Book</h1>
        <h1 className='font-bold text-xl'>Amazing Holiday Packages</h1>
        <h1 className='font-light'>
          650+ Travel Agents serving 65+ Destinations worldwide
        </h1>
      </div>

      <div className='  p-10 r bg-white realtive'>
        <AliceCarousel
          // style={{ backgroundColor: 'red', padding: '10px' }}
          autoPlay={true}
          infinite={true}
          disableSlideInfo={true}
          disableDotsControls={true}
          disableButtonsControls={true}
          animationDuration={1000}
          mouseTracking
          items={items}
        />
      </div>
      <div className='flex justify-center m-5'>
        <Explore />
      </div>
      <div className='mx-20 '>
        <ThemeExplore />
      </div>
    </>
  );
}

export default Home
