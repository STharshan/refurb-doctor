import React from "react";

const steps = [
    {
        title: "Initial Assessment & Damage Report",
        description:
            "Our team performs a detailed inspection of your vehicle to determine visible and underlying damage. We use advanced diagnostic tools to identify frame, suspension, or mechanical issues that might not be visible to the naked eye.",
    },
    {
        title: "Accurate Quotation & Insurance Coordination",
        description:
            "You'll receive a clear, itemized repair estimate. If you're filing an insurance claim, we handle communication with your insurer and provide the necessary documentation, photos, and repair reports.",
    },
    {
        title: "Structural & Mechanical Repairs",
        description:
            "For more severe damage, we conduct professional frame straightening, suspension alignment, and any mechanical component repairs to ensure your vehicle meets safety standards.",
    },
    {
        title: "Bodywork & Refinishing",
        description:
            "Dents, scratches, and panel damage are repaired using precision tools. We then prep the surfaces and apply a high-quality paint finish that perfectly matches your vehicle's original colour and texture.",
    },
    {
        title: "Final Quality Control Check",
        description:
            "Every vehicle undergoes a rigorous multi-point inspection, including safety tests, fit-and-finish assessments, and a road test to verify everything works flawlessly.",
    },
    {
        title: "Vehicle Handover & Follow-up",
        description:
            "Once your car is ready, we walk you through the work completed, offer aftercare advice, and remain available for any questions or follow-up support.",
    },
];

const AccidentOverview = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-left text-gray-800">
            <h2 className="text-2xl  font-bold text-[#2E7BCF]">Overview</h2>
            <p className="mt-2 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Accidents are stressful, but repairing your vehicle doesn't have to be. Whether you've experienced a light bump, a serious collision, or damage from unforeseen circumstances, our Accident Repair – Fast, Reliable, and Professional service is here to support you every step of the way. We specialise in restoring your vehicle to its pre-accident condition, both mechanically and aesthetically—without compromising on safety or quality.
            </p>
            <p className="mt-4 text-lg font-semibold max-w-6xl mx-auto mb-5">
                Our expert technicians use advanced diagnostic tools, industry-leading repair techniques, and manufacturer-approved components to ensure that every repair is completed with the highest standards of precision. From minor bodywork and dent removal to full frame straightening and paint refinishing, your vehicle is in capable hands.
            </p>
            <p className="mt-4 text-lg font-semibold mb-15  max-w-6xl mx-auto">
                We also liaise directly with insurance companies, streamlining the claims process and reducing your stress so you can focus on what matters most—getting back on the road.
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

export default AccidentOverview;
