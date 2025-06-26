import React, { useEffect, useRef, useState } from "react";

function About() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const [imageInView, setImageInView] = useState(false);

  useEffect(() => {
    // Observer for the about section
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.1 }
    );

    // Observer for the image
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="about-container w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <section className="about-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="text-content w-full lg:w-1/2 flex flex-col text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c5c6a3] mb-4">
            ABOUT US
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            At Qubinets Interiors, we believe every space has the potential to inspire and delight. Our mission is to transform your vision into reality, crafting interiors that truly reflect your personality and needs.
          </p>
          <button className="self-center lg:self-start bg-[#989a6f] text-white font-bold rounded-md px-6 py-2 w-[9rem] hover:bg-[#7f8058] transition-all duration-300">
            LEARN MORE
          </button>
        </div>

        {/* Image Content */}
        <div
          ref={imageRef}
          className={`image-content w-full lg:w-1/2 transform transition-transform duration-500 ease-in-out ${imageInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        >
          <img
            src="image/workplace.jpg"
            alt="Workplace"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
