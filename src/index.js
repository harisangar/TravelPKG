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
import Country from './Components/HoneymoonPackages/Country';
import FamilyPackageCountry from './Components/FamilyPackages/FamilyPackageCountry';
import HolidayPackCountry from './Components/HolidayPackages/HolidayPackCountry';
import SingleHotel from './Components/Hotels/SingleHotel';
import SingleDestination from './Components/DestinationGuide/SingleDestination';
import SeasonalPackagePlace from './Components/HolidayThemes/SeasonalPackagePlace';
import AdventurePlace from './Components/HolidayThemes/AdventurePlace';
import FamilyPlace from './Components/HolidayThemes/FamilyPlace';
import  NaturePlace from './Components/HolidayThemes/NaturePlace';
import  HoneymoonPlace from './Components/HolidayThemes/HoneymoonPlace';
import  WildLifePlace from './Components/HolidayThemes/WildLifePlace';
import FriendsPlace from './Components/HolidayThemes/FriendsPlace';
import WaterActivitiesPlace from './Components/HolidayThemes/WaterActivitiesPlace';
import ReligiousPlace from './Components/HolidayThemes/ReligiousPlace';
import SinglePackageDetail from './Components/shared/SinglePackageDetail';

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
      <Route path='honeymoonpackages/:country' element={<Country />} />

      <Route path='familypackages' element={<FamilyPackages />} />
      <Route
        path='familypackages/:country'
        element={<FamilyPackageCountry />}
      />

      <Route path='holidaypackages' element={<HolidayPackages />} />
      <Route path='holidaypackages/:country' element={<HolidayPackCountry />} />

      <Route path='holidaydeals' element={<HolidayDeals />} />
      <Route path='luxaryhotels' element={<LuxaryHotels />} />
      <Route path='hotels' element={<Hotels />} />
      <Route path='hotels/:country' element={<SingleHotel />} />
      <Route path='destinationguide' element={<DestinationGuide />} />
      <Route path='destinationguide/:country' element={<SingleDestination />} />
      <Route path='holidaythemes' element={<HolidayThemes />} />
      <Route path='seasonalpackages' element={<SeasonalPackagePlace />} />
      <Route path='adventure' element={<AdventurePlace />} />
      <Route path='family' element={<FamilyPlace />} />
      <Route path='nature' element={<NaturePlace />} />
      <Route path='honeymoon' element={<HoneymoonPlace />} />
      <Route path='wildlife' element={<WildLifePlace />} />
      <Route path='friends' element={<FriendsPlace />} />
      <Route path='wateractivities' element={<WaterActivitiesPlace />} />
      <Route path='religious' element={<ReligiousPlace />} />
      <Route path='detailspage' element={<SinglePackageDetail />} />
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

