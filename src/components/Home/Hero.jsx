// src/components/Hero.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center bg-no-repeat min-h-screen flex"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-neutral-900 w-full min-h-screen opacity-80 ">
        <div className="max-w-6xl mx-auto px-6 md:px-1">
          <div className="text-white max-w-2xl space-y-7 py-20 mt-25">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              EXPERT CAR REPAIR <br /> SERVICES <br /> CERTIFIED
            </h1>
            <p className="text-xl font-semibold text-gray-200">
              We offer top-quality auto repair services for all makes and models. Our certified technicians
              will get your vehicle back on the road quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#2E7BCF] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition text-center"
              >
                Book an Appointment
              </a>
              <a
                href="tel:07795528849"
                className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-700 transition text-center justify-center"
              >
                <FaPhoneAlt /> +447581 730734
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
