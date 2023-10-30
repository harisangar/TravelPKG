
import { initializeApp } from 'firebase/app';
import {GoogleAuthProvider,getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgXZeuyPvOsgQ94kuJ3genootW4YONAQk',
  authDomain: 'travelpkg-c71e1.firebaseapp.com',
  projectId: 'travelpkg-c71e1',
  storageBucket: 'travelpkg-c71e1.appspot.com',
  messagingSenderId: '99084388316',
  appId: '1:99084388316:web:f9cdc99f01872cb199f119',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const googleAuthProvider=new GoogleAuthProvider()

export default app;

