import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  adventure,
  beaches,
  family,
  nature,
  religious,
  friends_group,
  honeymoon,
  wateractivities,
  wildlife,
} from '../../img/themes/index';
import Slider from 'react-slick';

const ThemeExplore = () => {
  const sliderClick = () => {
    console.log('clicked');
  };
  const slides = [
    {
      image: adventure,
      title: 'Adventure',
      description: 'adventure Theme',
      clickEvent: sliderClick,
    },
    {
      image: beaches,
      title: 'Seasonal',
      description: 'Seasonal Theme',
      clickEvent: sliderClick,
    },
    {
      image: family,
      title: 'Family',
      description: 'Family Theme',
      clickEvent: sliderClick,
    },
    {
      image: nature,
      title: 'Nature',
      description: 'Nature Theme',
      clickEvent: sliderClick,
    },
    {
      image: religious,
      title: 'Religious',
      description: 'Relegious Theme',
      clickEvent: sliderClick,
    },
    {
      image: friends_group,
      title: 'Friends',
      description: 'Friends Theme',
      clickEvent: sliderClick,
    },
    {
      image: honeymoon,
      title: 'Honeymoon',
      description: 'Honeymoon Theme',
      clickEvent: sliderClick,
    },
    {
      image: wateractivities,
      title: 'Water Activities',
      description: 'Water Activities',
      clickEvent: sliderClick,
    },
    {
      image: wildlife,
      title: 'Wild Life',
      description: 'Wildlife Theme',
      clickEvent: sliderClick,
    },
  ];
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:5,
    slidesToScroll:1
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-5 mb-3'>
        <Slider {...settings}>
          {slides.map((d, index) => (
            <div className='bg-white h-auto text-black rounded-xl'>
              <div className='h-56 rounded-t-xl bg-purple-400 flex justify-center items-center'>
                <img src={d.image} alt='' className='h-44 rounded-full' />
              </div>

              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-md font-semibold'>{d.title}</p>
                <p>{d.description}</p>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
    </div>
  );
};

export default ThemeExplore;
