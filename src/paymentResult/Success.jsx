

import React from 'react'

const Success = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
     <div class="mb-3">
      <img alt="Green checkmark icon" class="mx-auto h-16" src="image/check.png"/>
     </div>
     <h1 class="text-2xl font-bold text-gray-800 mb-2">
      Payment Complete
     </h1>
     <p class="text-gray-600 mb-4">
      Thank you for completing the payment! You will shortly receive an email of your payment.
     </p>
     <h2 class="text-lg font-semibold text-gray-800 mb-1">
      Transaction ID
     </h2>
     <hr class="border-gray-300 mb-2"/>
     <p class="text-3xl font-bold text-gray-800 mb-4">
      123456789
     </p>
     <p class="text-lg font-semibold text-green-600">
      Thank You!
     </p>
    </div>
  </div>
  )
}

export default Success