import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSRGuHeD2kdYgZF1fobD162ijmPQm68k",
  authDomain: "fir-example412.firebaseapp.com",
  projectId: "fir-example412",
  storageBucket: "fir-example412.appspot.com",
  messagingSenderId: "729112830853",
  appId: "1:729112830853:web:61089d782fc19a67291aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
