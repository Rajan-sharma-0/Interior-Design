import React, { useEffect, useState } from "react";
import "./section_content.css";

// The SectionContent component displays product data fetched from an API
const SectionContent = () => {
  const [plans, setPlans] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const REACT_APP_API = process.env.REACT_APP_API;

  useEffect(() => {
   
      async function fetchPlans() {
        try {
          const response = await fetch(`${REACT_APP_API}/product/products/`, {
            method: 'GET',
            headers: {
              'Authorization': `No Auth`, // Set "No Auth" in the headers
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
         
          // Check if the response is an array
          if (Array.isArray(data)) {
            setPlans(data); // Set the plans data from the API response
          } else {
            throw new Error('Expected an array of plans');
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      fetchPlans();
    
   
    
  }, [ ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (plans.length === 0) return <div>No product data available.</div>;

  return (
    <div className="divcards">
      {plans.map((plan) => (
        <div className="card" key={plan?.id}>
          <img alt={plan.name} height="200" src={plan.image_urls} width="290" />
          <div className="card-contents">
            <div className="card-title">
              {plan?.name}
            </div>
            <div className="card-description">
              {plan?.description}
            </div>
            <div className="badge">
              version - Updated!
            </div>
            <a className="launch-button" href="#">
              Launch Tool
            </a>
            <div className="credits">
              {plan?.credit_price} credits / generation
            </div>
          </div>
        </div>
      ))}
      
    </div>
    
  );
};

export default SectionContent;