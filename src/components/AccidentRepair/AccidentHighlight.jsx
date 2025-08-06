import React from 'react';

const highlights = [
  {
    number: 1,
    title: "Highly Skilled Technicians",
    description:
      "Our team has extensive training and years of hands-on experience in collision repair, ensuring your vehicle is repaired safely and efficiently.",
  },
  {
    number: 2,
    title: "State-of-the-Art Technology",
    description:
      "We utilize computerized frame alignment, digital damage assessments, and high-precision paint systems for consistent, high-quality results.",
  },
  {
    number: 3,
    title: "Insurance Assistance",
    description:
      "We work with all major insurance providers and help manage your claim from start to finish, reducing paperwork and processing time.",
  },
  {
    number: 4,
    title: "Fast Turnaround",
    description:
      "We prioritize getting your vehicle back to you quickly—without cutting corners—so you can return to your daily routine with peace of mind.",
  },
  {
    number: 5,
    title: "Transparent Pricing",
    description:
      "No hidden charges. You'll receive a clear breakdown of all costs and services before any work begins.",
  },
  {
    number: 6,
    title: "Warranty on All Repairs",
    description:
      "All work is covered by a full warranty, giving you confidence in the durability and quality of our repairs.",
  },
];

const AccidentHighlightsSection = () => {
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
          <p className="text-2xl font-bold max-w-4xl text-[#2E7BCF] mb-4">
           Accidents are unpredictable—but quality repairs shouldn't be. Let us handle the repairs with speed, precision, and professionalism. Contact us now to book an assessment or request assistance with your insurance claim.?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#2E7BCF] hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded-full transition"
          >
            Book Your Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccidentHighlightsSection;
