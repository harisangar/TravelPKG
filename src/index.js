import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from "./Components/Home/Home"
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Blog from './Components/Blog/Blog';
import Offers from './Components/Offers/Offers';
import Agent from './Components/Agent/Agent';
import HoneymoonPackages from './Components/HoneymoonPackages/HoneymoonPackages';
import FamilyPackages from './Components/FamilyPackages/FamilyPackages';
import HolidayPackages from './Components/HolidayPackages/HolidayPackages';
import HolidayDeals from './Components/HolidayDeals/HolidayDeals';
import LuxaryHotels from './Components/LuxaryHotels/LuxaryHotels';
import Hotels from './Components/Hotels/Hotels';
import DestinationGuide from './Components/DestinationGuide/DestinationGuide';
import HolidayThemes from './Components/HolidayThemes/HolidayThemes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='agent' element={<Agent />} />
      <Route path='offers' element={<Offers />} />
      <Route path='blog' element={<Blog />} />
      <Route path='honeymoonpackages' element={<HoneymoonPackages />} />
      <Route path='familypackages' element={<FamilyPackages />} />
      <Route path='holidaypackages' element={<HolidayPackages />} />
      <Route path='holidaydeals' element={<HolidayDeals />} />
      <Route path='luxaryhotes' element={<LuxaryHotels />} />
      <Route path='hotels' element={<Hotels />} />
      <Route path='destinationguide' element={<DestinationGuide />} />
      <Route path='holidaythemes' element={<HolidayThemes />} />
      <Route path='*' element={<div>page not found</div>} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

