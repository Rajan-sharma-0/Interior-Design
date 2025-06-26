import React, { useState, useEffect } from 'react'; // Import necessary hooks from React
import './Credits.css'; // Import CSS file for custom styles
import Sidebar from '../Pages/Sidebar/Sidebar'; // Import Sidebar component
import Navbar from '../Components/Navbar/Navbar'; // Import Navbar component
import { Dice1 } from 'lucide-react';

// Card component takes a 'plan' as a prop and displays its details
function Card({ plan }) {
  return (

    <div className="flex  items-center justify-between  h-500 bg-white">
      <div className="bg-white rounded-lg border-2 p-6 m-[40px] max-w-sm">
        <h2 className="text-2xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-600 mb-4">{plan?.description}.</p>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{plan?.credit_amount}</span>
        </div>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full mb-4">
          Buy {plan?.num_credits} credits
        </button>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check text-green-500 mr-2"></i>
            50 designs
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fas fa-check text-green-500 mr-2"></i>
            100 text-to-render designs
          </li>
         
        </ul>
      </div>
    </div>
   
   
  );
}

// Main Credits component that displays the plans
function Credits() {
  const [plans, setPlans] = useState([]); // State to store plans
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State to store error messages
  const REACT_APP_API = process.env.REACT_APP_API;

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);

      async function fetchPlans() {
        try {
          const response = await fetch(`${REACT_APP_API}/payment/credits/`, {
            method: 'GET',
            headers: {
              Authorization: 'No Auth', // Set the Bearer token in the headers
              'Content-Type': 'application/json', // Specify the content type
            },
          });

          const data = await response.json();
          console.log(data); // Log the response data for debugging

          // Check if the response is an array
          if (Array.isArray(data)) {
            setPlans(data); // Set the plans data from the API response
          } else {
            throw new Error('Expected an array of plans');
          }
        } catch (error) {
          setError(error.message); // Set error message if any error occurs
        } finally {
          setLoading(false); // Set loading to false after the fetch is complete
        }
      }

      fetchPlans(); // Call the fetch function
    
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

  return (
    
   
      
      // <div className="flex flex-col pt-40 bg-white">
      //   <p className="flex justify-center  text-4xl">
      //     <span className="text-black mr-2">Flexible Pricing plans for your</span>
      //     <span className="text-yellow-300"> growing team</span>
      //   </p>
      //   <div className="flex justify-center flex-wrap" >
      //     {plans.map((plan, index) => (
      //       <Card key={index} plan={plan}  />
      //     ))}
      //   </div>
      // </div>
      <div className="flex flex-col pt-40 bg-white">
  <p className="flex-col justify-center sm:flex-row text-2xl sm:text-4xl text-center">
    <span className="text-black mr-2">Flexible Pricing plans for your</span>
    <span className="text-yellow-300"> growing team</span>
  </p>
  <div className="flex justify-start flex-wrap mt-10">
    {plans.map((plan, index) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
        <Card plan={plan} />
      </div>
    ))}
  </div>
</div>
      
   
  );
}

export default Credits; // Exporting the Credits component
