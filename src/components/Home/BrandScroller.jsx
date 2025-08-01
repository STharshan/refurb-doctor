// src/components/BrandScroller.jsx
import React from "react";

const logos = [
  "/Mazda.webp",
  "/Kia.webp",
  "/Citroen.webp",
  "/Peugeot.webp",
  "/Ford.webp",
  "/Mercedes.webp"
];

const BrandScroller = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2E7BCF]">We Provide the Best Services</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto text-lg font-semibold">
          Trusted by leading dealerships in the Midlands for our reliability, professionalism, and
          top-tier workmanship.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll w-[200%] gap-30">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`brand-${index}`}
              className="h-16 md:h-20 mx-8 grayscale hover:grayscale-0 transition duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
