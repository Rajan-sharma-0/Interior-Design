import React from "react";
import "./About.css"; // Importing the CSS file for custom styling

const About = () => {
  return (
    <>
      {/* Main container with full width and height set */}
      <div className="w-full h-520">
        {/* Section with background color white and padding to space content */}
        <section className="bg-white pt-3 pb-1 flex justify-center flex-col items-center">
          {/* Heading for the section, centered and styled with font properties */}
          <h1 className="flex text-center resp-head font-bold font-sans text-black">
            MEET OUR TEAMS
          </h1>
          {/* Grid layout for team members' cards with responsive columns and gap spacing */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-6 px-1 place-items-center gap-2 items-center py-4">

            {/* Each team member card */}
            <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
              {/* Image of the team member */}
              <img className="w-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="person1"/>
              {/* Text section inside the card */}
              <div className="text-center w-full">
                {/* Name of the team member */}
                <h2 className="font-bold text-black px-2 border-b-2">Jane</h2>
                {/* Position of the team member */}
                <p className="text-gray-600 font-semibold px-2">CEO and Founder</p>
                {/* Email of the team member */}
                <p className="text-gray-500 font-mono px-2">jane@example.com</p>
                {/* Contact button */}
                <button className="w-full py-1 mt-1 text-lg text-white hover:bg-blue-500 bg-blue-700">
                  Contact
                </button>
              </div>
            </div>

            {/* Repeat the same structure for each team member */}
            <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
              <img className="w-full" src="https://photosbull.com/wp-content/uploads/2024/05/1000060092.jpg" alt="person2"/>
              <div className="text-center w-full">
                <h2 className="font-bold text-black px-2 border-b-2">Natasha</h2>
                <p className="text-gray-600 font-semibold px-2">Co-Founder</p>
                <p className="text-gray-500 font-mono px-2">naty@example.com</p>
                <button className="w-full py-1 mt-1 text-lg text-white hover:bg-blue-500 bg-blue-700">
                  Contact
                </button>
              </div>
            </div>

            <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
              <img className="w-full" src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="person3"/>
              <div className="text-center w-full">
                <h2 className="font-bold text-black px-2 border-b-2">Joe</h2>
                <p className="text-gray-600 font-semibold px-2">Co-Founder</p>
                <p className="text-gray-500 font-mono px-2">joe@example.com</p>
                <button className="w-full py-1 mt-1 text-lg text-white hover:bg-blue-500 bg-blue-700">
                  Contact
                </button>
              </div>
            </div>

            <div className="transition-shadow hover:shadow-2xl overflow-hidden rounded-xl w-[11rem] md:w-[14rem] lg:w-[17rem] h-20vh border-2 border-gray-400 flex flex-col justify-center items-center">
              <img className="w-full" src="https://lh3.googleusercontent.com/a/ACg8ocISQt5uXObhzNpn9gFw823QfAkq_YvodhWBPGqGJozEXRE=s300-c" alt="person4"/>
              <div className="text-center w-full">
                <h2 className="font-bold text-black px-2 border-b-2">Sonia</h2>
                <p className="text-gray-600 font-semibold px-2">Co-Founder</p>
                <p className="text-gray-500 font-mono px-2">sonia@example.com</p>
                <button className="w-full py-1 mt-1 text-lg text-white hover:bg-blue-500 bg-blue-700">
                  Contact
                </button>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
