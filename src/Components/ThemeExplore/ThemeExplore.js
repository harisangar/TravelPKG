import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
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

const ThemeExplore = () => {

    const sliderClick = ()=>{
        console.log('clicked')
    }
    const slides = [
      {
        image: adventure ,
        title: 'Adventure',
        description: 'adventure Theme',
        clickEvent: sliderClick,
      },
      {
        image:  beaches ,
        title: 'Seasonal',
        description: 'Seasonal Theme',
        clickEvent: sliderClick,
      },
      {
        image:  family ,
        title: 'Family',
        description: 'Family Theme',
        clickEvent: sliderClick,
      },
      {
        image: nature ,
        title: 'Nature',
        description: 'Nature Theme',
        clickEvent: sliderClick,
      },
      {
        image: religious ,
        title: 'Religious',
        description: 'Relegious Theme',
        clickEvent: sliderClick,
      },
      {
        image:  friends_group ,
        title: 'Friends',
        description: 'Friends Theme',
        clickEvent: sliderClick,
      },
      {
        image: honeymoon ,
        title: 'Honeymoon',
        description: 'Honeymoon Theme',
        clickEvent: sliderClick,
      },
      {
        image:  wateractivities ,
        title: 'Water Activities',
        description: 'Water Activities',
        clickEvent: sliderClick,
      },
      {
        image:  wildlife ,
        title: 'Wild Life',
        description: 'Wildlife Theme',
        clickEvent: sliderClick,
      },
    ];
  return (
    <div className='bg-purple-400 p-5'>
      <ReactCardSlider slides={slides} className=''>
        {slides.map((slide, index) => (
          <div className='h-20' key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className=''
            />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </ReactCardSlider>
    </div>
  );
}

export default ThemeExplore
