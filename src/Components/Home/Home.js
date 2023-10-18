import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img1, img2, img3, img4, img5 } from '../../img/index';

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

      <div className='  p-10 m-10 rounded-lg bg-white/30 backdrop-blur-lg realtive'>
        <AliceCarousel
          style={{ backgroundColor: 'red', padding: '10px' }}
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
    </>
  );
}

export default Home
