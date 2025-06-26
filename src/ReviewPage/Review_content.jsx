import React from "react";
import "./Review_content.css";
import StarRating from "./StarRating";

// The Review_content component takes in props to make the content dynamic
const Review_content = ({ customerName, customerImage, reviewText, starRating }) => {
  return (
    <div className="Main">
      {/* Container for the user's card */}
      <div className="card_for_user">
        {/* Container for image and heading */}
        <div className="div-for-img-and-heading">
          {/* Dynamically display customer's image */}
          <img className="img" src={customerImage} alt={`${customerName}`} />
          {/* Dynamically display customer's name */}
          <p className="p1">{customerName}</p>
        </div>
        
        {/* Star rating component */}
        <div className="star">
          {/* Pass the starRating prop to the StarRating component */}
          <StarRating rating={starRating} />
        </div>

        {/* Dynamically display the customer's review */}
        <p className="p2">
          {reviewText}
        </p>
      </div>
    </div>
  );
};

// Set default props in case no props are passed
Review_content.defaultProps = {
  customerName: "Customer's name", // Default customer name
  customerImage: "image/image4.jpg", // Default customer image
  reviewText: "No review provided.", // Default review text
  starRating: 0, // Default rating if not provided
};

export default Review_content;
