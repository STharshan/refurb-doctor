import React from 'react';

const highlights = [
  {
    number: 1,
    title: "Experienced Specialists",
    description:
      "Our team is trained to repair all kinds of alloy wheel damage—from minor scratches to deep curb rash and corrosion.",
  },
  {
    number: 2,
    title: "High-Quality Materials",
    description:
      "We use top-tier fillers, paints, and clear coats to ensure a durable, factory-quality result every time.",
  },
  {
    number: 3,
    title: "Diamond Cut Services",
    description:
      "For high-end wheels, we offer diamond cut refinishing and precise colour matching to maintain your original look.",
  },
  {
    number: 4,
    title: "Fast Turnaround",
    description:
      "Most repairs are completed within 24–48 hours, and minor fixes may be done the same day.",
  },
  {
    number: 5,
    title: "Affordable Pricing",
    description:
      "You'll receive a detailed quote upfront with no hidden costs—just honest, affordable service.",
  },
  {
    number: 6,
    title: "Warranty",
    description:
      "All wheel repairs are backed by a workmanship guarantee, ensuring confidence and satisfaction with every job.",
  },
];

const AllowWheelHighlightsSection = () => {
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
            Don't let scuffed or damaged wheels ruin your car's appearance. Book your alloy wheel repair with us today and enjoy restored style, performance, and peace of mind.?
          </h3>
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

export default AllowWheelHighlightsSection;
