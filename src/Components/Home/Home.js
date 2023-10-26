import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Explore from '../shared/explore';
import { img1, img2, img3, img4, img5 } from '../../img/index';
import ThemeExplore from '../ThemeExplore/ThemeExplore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Home() {

  const handleDragStart = (e) => e.preventDefault();

  // const items = [
  //   <img
  //     className=' h-[500px] w-full'
  //     src={img1}
  //     alt='img'
  //     onDragStart={handleDragStart}
  //     role='presentation'
  //   />,
  //   <img
  //     className='h-[500px]  w-full'
  //     src={img2}
  //     alt='img'
  //     onDragStart={handleDragStart}
  //     role='presentation'
  //   />,
  //   <img
  //     className=' h-[500px] w-full'
  //     src={img3}
  //     alt='img'
  //     onDragStart={handleDragStart}
  //     role='presentation'
  //   />,
  //   <img
  //     className='h-[500px] w-full'
  //     src={img4}
  //     alt='img'
  //     onDragStart={handleDragStart}
  //     role='presentation'
  //   />,
  //   <img
  //     className='  h-[500px] w-full'
  //     src={img5}
  //     alt='img'
  //     onDragStart={handleDragStart}
  //     role='presentation'
  //   />,
  // ];

  const items = [
    {image : img1},
    {image : img2},
    {image : img3}
  ];

   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
   };
  return (
    <>
      <div className='relative'>
        <div className=' px-10 py-10 mt-2 bg-purple-200 mx-3 rounded-lg realtive'>
          <Slider {...settings}>
            {items.map((item, index) => (
              <img
                className='h-[200px] md:h-[450px] object-cover rounded-lg shadow'
                src={item.image}
                alt='img'
              />
            ))}
          </Slider>
        </div>
        <div className='hidden lg:block absolute top-[300px] text-white left-[450px]'>
          <div className=' flex flex-col items-center mt-5'>
            <h1 className='font-bold text-6xl '>Customize & Book</h1>
            <h1 className='font-bold text-3xl'>Amazing Holiday Packages</h1>
            <h1 className='font-light'>
              650+ Travel Agents serving 65+ Destinations worldwide
            </h1>
          </div>
        </div>
      </div>
      <div className=' flex flex-col items-center mt-5'>
        <h1 className='font-bold  text-xl md:text-5xl '>Customize & Book</h1>
        <h1 className='font-bold text-xl md:text-3xl'>
          Amazing Holiday Packages
        </h1>
        <h1 className='text-sm p-2 md:font-light'>
          650+ Travel Agents serving 65+ Destinations worldwide
        </h1>
      </div>

      <div className='flex justify-center m-5'>
        <Explore />
      </div>
      <div className='bg-gray-300 mb-3 mx-3 rounded-lg p-5 flex flex-col justify-center  font-semibold'>
        <div className='flex justify-between md:px-40 items-center'>
          <h1 className='text-xl md:text-2xl text-purple-800'>
            Explore Packages By Themes
          </h1>
          <h1 className='hidden md:block text-sm'>
            <span className='mx-1'>
              <i class='ri-phone-line'></i>
            </span>
            For best packages, call us at 1800-123-5555
          </h1>
        </div>

        <ThemeExplore />
      </div>
    </>
  );
}

export default Home
