import React from 'react'


const Services = () => {
  return (
    <>
      <div className=" w-full min-h-screen  flex flex-col items-center justify-center px-2 text-center">
        <h1 className="resp-head font-bold font-mono text-gray-800">Our Features & Services</h1>
        <hr className="w-1/2 h-1 mx-auto bg-gray-600 border-none rounded-full mb-2" />
        <p className="resp-text text-gray-800 mb-10">Discover our comprehensive range of interior design services tailored to meet your needs.</p>
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 w-full place-items-center gap-4">
          
          <div className="transitions max-w-96 shadows bg-white rounded-2xl flex flex-col justify-center items-center hover:bg-gray-400 text-gray-700">
            <img className="w-[80%]" src="image/services/residental.png" alt="" />
          <h2 className="resp-text font-bold">Residential Design</h2>
             <p className="">
               Create a home that reflects your style and personality with our
               residential design services. From concept to completion, we ensure
               every detail enhances your living space.
             </p>
             <button className="font-bold transitions w-full py-2 border-[2px] border-white bg-gray-700 rounded-b-2xl hover:bg-white  text-black text-xl mt-3">Learn More</button>
          </div>
          
          <div className="transitions max-w-96 shadows bg-white rounded-2xl flex flex-col justify-center items-center text-gray-700">
            <img className="w-[52%]" src="image/services/commercial.png" alt="" />
          <h2 className="resp-text font-bold">Commercial Design</h2>
             <p className="">
             Transform your office or commercial space into an inspiring
              environment that boosts productivity and reflects your brand. Our
              commercial design solutions are tailored to meet your business
              objectives.
             </p>
             <button className="font-bold transitions w-full py-2 border-[2px] border-white bg-gray-700 rounded-b-2xl hover:bg-white  text-black text-xl mt-3">Learn More</button>
          </div>
          
          <div className="transitions max-w-96 shadows bg-white rounded-2xl flex flex-col justify-center items-center text-gray-700">
            <img className="w-[92%]" src="image/services/renovation.png" alt="" />
          <h2 className="resp-text font-bold">Renovations</h2>
             <p className="paragraph">
             Revitalize your existing space with our renovation services. Whether
              you're updating a single room or undergoing a complete home makeover,
              we provide expert guidance and quality craftsmanship.
             </p>
             <button className="font-bold transitions w-full py-2 border-[2px] border-white bg-gray-700 rounded-b-2xl hover:bg-white  text-black text-xl mt-3">Learn More</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services;
