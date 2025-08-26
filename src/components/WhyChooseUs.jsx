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
            "Refurb Doctor was founded in 2009 by Darren with a passion for delivering excellent service and a desire to offer customers a better, more convenient way to repair their vehicles. Starting with just a single repair van, Darren built the business on quality, trust, and a customer-first approach.",
        desc: "With Sean joining as a partner, the company modernised and expanded, growing into a family-based team with multiple mobile repair vans and two fully equipped workshops. Over the years, we’ve earned a trusted reputation across the Midlands, working with certified dealers and private customers alike.",
        points: [
            "Founded on quality service and customer care",
            "Grown from 1 van to multiple mobile repair units",
            "Now operating 2 fully equipped workshops",
            "Trusted by certified dealers and local customers across the Midlands",
        ],
        image: "/why.jpg",
    },
    {
        key: "who",
        label: "WHO WE ARE",
        icon: <PiMedalLight />,
        title: "YOUR TRUSTED PARTNER IN PROFESSIONAL CAR REPAIR AND REFURBISHMENT",
        description:
            "We’re a family-based team of skilled, certified technicians committed to delivering the highest standard of car repair and refurbishment services. Our reputation is built on trust, transparency, and consistently excellent results.",
        desc: "Working with certified dealers and private customers across the Midlands, we’re known for our customer-focused approach, professional workmanship, and the convenience of mobile service that fits around your schedule.",
        points: [
            "Family-run team with proven experience",
            "Trusted by certified dealers across the Midlands",
            "Customer-first approach with transparent pricing",
            "Professional results at your doorstep or in our workshops",
        ],
        image: "/why.jpg",
    },
    {
        key: "offer",
        label: "WE OFFER",
        icon: <PiWrench />,
        title: "PROFESSIONAL CAR REPAIR AND REFURBISHMENT SERVICES WITH QUALITY GUARANTEE",
        description:
            "At Refurb Doctor, we provide a complete range of car repair and refurbishment services — from fixing dents, scratches, and bumper scuffs to full panel and bodywork restoration. Whether you choose our mobile repair service or visit one of our fully equipped workshops, you’ll receive the same professional standard every time.",
        desc: "Our focus is on delivering outstanding results with minimal disruption to your day, combining expert craftsmanship with convenience and transparency.",
        points: [
            "Expert mobile repair services at your location",
            "Fully equipped workshops for larger repairs",
            "High-quality materials and professional workmanship",
            "Competitive and transparent pricing with no hidden costs",
            "Swift and efficient service delivery you can rely on",
        ],
        image: "/why.jpg",
    },
];

const WhyChooseUs = () => {
    const [activeTab, setActiveTab] = useState("history");
    const current = tabs.find((tab) => tab.key === activeTab);

    return (
        <section className="bg-gradient-to-b from-white to-[#eaf5ff] py-10 sm:py-16 px-2 sm:px-4 md:px-10">
            <div className="text-center mb-8 sm:mb-12">
                <h4 className="text-xs sm:text-sm font-bold uppercase mb-2 sm:mb-5 tracking-wider text-gray-600">Why Choose</h4>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#2E7BCF] uppercase">
                    Why Choose Us?
                </h2>
                <p className="mt-2 sm:mt-4 max-w-4xl mx-auto text-gray-700 font-semibold text-sm sm:text-base md:text-lg">
                    At Refurb Doctor, we take pride in delivering exceptional motor vehicle repair and refurbishment
                    services. Our team of skilled technicians combines expertise with convenience to ensure your
                    vehicle receives the highest quality care and attention it deserves.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:grid lg:grid-cols-3 gap-0 max-w-7xl mx-auto">
                {/* Left Tabs */}
                <div className="flex flex-row md:flex-col bg-white md:mt-40">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                type="button"
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex-1 md:flex-none flex items-center gap-2 md:gap-4 p-3 sm:p-6 border-b md:border-b-0 md:border-t first:border-t-0 transition-all duration-200
                                    ${isActive ? "bg-blue-50 md:border-l-4 border-[#2E7BCF]" : ""}
                                `}
                                style={{ outline: "none" }}
                            >
                                {/* Icon in circle */}
                                <span
                                    className={`flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full text-xl sm:text-2xl
                                        ${isActive ? "bg-[#2E7BCF] text-white" : "bg-gray-100 text-gray-600"}
                                    `}
                                >
                                    {tab.icon}
                                </span>
                                <span>
                                    <h4 className={`font-bold text-xs sm:text-sm md:text-base text-left ${isActive ? "text-[#2E7BCF]" : "text-gray-800"}`}>
                                        {tab.label}
                                    </h4>
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Center Content */}
                <div className="p-4 sm:p-6 md:p-8 md:col-span-1 flex flex-col justify-center">
                    <h4 className="text-[#2E7BCF] text-base sm:text-xl font-bold mb-2 sm:mb-4">{current.label}</h4>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{current.title}</h3>
                    <p className="text-gray-700 font-semibold mb-2 sm:mb-4">{current.description}</p>
                    <p className="text-gray-700 font-semibold mb-2 sm:mb-4">{current.desc}</p>
                    <ul className="list-disc pl-4 sm:pl-5 font-semibold text-gray-700 space-y-2 sm:space-y-3">
                        {current.points.map((point, index) => (
                            <li key={index} className="text-xs sm:text-base">{point}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="p-3 sm:p-6 flex items-center md:items-start justify-center">
                    <img
                        src={current.image}
                        alt={current.label}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-md shadow-md object-cover md:h-120 lg:mt-20 h-80"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;