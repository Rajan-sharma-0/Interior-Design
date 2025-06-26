import React from 'react';
import './Headr.css';  // Importing the CSS file for styling the Header component
import About from '../Pages/UserInfo/About';  // Importing About component
import Review from '../ReviewPage/Review';  // Importing Review component
import Section2 from '../Pages/UserInfo/Section2';  // Importing Section2 component
import Section3 from '../Pages/UserInfo/Section3';  // Importing Section3 component
import Section4 from '../Pages/UserInfo/Section4';  // Importing Section4 component
import Section5 from '../Section/Section5';  // Importing Section5 component
import Footer from '../Components/Footer/Footer'; 

const Header = () => {
  return (
    <>
    
      {/* Main header container */}
      <div className='header-container'>
        
        {/* Intro section containing the header text and buttons */}
        <div className="intro">
          <div className='mt-32  animate-slideUp'>  {/* Adjusting the margin and padding with TailwindCSS classes */}
            
            {/* Tagline or main heading */}
            <h2 className="tagline">Discover the Best Deals</h2>

            {/* Supporting text */}
            <p>Looking for a Product</p>

            {/* Main title with typewriter animation */}
            <h1>
              <span className="typewriter w-[64rem]">Buy & Sell Products</span>
            </h1>

            {/* Supporting details */}
            <div className=''>
              <p className="details">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
            </div>

            {/* Button section */}
            <div className="button-group">
              <a href="#" className="header-btn">Details</a>  {/* Button with hover effects */}
            </div>
          </div>
        </div>
      </div>

      {/* Including additional sections/components */}

      <Section2/>
      {/* <Section3/> */}
      <Section4/>
      {/* <Credits /> */}
      {/* <Meetourteam/> */}
      <Section5/>
      <Review/>
      <About />
      <Footer/>

      {/* <Services/>  */}
    </>
  );
}

export default Header;
