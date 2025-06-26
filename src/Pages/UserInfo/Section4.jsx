import React, { useEffect, useRef } from 'react';

function Section4() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className="about-container w-full h-auto ">
      <section className="about-content w-full h-70vh p-16 bg-[white] flex flex-col lg:flex-row justify-between items-center">
        <div className="w-[90%]">
          <img src="image/workplace.jpg" alt="Workplace" />
        </div>
        <div className="w-full flex flex-col px-2">
          <div>
            <h1 className="text-center resp-head font-bold font-sans text-[#c5c6a3] mt-3 w-full whitespace-nowrap overflow-hidden relative">
              SECTION 3
            </h1>
            <p className="text-gray-500 text-md md:text-xl lg:text-[1.2rem] my-2">
              At Qubinets Interiors, we believe every space has the potential to inspire and delight...
            </p>
            <button className="my-2 flex text-white font-bold mx-auto rounded-md px-5 py-2 w-[9rem] bg-[#989a6f] hover:bg-[#7f8058] transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Inline CSS for the component */}
      <style jsx>{`
        .about-container {
          opacity: 0;
          transform: translateY(30px); /* Slightly increased movement for more visible effect */
          transition: opacity 1.8s ease-out, transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); /* Enhanced easing */
        }

        .about-container.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Optional: You can add some animation to the text (e.g., typing effect) */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes cursor {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}

export default Section4;
