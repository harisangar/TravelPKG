import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { img1 } from '../../img/index';

const SinglePackageDetail = () => {
  const location = useLocation();
  console.log(location);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [showPopup, setShowPopup] = useState(false);
    const handlePopup = () => {
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };
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
   const [from, setFrom] = useState('');
   const [to, setTo] = useState('');
   const [selectedDate, setSelectedDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

   const handleFromChange = (e) => setFrom(e.target.value);
   const handleToChange = (e) => setTo(e.target.value);
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };


   const handleSubmit = (e) => {
     e.preventDefault();
     // Handle login logic here (e.g., API call).
     console.log('From:', from, 'To:', to);
   };
   const handleDateChange = (e) => {
     setSelectedDate(e.target.value);
   };
  return (
    <div className='m-5'>
      <div className='flex flex-col lg:flex-row '>
        <div>
          <img
            className='h-80 md:mx-2 object-cover mb-2'
            src={img1}
            alt='img'
          />
        </div>
        <div className=' flex flex-col justify-between'>
          <div className='border p-2 rounded shadow mb-2 h-full'>
            <div className=''>
              <h1 className='md:text-xl font-bold'>
                Hotel included in package:
              </h1>
              <span className='flex gap-5'>
                <span className='flex gap-2'>
                  <input type='radio' name='hotel' /> <h1>3 Star</h1>
                </span>
                <span className='flex gap-2'>
                  <input type='radio' name='hotel' /> <h1>4 Star</h1>
                </span>
                <span className='flex gap-2'>
                  <input type='radio' name='hotel' /> <h1>5 Star</h1>
                </span>
              </span>
              <h1 className='felx mt-2 mb-5 flex-wrap font-semibold text-sm'>
                Cities: Kochi(1D) To Munnar(2D) To Thekkady(1D) To Kumarakom(1D)
                To Alleppey (2D)
              </h1>
              <div>
                <div className='flex gap-1 mb-5 font-semibold'>
                  <div className='flex flex-col justify-center items-center mr-1 '>
                    <i class='ri-hotel-line'></i>
                    <p className='md:text-[12px] text-[10px]'>3 star</p>
                  </div>
                  <div className='flex flex-col justify-center items-center mr-1 '>
                    <i class='ri-cake-3-line'></i>
                    <p className='md:text-[12px] text-[10px]'>meals</p>
                  </div>
                  <div className='flex flex-col justify-center items-center '>
                    <i class='ri-road-map-line'></i>
                    <p className='md:text-[12px] text-[10px]'>sightseening</p>
                  </div>
                  <div className='flex flex-col justify-center items-center '>
                    <i class='ri-taxi-line'></i>
                    <p className='md:text-[12px] text-[10px]'>Transfer</p>
                  </div>
                  <div className='flex flex-col justify-center items-center '>
                    <i class='ri-sailboat-fill'></i>
                    <p className='md:text-[12px] text-[10px]'>HouseBoat</p>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <h1 className='font-semibold text-[12px] md:text-[14px]'>
                      Starting from:
                    </h1>
                    <h1 className='text-green-500 font-bold text-xl'>
                      22,900/-
                    </h1>
                    <h1 className='font-semibold text-[12px]  md:text-[16px] '>
                      Per Person on twin sharing
                    </h1>
                  </div>
                  <div>
                    <h1 className='font-semibold text-[12px] md:text-[14px]'>
                      Price For The Month
                    </h1>
                    <div className='border text-[12px]  md:text-[16px] p-2 font-semibold text-blue-500'>
                      <select
                        onChange={(e) => setSelectedMonth(e.target.value)}
                      >
                        <option value=''>Select Month</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-red-500 font-semibold rounded text-white p-2 text-center'>
            <button onClick={handlePopup}>Customize & Get Quotes</button>
          </div>
          {showPopup && (
            <div className='popup-card absolute p-2 bg-white lg:w-[500px]  shadow-2xl rounded'>
              <div className='popup-content'>
                <div className=' flex justify-end'>
                  <button
                    onClick={handleClosePopup}
                    className='close-button bg-red-500 rounded font-semibold text-white p-2 px-3 m-2  '
                  >
                    X
                  </button>
                </div>
                <form onSubmit={handleSubmit} className='p-5'>
                  <div className='mb-2'>
                    <label
                      htmlFor='to'
                      className='block text-gray-700 font-semibold'
                    >
                      To
                    </label>
                    <input
                      type='text'
                      id='to'
                      className='w-full p-3 border rounded-md '
                      placeholder='To'
                      value={to}
                      onChange={handleFromChange}
                      required
                    />
                  </div>
                  <div className='mb-2'>
                    <label
                      htmlFor='from'
                      className='block text-gray-700 font-semibold'
                    >
                      From
                    </label>
                    <input
                      type='text'
                      id='from'
                      className='w-full p-3 border rounded-md'
                      placeholder='From'
                      value={from}
                      onChange={handleToChange}
                      required
                    />
                  </div>
                  <div className='date-selection mb-2'>
                    <label
                      htmlFor='selectDate'
                      className='block text-gray-700 font-semibold'
                    >
                      Select Date:
                    </label>
                    <input
                      type='date'
                      id='selectDate'
                      className='w-full p-3 border rounded-md text-gray-700'
                      placeholder='Select Date'
                      value={selectedDate}
                      required
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className='email-input mb-2'>
                    <label
                      htmlFor='email'
                      className='block text-gray-700 font-semibold'
                    >
                      Email:
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full p-3 border rounded-md text-gray-700'
                      placeholder='Email'
                      value={email}
                      required
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className='phone-input'>
                    <label
                      htmlFor='phone'
                      className='block text-gray-700 font-semibold'
                    >
                      Phone:
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      placeholder='Phone No'
                      className='w-full p-3 border rounded-md text-gray-700'
                      value={phone}
                      required
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='px-4 py-2 bg-blue-500 mt-3 text-white rounded-md hover:bg-blue-600'
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=' mt-10 m-2 p-8 rounded shadow'>
        <h1 className='text-2xl font-bold mb-5'>Over View</h1>
        <h1 className='text-sm text-justify'>
          Those who have recently exchanged vows can look up to this 6 nights 7
          days Munnar Thekkady Alleppey honeymoon package with visits to Kochi
          and Kumarakom. The package is designed to present you with an
          unparalleled experience as you step into a new phase of life. This
          amazing Kumarakom Alleppey Munnar honeymoon package coupled with Kochi
          and Thekkady trips is the best way to come close to each other. Your
          Thekkady, Kumarakom, Kochi Alleppey Munnar Honeymoon Package begins
          with Kochi where you visit timeless edifices of historical
          significance. Next day, you will be in Munnar for two days, enjoying
          the nature’s grandeur of this hill station. Mattupetty Dam, Photo
          Point, Eravikulam National Park, and waterfalls comprise of major
          hot-spots that you will be enjoying in Munnar. After this quaint town,
          Thekkady invites you to delight in an exciting trip to Periyar
          Wildlife Sanctuary and a thrilling jungle safari.
        </h1>
      </div>
    </div>
  );
};

export default SinglePackageDetail;
