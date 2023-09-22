// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClBupnotSNJ61jj-0uHvE_-0HEg6OVXRw",
  authDomain: "fir-react-admin-panel.firebaseapp.com",
  projectId: "fir-react-admin-panel",
  storageBucket: "fir-react-admin-panel.appspot.com",
  messagingSenderId: "909196262802",
  appId: "1:909196262802:web:38293d874008b7642b554b",
  measurementId: "G-5276HJ725N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();