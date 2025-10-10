import React, { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleAutoplay = () => {
      const video = videoRef.current;
      if (video && video.paused) {
        video.play().catch((err) => console.log("Autoplay failed", err));
      }
    };

    // Trigger autoplay after a brief delay
    setTimeout(handleAutoplay, 100);

    // Re-trigger when tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") handleAutoplay();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 sm:px-8 lg:px-12 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          EXPERT CAR REPAIR <br /> SERVICES <br /> CERTIFIED
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 mb-8">
          We offer top-quality auto repair services for all makes and models. Our certified technicians
          will get your vehicle back on the road quickly and safely.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-[#2E7BCF] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Book an Appointment
          </a>

          <a
            href="tel:+447581730734"
            className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 justify-center hover:bg-gray-700 transition w-full sm:w-auto"
          >
            <FaPhoneAlt /> +447581730734
          </a>

          <a
            href="tel:+447795528849"
            className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 justify-center hover:bg-gray-700 transition w-full sm:w-auto"
          >
            <FaPhoneAlt /> +447795528849
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
