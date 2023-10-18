import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import {img1,img2,img3,img4,img5,logo} from './img'

function App() {
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
    <div>
      <div className='bg-gray-200 px-2 h-20 flex justify-between items-center'>
        <div>
          <img className='h-16 rounded-sm w-40 m-2' src={logo} alt='logo' />
        </div>
        <div className='flex gap-5'>
          <h1>1800-123-5555</h1>
          <h1>Travel Agent</h1>
          <h1>Blog</h1>
          <h1>Offers</h1>
          <h1>DownloadApp</h1>
          <h1>Login</h1>
        </div>
      </div>
      <div className='px-2 bg-white flex justify-between items-center'>
        <div>
          <ul className='flex gap-5 cursor-pointer '>
            <li className='relative group cursor-pointer hover:border-b-2 border-blue-500 transition-transform transform duration-300 ease-in '>
              honeymoon packages
            </li>
            <li className='relative group cursor-pointer hover:border-b-2 border-blue-500 transition-transform transform duration-300 ease-in-out'>
              family packages
            </li>
            <li className='relative group cursor-pointer hover:border-b-2 border-blue-500 transition-transform transform duration-300 ease-in'>
              Holiday packages
            </li>
            <li className='relative group cursor-pointer hover:border-b-2 border-blue-500 transition-transform transform duration-300 ease-in'>
              Holiday deals
            </li>
            <li className='relative group cursor-pointer hover:border-b-2 border-blue-500 transition-transform transform duration-300 ease-in'>
              Luxary Hotels
            </li>
          </ul>
        </div>
        <div className='flex gap-5 items-center p-2'>
          <ul className='flex gap-5 items-center'>
            <li>Hotels</li>
            <li>Destination Guide</li>
            <li>Holiday themes</li>
            <li className='border-2 text-red-600 border-red-600 p-1 '>
              Plan My Holiday
            </li>
          </ul>
          
        </div>
      </div>
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
    </div>
  );
}

export default App;
