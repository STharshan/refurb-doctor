import React from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    number: 1,
    title: "Expert Specialists",
    description:
      "Our technicians are skilled in machine polishing and paint restoration for all types of paint finishes.",
  },
  {
    number: 2,
    title: "Premium Products",
    description:
      "We use professional-grade dual-action polishers, microfiber pads, and cutting compounds for a flawless finish.",
  },
  {
    number: 3,
    title: "Multi-Stage Polishing",
    description:
      "From enhancement to full correction, we tailor our polishing process to your car's unique needs.",
  },
  {
    number: 4,
    title: "Fast Turnaround",
    description:
      "Most polishing jobs are completed within 1–2 days, depending on the level of correction required.",
  },
  {
    number: 5,
    title: "Transparent Pricing",
    description:
      "You'll get clear pricing based on your car's condition, with no surprise charges.",
  },
  {
    number: 6,
    title: "Satisfaction Guarantee",
    description:
      "Our workmanship is guaranteed, and we ensure every vehicle leaves with a finish that impresses.",
  },
];

const MachineHighlightsSection = () => {
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
            Give your car the care it deserves. Book our professional machine polishing service today and restore that brilliant shine your vehicle was meant to have.?
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

export default MachineHighlightsSection;
