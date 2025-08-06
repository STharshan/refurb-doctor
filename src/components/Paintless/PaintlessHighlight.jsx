import React from 'react';

const highlights = [
  {
    number: 1,
    title: "Certified PDR Technicians",
    description:
      "Our team is professionally trained in advanced paintless dent removal techniques, with expertise across various car brands and models.",
  },
  {
    number: 2,
    title: "No Paint, No Filler",
    description:
      "We gently massage the dent out from the back of the panel using specialized tools—no sanding or repainting required.",
  },
  {
    number: 3,
    title: "Preserves Factory Finish",
    description:
      "Because PDR doesn't disturb the paintwork, your car retains its original color, texture, and manufacturer coating.",
  },
  {
    number: 4,
    title: "Quick Turnaround",
    description:
      "Most dent removals can be completed in just a few hours, so your car is back on the road the same day.",
  },
  {
    number: 5,
    title: "Cost-Effective",
    description:
      "PDR is more affordable than traditional body repair because it avoids costly parts, materials, and extended labor.",
  },
  {
    number: 6,
    title: "Guaranteed Work",
    description:
      "We provide upfront quotes with no hidden fees, and all services come with a satisfaction guarantee and warranty.",
  },
];

const PaintlessHighlightsSection = () => {
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
            Don't let minor dents take away from your car's value and appearance. Get expert, paint-free dent removal with fast results and no hassle. Book your free inspection today!?
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

export default PaintlessHighlightsSection;
