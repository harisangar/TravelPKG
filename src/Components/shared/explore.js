import React,{useState} from 'react'

const Explore = () => {
    const destinations = ['Destination 1', 'Destination 2', 'Destination 3'];
    const durations = ['1 week', '2 weeks', '3 weeks'];
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

      const [selectedDestination, setSelectedDestination] = useState('');
      const [selectedDuration, setSelectedDuration] = useState('');
      const [selectedMonth, setSelectedMonth] = useState('');

     const handleExploreClick = () => {
       console.log('Destination:', selectedDestination);
       console.log('Duration:', selectedDuration);
       console.log('Month:', selectedMonth);
     };
  return (
    <div className='explore-container shadow w-min p-1 rounded bg-purple-400'>
      <div className='flex border  '>
        <div className='flex justify-center bg-white items-center text-gray-500 hover:text-purple-800 border border-purple-800 px-2'>
          <span>
            <i className='ri-map-pin-line'></i>
          </span>

          <select
            className='border-none'
            onChange={(e) => setSelectedDestination(e.target.value)}
          >
            <option value=''>Select Destination</option>
            {destinations.map((destination, index) => (
              <option key={index} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        <div className='flex justify-center bg-white px-5 items-center border text-gray-500 hover:text-purple-800 border-purple-800 '>
          <span>
            <i class='ri-time-line'></i>
          </span>
          <select onChange={(e) => setSelectedDuration(e.target.value)}>
            <option value=''>Select Duration</option>
            {durations.map((duration, index) => (
              <option key={index} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>
        <div className='flex justify-center bg-white px-5 items-center border text-gray-500 hover:text-purple-800 border-purple-800'>
          <span>
            <i class='ri-calendar-2-line'></i>
          </span>
          <select onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value=''>Select Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className='px-8 py-2 border bg-purple-800  border-purple-800 text-white'>
          <button onClick={handleExploreClick}>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Explore
