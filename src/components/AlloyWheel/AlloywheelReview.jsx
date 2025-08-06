import React from "react";

const steps = [
    {
        title: "Initial Assessment",
        description:
            "We examine each wheel for signs of curb damage, corrosion, cracks, or bends to determine if repair or full refurbishment is required.",
    },
    {
        title: "Detailed Quotation",
        description:
            "You'll receive a clear quote outlining all necessary services—whether it's a basic cosmetic repair or full diamond cut refurbishment.",
    },
    {
        title: "Wheel Preparation",
        description:
            "Wheels are thoroughly cleaned and prepped. Any dents or gouges are filled, and the surface is sanded to a smooth finish.",
    },
    {
        title: "Precision Repair",
        description:
            "We use advanced techniques like welding, sanding, and lathe-cutting to restore both the strength and appearance of your wheels.",
    },
    {
        title: "Painting and Sealing",
        description:
            "If needed, we apply a colour-matched paint followed by a durable lacquer to protect your wheels from the elements and wear.",
    },
    {
        title: "Final Quality Check",
        description:
            "Each wheel undergoes a thorough inspection to ensure a flawless finish and structural safety before your car is returned.",
    },
];

const AllowWheelOverview = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
            <h2 className="text-2xl  font-bold text-[#2E7BCF]">Overview</h2>
            <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Your alloy wheels aren't just functional—they're a key part of your car's style and road presence. Scratches, scuffs, curb damage, or corrosion can take away from your car's appearance and even affect performance over time. Our Alloy Wheel Repair service restores your wheels to pristine, showroom-quality condition.
            </p>
            <p className="mt-4 text-lg font-semibold max-w-6xl mx-auto mb-5">
                From cosmetic touch-ups to full refurbishments, our technicians use advanced techniques, colour-matching technology, and premium finishes to ensure your wheels look brand new—without compromising structural integrity. Whether you're upgrading your car's appearance or preparing it for sale, we guarantee long-lasting, flawless results.
            </p>

            {/* Process Section */}
            <div className="mt-10 bg-[#2E7BCF] rounded-lg p-6 sm:p-10 text-left">
                <h3 className="text-2xl font-bold text-white border-b-4  border-white inline-block mb-6">
                    Our Process
                </h3>

                <div className="grid gap-6 sm:grid-cols-2">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#5299e6] text-white p-6 rounded shadow-sm transform transition duration-400 ease-in-out hover:scale-105 hover:z-5 relative"
                        >
                            <h4 className="font-bold text-xl mb-2">
                                {step.title}
                            </h4>
                            <p className="font-semibold">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllowWheelOverview;
