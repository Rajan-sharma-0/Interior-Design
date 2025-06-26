import React, { useState } from "react"; // Import React and useState for managing component state
import "./StarRating.css"; // Import CSS for styling the star rating component

const StarRating = () => {
  // Declare state variables for the current rating and hover state
  const [rating, setRating] = useState(0); // Initialize rating state to 0
  const [hover, setHover] = useState(0); // Initialize hover state to 0

  return (
    <div className="star-rating"> {/* Container for the star rating */}
      {/* Create an array of 5 elements to represent 5 stars */}
      {[...Array(5)].map((star, index) => {
        index += 1; // Increment index to start from 1 instead of 0
        return (
          <button
            type="button" // Button type for accessibility
            key={index} // Unique key for each button in the list
            className={index <= (hover || rating) ? "on" : "off"} // Determine the class based on hover or rating
            onClick={() => setRating(index)} // Update rating on click
            onMouseEnter={() => setHover(index)} // Set hover state on mouse enter
            onMouseLeave={() => setHover(rating)} // Reset hover state to current rating on mouse leave
          >
            <span className="star">&#9733;</span> {/* Star character for display */}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating; // Export the StarRating component for use in other parts of the application
