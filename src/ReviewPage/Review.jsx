import React, { useRef } from 'react'; // Import React and useRef for referencing DOM elements
import "./Review.css"; // Import CSS for styling the component
import Review_content from "./Review_content"; // Import the Review_content component
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"; // Import icons for the left and right arrows

const Review = () => {
  const scrollRef = useRef(null); // useRef hook to reference the scrollable content container
  let scrollInterval = null; // Variable to store the scroll interval (if needed for continuous scrolling)

  // Function to handle left or right navigation
  const navigation = (dir) => {
    const container = scrollRef.current; // Get reference to the scrollable container

    // Determine scroll amount based on the direction 
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth+2 ) // Scroll left by container width + 20px
        : container.scrollLeft + (container.offsetWidth+2 ); // Scroll right by container width + 20px

    // Smooth scroll the container to the calculated position
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Function to stop scrolling (for when mouse button is released)
  const stopScrolling = () => {
    clearInterval(scrollInterval); // Clear any existing scroll interval
  };

  return (
    <div className="review-container">
      {/* Heading for the review section */}
      <h1 className="heading1">Your Satisfaction, Our Priority</h1>

      {/* Main container for the reviews and arrows */}
      <div className="mainDiv">
        {/* Left arrow for navigation */}
        <BsFillArrowLeftCircleFill
          className="slide-arrow left-arrow"
          onMouseDown={() => navigation('left')} // Scroll left on mouse down
          onMouseUp={stopScrolling} // Stop scrolling on mouse up
          onMouseLeave={stopScrolling} // Stop scrolling when the mouse leaves the arrow
        />

        {/* Scrollable content container holding the review cards */}
        <div className="content-container" ref={scrollRef}>
          {/* Render multiple Review_content components */}
          <Review_content className="card" />
          <Review_content className="card" />
          <Review_content className="card" />
          <Review_content className="card" />
          <Review_content className="card" />
          <Review_content className="card" />
        </div>

        {/* Right arrow for navigation */}
        <BsFillArrowRightCircleFill
          className="slide-arrow right-arrow"
          onMouseDown={() => navigation('right')} // Scroll right on mouse down
          onMouseUp={stopScrolling} // Stop scrolling on mouse up
          onMouseLeave={stopScrolling} // Stop scrolling when the mouse leaves the arrow
        />
      </div>
    </div>
  );
};

export default Review;
