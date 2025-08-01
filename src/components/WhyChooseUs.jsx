import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { PiMedalLight, PiWrench } from "react-icons/pi";

const tabs = [
    {
        key: "history",
        label: "OUR HISTORY",
        icon: <FiUser />,
        title: "DELIVERING EXCELLENCE IN CAR REPAIR AND REFURBISHMENT",
        description:
            "Choose Refurb Doctor for our proven track record of quality service, competitive pricing, and customer-focused approach. We bring professional expertise directly to your doorstep.",
        points: [
            "Flexible mobile repair services",
            "Competitive and transparent pricing",
            "High-quality materials and workmanship",
            "Efficient and timely service delivery",
        ],
        image: "/car.avif",
    },
    {
        key: "who",
        label: "WHO WE ARE",
        icon: <PiMedalLight />,
        title: "YOUR TRUSTED PARTNER IN PROFESSIONAL CAR REPAIR AND REFURBISHMENT",
        description:
            "Refurb Doctor is a team of experienced and certified technicians dedicated to providing exceptional car repair services. We combine expertise with convenience to deliver outstanding results.",
        points: [
            "Experienced and certified technicians",
            "Mobile repair service availability",
            "Advanced repair techniques and tools",
            "Customer satisfaction-focused approach",
        ],
        image: "/car.avif",
    },
    {
        key: "offer",
        label: "WE OFFER",
        icon: <PiWrench />,
        title: "PROFESSIONAL CAR REPAIR AND REFURBISHMENT SERVICES WITH QUALITY GUARANTEE",
        description:
            "At Refurb Doctor, we specialise in comprehensive car repair and refurbishment services. Our commitment to excellence ensures your vehicle receives the finest possible care with lasting results.",
        points: [
            "Expert mobile repair services at your location",
            "High-quality materials and professional tools",
            "Competitive and transparent pricing",
            "Swift and efficient service delivery",
        ],
        image: "/car.avif",
    },
];

const WhyChooseUs = () => {
    const [activeTab, setActiveTab] = useState("history");
    const current = tabs.find((tab) => tab.key === activeTab);

    return (
        <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#eaf5ff_100%)] py-16 px-4 md:px-10">
            <div className="text-center mb-12">
                <h4 className="text-sm font-bold uppercase mb-5">Why Choose</h4>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E7BCF] uppercase">
                    Why Choose Us?
                </h2>
                <p className="mt-4 max-w-4xl mx-auto text-gray-700 font-semibold text-base md:text-lg">
                    At Refurb Doctor, we take pride in delivering exceptional motor vehicle repair and refurbishment
                    services. Our team of skilled technicians combines expertise with convenience to ensure your
                    vehicle receives the highest quality care and attention it deserves.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Left Tabs */}
                <div className="bg-white">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <div
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`cursor-pointer flex items-center gap-4 p-6 border-t first:border-t-0 transition-all duration-200 ${isActive ? "bg-blue-50 border-l-4 border-[#2E7BCF]" : ""
                                    }`}
                            >
                                {/* Icon in circle */}
                                <div className="px-30 ">
                                    <div
                                        className={`flex items-center ml-5 justify-center w-13 h-13 rounded-full text-3xl ${isActive ? "bg-[#2E7BCF] text-white" : " text-gray-600"
                                            }`}
                                    >
                                        {tab.icon}
                                    </div>

                                    {/* Label */}
                                    <div>
                                        <h4 className={`font-bold ${isActive ? "text-[#2E7BCF]" : "text-gray-800"}`}>
                                            {tab.label}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Center Content */}
                <div className="p-6 md:p-8 md:col-span-1">
                    <h4 className="text-[#2E7BCF] text-xl font-bold mb-4">{current.label}</h4>
                    <h3 className="text-xl font-bold mb-4">{current.title}</h3>
                    <p className="text-gray-700 font-semibold mb-4">{current.description}</p>
                    <ul className="list-disc pl-5 font-semibold text-gray-700 space-y-3">
                        {current.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="p-4 md:p-6 ">
                    <img
                        src={current.image}
                        alt={current.label}
                        className="w-full h-80 mt-5 rounded-md shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
