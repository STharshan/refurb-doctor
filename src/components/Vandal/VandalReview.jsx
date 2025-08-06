import React from "react";

const steps = [
    {
        title: "Comprehensive Assessment",
        description:
            "We carefully inspect your car to determine the depth and severity of the scratches. This allows us to recommend the most effective solution—whether it's paint correction, buffing, or spot repair.",
    },
    {
        title: "Detailed Quote and Consultation",
        description:
            "You'll receive a clear, no-obligation quote. Our team will explain the recommended procedure and answer any questions you have.",
    },
    {
        title: "Surface Preparation",
        description:
            "The affected area is cleaned and decontaminated to remove dirt, wax, or debris. This ensures a smooth surface for accurate repair.",
    },
    {
        title: "Precision Scratch Removal",
        description:
            "Using professional-grade tools and compounds, we polish and blend the damaged area. If needed, we apply a clear coat or localized paint touch-up to ensure the finish looks consistent with the rest of the vehicle.",
    },
    {
        title: "Buffing and Final Finishing",
        description:
            "The area is polished and sealed to protect the finish and enhance shine. The end result is a seamless restoration where the scratch is virtually invisible.",
    },
    {
        title: "Final Inspection and Care Advice",
        description:
            "Before handing the vehicle back, we perform a thorough quality check and provide maintenance tips to protect your car from future damage.",
    },
];

const VandalOverview = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
            <h2 className="text-2xl  font-bold text-[#2E7BCF]">Overview</h2>
            <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Vandalism—especially in the form of scratches, scuffs, and etched graffiti—can leave your car looking damaged and neglected. Our Vandal Scratch Removal – Efficient Restoration service is designed to reverse that damage quickly, professionally, and with care. Whether it's a single deep gouge or multiple surface-level scratches, we restore your vehicle's appearance with seamless precision.
            </p>
            <p className="mt-4 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Using the latest paint correction technology and non-invasive techniques, our skilled technicians are able to remove or significantly reduce the visibility of vandal scratches without compromising the original factory paint whenever possible. Our goal is simple: restore your car's flawless finish, protect its value, and give you back your peace of mind.
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

export default VandalOverview;
