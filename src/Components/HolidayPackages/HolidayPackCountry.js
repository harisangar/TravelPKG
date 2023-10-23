import React from 'react';
import { useParams } from 'react-router-dom';

const HolidayPackCountry = () => {
 const { country } = useParams();
 return (
   <div>
     <div className='bg-purple-100 h-80'>
       <h1>Holidaypackage</h1>
       <p>contry: {country}</p>
     </div>
   </div>
 );
};

export default HolidayPackCountry;
