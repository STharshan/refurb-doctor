import React from "react";

const steps = [
    {
        title: "Initial Assessment",
        description:
            "We begin with a comprehensive inspection of your vehicle to evaluate the condition of the current paintwork and discuss your desired outcome.",
    },
    {
        title: "Quotation & Consultation",
        description:
            "You'll receive a detailed, transparent quote outlining the scope of work, materials used, timeframe, and cost breakdown. We'll also consult with you on colour options and finishes.",
    },
    {
        title: "Surface Preparation",
        description:
            "This includes stripping old paint if necessary, sanding, treating rust or dents, applying primer, and masking non-painted areas for protection.",
    },
    {
        title: "Painting & Finishing",
        description:
            "Using a dust-free spray booth and high-precision equipment, we apply multiple layers of paint and clear coat to achieve a high-gloss, factory-grade finish.",
    },
    {
        title: "Curing & Polishing",
        description:
            "The freshly painted vehicle is cured in a temperature-controlled environment, then finished and buffed to ensure a stunning, smooth finish.",
    },
    {
        title: "Final Inspection & Delivery",
        description:
            "Before handing your car back, we conduct a rigorous quality check to ensure every detail meets our high standards. We include care tips to help maintain your car’s new look.",
    },
];

const MobileOverview = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
            <h2 className="text-2xl  font-bold text-[#2E7BCF]">Overview</h2>
            <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Transform your vehicle with our Full Respray – For a Fresh Look service, designed to restore or reinvent your car’s appearance with precision and style. Whether you’re rejuvenating a faded finish, repairing weathered paint, or opting for a bold new colour, our expert team ensures a factory-quality finish that turns heads on the road.
            </p>
            <p className="mt-4 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Our highly skilled painters combine years of experience with advanced techniques and premium-grade automotive paints to deliver exceptional, long-lasting results. From luxury cars to everyday vehicles, we treat every respray project with meticulous attention to detail.
            </p>
            <p className="mt-4 text-lg font-semibold mb-15  max-w-6xl mx-auto">
                Whether your goal is to maintain your car’s resale value, correct imperfections, or simply express your personal style, our full respray service offers a tailored solution that makes your vehicle look brand new again.
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

export default MobileOverview;
