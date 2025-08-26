import React from "react";

const steps = [
  {
    title: "Common Types of Car Park Damage",
    description: (
      <ul className="list-inside list-disc font-semibold">
        <li>Dents & Dings – Caused by other car doors, trolleys, or low-speed bumps.</li>
        <li>Scratches – From keys, rough walls, or careless trolley movement.</li>
        <li>Bumper Scuffs – Often happen during reversing or misjudged parking.</li>
        <li>Mirror & Panel Damage – Due to tight spaces and vehicles parked too closely.</li>
      </ul>
    ),
  },
  {
    title: "How Car Park Damage Happens",
    description: (
      <ul className="list-inside list-disc font-semibold">
        <li>Narrow or poorly marked bays</li>
        <li>Busy and congested car parks</li>
        <li>Distracted or rushed drivers</li>
        <li>Poor lighting or low visibility</li>
        <li>Shopping trolleys and pedestrian movement around vehicles</li>
      </ul>
    ),
  },
  {
    title: "The Hidden Costs of Damage",
    description: (
      <ul className="list-inside list-disc font-semibold">
        <li>Reduced resale or trade-in value</li>
        <li>Increased insurance premiums from repeated claims</li>
        <li>Long-term damage such as rust or corrosion if repairs are delayed</li>
      </ul>
    ),
  },
  {
    title: "The Impact on Vehicle Owners",
    description: (
      <ul className="list-inside list-disc font-semibold">
        <li>Cosmetic Appearance – Cars look older and less cared for.</li>
        <li>Financial Impact – Repair costs can add up, especially if ignored.</li>
        <li>Inconvenience – Time spent arranging repairs or dealing with insurance claims.</li>
      </ul>
    ),
  },
  {
    title: "How to Prevent Car Park Damage",
    description: (
      <ul className="list-inside list-disc font-semibold">
        <li>Park away from entrances and congested areas</li>
        <li>Choose wider or quieter spaces where possible</li>
        <li>Fold in wing mirrors in tight bays</li>
        <li>Avoid parking next to poorly parked or damaged vehicles</li>
        <li>Be cautious with doors and trolleys around other cars</li>
      </ul>
    ),
  },
  {
    title: "Repair & Restoration Solutions",
    description: (
      <ul className="list-inside list-disc font-semibold">
        <li>Paintless Dent Removal (PDR) – Removes dents without respraying.</li>
        <li>Scratch & Scuff Repairs – Localised fixes for panels and bumpers.</li>
        <li>Smart Repairs – Target only the damaged area for cost-effective results.</li>
      </ul>
    ),
  },
];

const CarPartOverview = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
      <h2 className="text-2xl font-bold text-[#2E7BCF]">Overview</h2>
      <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
        Car park damage refers to the dents, scratches, scuffs, and other cosmetic or structural issues that occur while a vehicle is parked or maneuvering in a car park. With tight spaces, high traffic, and limited visibility, car parks are one of the most common places for minor vehicle damage.
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
              <div>{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarPartOverview;
