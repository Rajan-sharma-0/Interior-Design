import React, { useState, useEffect } from 'react';
import './CreditsHistory.css'; // Ensure your CSS is imported
import Sidebar from '../Pages/Sidebar/Sidebar';

function CreditHistory() {
  // Dummy data or fetch data from an API
  const [creditHistory, setCreditHistory] = useState([
    { id: 1, date: '2024-10-01', credits_spent: 100, description: 'Purchased premium feature' },
    { id: 2, date: '2024-10-02', credits_spent: 50, description: 'Unlocked extra content' },
    { id: 3, date: '2024-10-03', credits_spent: 30, description: 'Donation to creator' },
    { id: 1, date: '2024-10-01', credits_spent: 100, description: 'Purchased premium feature' },
    { id: 2, date: '2024-10-02', credits_spent: 50, description: 'Unlocked extra content' },
    { id: 3, date: '2024-10-03', credits_spent: 30, description: 'Donation to creator' },
    { id: 1, date: '2024-10-01', credits_spent: 100, description: 'Purchased premium feature' },
    { id: 2, date: '2024-10-02', credits_spent: 50, description: 'Unlocked extra content' },
    { id: 3, date: '2024-10-03', credits_spent: 30, description: 'Donation to creator' },
    { id: 1, date: '2024-10-01', credits_spent: 100, description: 'Purchased premium feature' },
    { id: 2, date: '2024-10-02', credits_spent: 50, description: 'Unlocked extra content' },
    { id: 3, date: '2024-10-03', credits_spent: 30, description: 'Donation to creator' },

    // Additional entries...
  ]);
  
  useEffect(() => {
    // Fetch credit history data from an API
    fetch('/api/user/credits-history?userId=1001')
      .then((res) => res.json())
      .then((data) => setCreditHistory(data));
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] bg-slate-300">
      <Sidebar />
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="h1-credits text-3xl font-bold my-6 text-center py-12">
          Credits Usage History
        </h1>

        {/* Table container */}
        <div className="table-container overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            {/* Table Head */}
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Credits Spent</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {creditHistory.length > 0 ? (
                creditHistory.map((entry) => (
                  <tr key={entry.id} className="border-b">
                    <td className="py-3 px-4 text-gray-700">{entry.date}</td>
                    <td className="py-3 px-4 text-gray-700">{entry.credits_spent}</td>
                    <td className="py-3 px-4 text-gray-700">{entry.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-3 px-4 text-center text-gray-500">
                    No credits history available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreditHistory;
