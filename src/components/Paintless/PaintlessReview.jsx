import React from "react";

const steps = [
    {
        title: "Thorough Inspection",
        description:
            "We evaluate the size, depth, and location of the dent to confirm it qualifies for PDR. Many dents are eligible—even if they appear severe.",
    },
    {
        title: "Accurate Quotation",
        description:
            "Once the inspection is complete, we provide a clear, detailed quote with no hidden fees, outlining the work and expected timeline.",
    },
    {
        title: "Panel Access & Preparation",
        description:
            "To reach the dent, we carefully remove necessary interior panels or trims, ensuring we don't disturb other components.",
    },
    {
        title: "Precision Dent Removal",
        description:
            "Our technician uses specialized tools to massage and reshape the metal from the back of the panel until the dent is fully removed.",
    },
    {
        title: "Final Surface Check",
        description:
            "We inspect the repaired area under various lighting angles to confirm the panel is smooth, clean, and undetectable.",
    },
    {
        title: "Customer Review & Aftercare Advice",
        description:
            "You'll be shown the completed repair and given tips to avoid future dents and protect your car's finish.",
    },
];

const PaintlessOverview = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
            <h2 className="text-2xl  font-bold text-[#2E7BCF]">Overview</h2>
            <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Small dents and dings are a common part of owning a car—whether caused by hail, stray shopping carts, or tight parking spaces. Our Paintless Dent Removal (PDR) service offers a fast, affordable, and non-invasive solution that preserves your vehicle's original factory paint.
            </p>
            <p className="mt-4 text-lg font-semibold max-w-6xl mx-auto mb-5">
                PDR reshapes the metal from behind the panel without using fillers, sanding, or repainting. This not only saves time and money but also helps maintain your car's resale value and factory finish. Our certified technicians use specialized tools to carefully restore your car's surface to like-new condition—without leaving a trace of the original damage.
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

export default PaintlessOverview;
