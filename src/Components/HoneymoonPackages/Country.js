import React from 'react'
import { useParams } from 'react-router-dom'
import PackageDetailscard from '../shared/PackageDetailscard';

const Country = () => {
  const { country } = useParams();
  return (
    <div className='h-auto'>
      <div className='pb-5 p-2'>
        <h1>Honeymoon package</h1>

        <PackageDetailscard country={country} />
        <PackageDetailscard country={country} />
        <PackageDetailscard country={country} />
        <PackageDetailscard country={country} />
      </div>
    </div>
  );
}

export default Country;
