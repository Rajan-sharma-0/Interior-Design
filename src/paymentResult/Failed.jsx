

import React from 'react'

const Failed = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
        <div class="flex justify-center mb-4">
            <div class="w-12 h-12 flex items-center justify-center border-2 border-red-500 rounded-full">
               <img src="image/remove.png" alt="failed" />
            </div>
        </div>
        <h2 class="text-xl font-bold text-black mb-2">Payment Failed</h2>
        <p class="text-gray-500 mb-6">Frontier not confirmed, please try again</p>
        <button class="bg-green-500 text-white py-2 px-4 rounded-full w-full mb-4">Retry Payment</button>
        <button class="text-green-500 py-2 px-4 rounded-full w-full">Cancel</button>
    </div>
</div>
  )
}

export default Failed