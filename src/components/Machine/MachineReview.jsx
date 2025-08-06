import React from "react";

const steps = [
    {
        title: "Paintwork Assessment",
        description:
            "We inspect the paint surface for scratches, swirl marks, and oxidation to determine the most suitable polishing approach.",
    },
    {
        title: "Deep Cleaning",
        description:
            "A full wash and decontamination process removes dirt, tar, and embedded particles to prepare the surface for polishing.",
    },
    {
        title: "Masking and Preparation",
        description:
            "Sensitive areas like trims, badges, and edges are masked to protect them during the machine polishing process.",
    },
    {
        title: "Multi-Stage Polishing",
        description:
            "We use dual-action or rotary polishers to perform cutting, refining, and finishing stages to remove defects and enhance shine.",
    },
    {
        title: "Final Buff and Inspection",
        description:
            "We complete the service with an optional wax or ceramic coating and perform a final check to ensure optimal shine and clarity.",
    }
];

const MachineOverview = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
            <h2 className="text-2xl  font-bold text-[#2E7BCF]">Overview</h2>
            <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Exposure to sunlight, road debris, and environmental contaminants can leave your car's paint looking dull, scratched, and oxidized. Our Machine Polishing service is designed to bring back that deep gloss and flawless finish by removing swirl marks, light scratches, and oxidation. Using advanced polishing machines, cutting compounds, and protective finishes, we restore your car's paint to like-new condition without damaging the original paintwork.
            </p>
            <p className="mt-4 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Whether reviving an aging vehicle or preparing your car for sale, our expert detailing team delivers an even, high-gloss finish that truly stands out.
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

export default MachineOverview;
