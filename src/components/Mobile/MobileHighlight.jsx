import React from 'react';

const highlights = [
  {
    number: 1,
    title: "Certified Technicians",
    description:
      "Our team consists of trained professionals with extensive experience in full vehicle resprays, paint matching, and finish perfection.",
  },
  {
    number: 2,
    title: "Premium Materials & Equipment",
    description:
      "We use only the highest quality automotive paints, primers, and clear coats from trusted brands to ensure durability and a flawless finish.",
  },
  {
    number: 3,
    title: "Comprehensive Preparation",
    description:
      "Every respray begins with a detailed surface prep, including sanding, priming, and masking, to guarantee smooth and even paint application.",
  },
  {
    number: 4,
    title: "Colour Matching Expertise",
    description:
      "Want to keep your original colour? We offer precise colour matching. Want a new hue? Choose from a wide selection of custom shades and finishes.",
  },
  {
    number: 5,
    title: "Fast Turnaround Time",
    description:
      "We value your time and strive to complete your respray efficiently without compromising on quality.",
  },
  {
    number: 6,
    title: "Transparent Pricing",
    description:
      "Our competitive pricing comes with no hidden fees—just honest quotes and outstanding results.",
  },
  {
    number: 7,
    title: "Warranty-Backed Workmanship",
    description:
      "Enjoy peace of mind with our satisfaction guarantee and warranty on all respray work.",
  },
];

const MobileHighlightsSection = () => {
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
          <h3 className="text-blue-800 font-bold text-2xl mb-5">
            Ready to give your vehicle a fresh start?
          </h3>
          <p className="text-lg font-semibold max-w-3xl mb-4">
            Contact us today to schedule your free assessment and see how our
            full respray service can breathe new life into your car.
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

export default MobileHighlightsSection;
