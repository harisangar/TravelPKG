import React from 'react';
import { useParams } from 'react-router-dom';
import PackageDetailscard from '../shared/PackageDetailscard';

const HolidayPackCountry = () => {
 const { country } = useParams();
 return (
   <div>
     <div className='pb-5 p-2'>
       <h1>Holidaypackage</h1>
       <PackageDetailscard country={country} />
       <PackageDetailscard country={country} />
       <PackageDetailscard country={country} />
       <PackageDetailscard country={country} />
     </div>
   </div>
 );
};

export default HolidayPackCountry;
