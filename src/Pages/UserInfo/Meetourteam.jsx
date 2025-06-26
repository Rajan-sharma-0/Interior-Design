import React from 'react';

function Meetourteam() {
  return (
    <>
      {/* Main container for the Meet Our Team section */}
      <section className="bg-white w-full h-auto flex justify-center flex-col items-center">
        {/* Section heading */}
        <h1 className="flex text-center resp-head font-bold font-sans text-[#c5c6a3]">MEET OUR TEAMS</h1>

        {/* Grid for displaying team members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-6 px-1 place-items-center gap-2 items-center py-4">
          
          {/* Team member card 1 */}
          <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
            {/* Team member image */}
            <img className="w-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="person1" />
            
            {/* Team member info */}
            <div className="text-center w-full">
              <h2 className="font-bold text-black px-2 border-b-2">Jane</h2>
              <p className="text-gray-600 font-semibold px-2">CEO and Founder</p>
              <p className="text-gray-500 font-mono px-2">jane@example.com</p>
              {/* Contact button */}
              <button className="w-full py-1 mt-1 text-lg text-white bg-[#989a6f] hover:bg-[#7f8058]">
                Contact
              </button>
            </div>
          </div>

          {/* Team member card 2 */}
          <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
            <img className="w-full" src="https://photosbull.com/wp-content/uploads/2024/05/1000060092.jpg" alt="person2" />
            <div className="text-center w-full">
              <h2 className="font-bold text-black px-2 border-b-2">Natasha</h2>
              <p className="text-gray-600 font-semibold px-2">Co-Founder</p>
              <p className="text-gray-500 font-mono px-2">naty@example.com</p>
              <button className="w-full py-1 mt-1 text-lg text-white bg-[#989a6f] hover:bg-[#7f8058]">
                Contact
              </button>
            </div>
          </div>

          {/* Team member card 3 */}
          <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
            <img className="w-full" src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="person3" />
            <div className="text-center w-full">
              <h2 className="font-bold text-black px-2 border-b-2">Joe</h2>
              <p className="text-gray-600 font-semibold px-2">Co-Founder</p>
              <p className="text-gray-500 font-mono px-2">joe@example.com</p>
              <button className="w-full py-1 mt-1 text-lg text-white bg-[#989a6f] hover:bg-[#7f8058]">
                Contact
              </button>
            </div>
          </div>

          {/* Team member card 4 */}
          <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
            <img className="w-full" src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="person3" />
            <div className="text-center w-full">
              <h2 className="font-bold text-black px-2 border-b-2">Sonia</h2>
              <p className="text-gray-600 font-semibold px-2">Co-Founder</p>
              <p className="text-gray-500 font-mono px-2">sonia@example.com</p>
              <button className="w-full py-1 mt-1 text-lg text-white bg-[#989a6f] hover:bg-[#7f8058]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Meetourteam;
