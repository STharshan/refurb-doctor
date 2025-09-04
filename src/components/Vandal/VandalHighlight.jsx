import React from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    number: 1,
    title: "Highly Trained Professionals",
    description:
      "Our technicians specialise in paint restoration and are equipped with the expertise to handle everything from light surface scratches to deeper abrasions caused by keys, sharp objects, or deliberate markings.",
  },
  {
    number: 2,
    title: "Cutting-Edge Tools",
    description:
      "We use advanced polishers, micro-abrasive compounds, and nano-tech scratch removal systems for flawless results.",
  },
  {
    number: 3,
    title: "Paint-Safe Techniques",
    description:
      "We prioritize methods that preserve your vehicle's original finish, including paint blending, localized touch-ups, and clear coat refinishing.",
  },
  {
    number: 4,
    title: "Fast Service",
    description:
      "Most scratch removal jobs can be completed within a day, so you can get back on the road quickly—with a car that looks brand new.",
  },
  {
    number: 5,
    title: "Transparent Pricing",
    description:
      "You'll receive a full breakdown of services and pricing before any work begins—no surprises, no inflated costs.",
  },
  {
    number: 6,
    title: "Warranty-Backed Workmanship",
    description:
      "All our scratch removal services are backed by a service guarantee to ensure quality and durability.",
  },
];

const VandalHighlightsSection = () => {
  return (
    <section className="bg-white px-4 py-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#2E7BCF] inline-block mb-8">
          Highlights
          <p className='border-b-4 w-16 mt-2 rounded-2xl border-[#2E7BCF]'></p>
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="bg-white p-5 shadow-sm rounded-md flex items-start gap-4 mb-10 relative transition duration-300 ease-in-out hover:scale-105 hover:z-10"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2E7BCF] text-white font-bold text-lg shrink-0">
                {item.number}
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#2E7BCF] mb-1">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold max-w-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-100 p-6 mt-12 rounded-md text-left mb-10">
          <h3 className="text-[#2E7BCF] font-bold text-2xl mb-5">
            Don't let vandalism ruin your car's appearance. Let our experts restore your vehicle's flawless finish with efficient and affordable scratch removal. Book your appointment today and drive with pride.?
          </h3>
          <Link
            to="/#contact"  // Use the Link component with the anchor to scroll
            className="inline-block bg-[#2E7BCF] hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded-full transition"
          >
            Book Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VandalHighlightsSection;
