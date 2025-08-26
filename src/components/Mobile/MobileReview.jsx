import React from "react";

const steps = [
  {
    title: "Common Types of Damage We Repair",
    description: [
      "Dents & Dings – From car parks, trolleys, or minor bumps.",
      "Scratches & Scuffs – Restoring paintwork and bumper finishes.",
      "Panel & Mirror Damage – Quick, localised repairs without replacing parts.",
      "Everyday Wear & Tear – Keeping vehicles looking their best.",
    ],
  },
  {
    title: "How Mobile Repairs Work",
    description: [
      "Our certified technicians come fully equipped to carry out professional repairs on-site.",
      "Using specialist tools and techniques, we provide the same high-quality results you’d expect from a body shop — without the hassle of leaving your car.",
    ],
  },
  {
    title: "The Hidden Costs of Ignoring Damage",
    description: [
      "Rust and corrosion",
      "Increased repair costs later",
      "Reduced resale or trade-in value",
      "Cars looking older and poorly maintained",
    ],
  },
  {
    title: "Why Vehicle Owners Choose Us",
    description: [
      "Trusted by Certified Dealers – We work with leading dealerships across the Midlands.",
      "Convenience – Repairs carried out at your home, workplace, or chosen location.",
      "Expert Technicians – Skilled in dealing with bumps, scratches, and dents.",
      "Proven Reputation – Known and trusted throughout the Midlands.",
    ],
  },
  {
    title: "How to Prevent Everyday Damage",
    description: [
      "Park in wider spaces when available",
      "Avoid parking too close to high-traffic areas",
      "Be cautious with trolleys and doors in car parks",
      "Regularly inspect your car for early signs of damage",
    ],
  },
  {
    title: "Repair & Restoration Solutions at Your Doorstep",
    description: [
      "Paintless Dent Removal (PDR) – Effective for dents without paint damage.",
      "Scratch & Scuff Repairs – Targeted solutions for panels and bumpers.",
      "Smart Repairs – Cost-effective methods to restore your car’s look.",
      "Mobile Convenience – High-quality repairs delivered wherever you are.",
    ],
  },
];

const MobileOverview = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
      <h2 className="text-2xl font-bold text-[#2E7BCF]">Overview</h2>
      <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
        Mobile vehicle repair is a convenient service that brings expert technicians directly to your doorstep to fix everyday car damage. Instead of visiting a body shop, customers can have dents, scratches, and bumper scuffs repaired at home, work, or wherever is most convenient.
      </p>

      {/* Process Section */}
      <div className="mt-10 bg-[#2E7BCF] rounded-lg p-6 sm:p-10 text-left">
        <h3 className="text-2xl font-bold text-white border-b-4 border-white inline-block mb-6">
          Our Process
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#5299e6] text-white p-6 rounded shadow-sm transform transition duration-400 ease-in-out hover:scale-105 hover:z-5 relative"
            >
              <h4 className="font-bold text-xl mb-2">{step.title}</h4>
              <ul className="font-semibold list-inside list-disc space-y-2">
                {step.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileOverview;
