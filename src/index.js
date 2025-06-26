import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Header from './Home/Header';
// import Services from './Services/Services';
import Consolebtn from './Consolebtn/Consolebtn';
import Contact from './Contact/Contact';
import CreditHistory from './Credits/CreditsHistory';
import Login from './LoginPage/Login';
import About from './Pages/UserInfo/About';
import Otpverpage from './Pages/UserInfo/OTP _section/Otpverpage';
import UserInfo from './Pages/UserInfo/UserInfo';
import Sign from './SignUpPage/Sign';
import TermCondition from "./TermsAndCondition/TermCondition";
import Privacy from "./Privacy/Privacy";
import FurnishedBtn from "./Consolebtn/FurnishedBtn/FurnishedBtn";
import Credits from "./Credits/Credits";
import ResectP from "./Pages/ResectPassoord/ResectP";
import PasswordReset from "./Pages/ResectPassoord/PasswordReset";
import Section5 from "./Section/Section5";
import Product from "./Section/Product";
import Room3 from "./Consolebtn/Room3";
import Failed from "./paymentResult/Failed";
import Success from "./paymentResult/Success";
import { GoogleOAuthProvider } from "@react-oauth/google";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
      <Route path="/" element={<Header />} />
        <Route path="/Home" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='products' element={<Product/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='sign' element={<Sign/>}/>
        <Route path='otpverpage' element={<Otpverpage/>}/>
        {/* <Route path='services' element={<Services/>}/> */}
        <Route path="user-Info" element={<UserInfo />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<TermCondition />} />
        <Route path="credits" element={<Credits />} />
      <Route path='resectp' element={<ResectP/>}/>
      </Route>
      <Route path="credits-history" element={<CreditHistory />} />
      <Route path='consolebtn' element={<Consolebtn/>}/>
      <Route path='furnishedbtn' element={<FurnishedBtn/>}/>
      <Route path='room3' element={<Room3/>}/>
      <Route path="product" element={<Section5 />} />
      <Route path="/password_reset" element={<PasswordReset />} />
      <Route path='failed' element={<Failed/>}/>
      <Route path='success' element={<Success/>}/>  
    </>
  )
);
          
            // Google OAuth client ID



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  




  


  <React.StrictMode>
    <GoogleOAuthProvider>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>

);