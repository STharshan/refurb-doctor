import React, { useState } from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const tabs = [
    {
        key: "management",
        label: "MANAGEMENT AND SUPERVISION",
        content:
            "Our experienced management team oversees every aspect of our operations to ensure quality service delivery. We maintain strict supervision protocols to guarantee professional standards in all our automotive services.",
    },
    {
        key: "mechanic",
        label: "UNIFORMED, LICENSED MECHANIC",
        content:
            "Our licensed and uniformed mechanics deliver professional service on every visit. You can count on skilled and qualified experts who uphold the highest standards in car repair and maintenance.",
    },
];

const AboutCommitment = () => {
    const [activeTab, setActiveTab] = useState("management");

    const current = tabs.find((t) => t.key === activeTab);

    return (
        <section className="bg-white">
            {/* Section 2: Our Commitment */}
            <div className="bg-gray-100 py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
                    {/* Left Tabs */}
                    <div>
                        <h3 className="text-[#2E7BCF] text-4xl font-bold mb-4">OUR COMMITMENT</h3>
                        <div className="flex flex-col gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`text-left font-bold px-4 py-3 text-lg rounded-lg ${activeTab === tab.key
                                        ? "bg-[#2E7BCF] text-white"
                                        : "bg-gray-100 text-black"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <div className="bg-[#2E7BCF] text-white p-6 rounded-lg mb-6">
                            <h4 className="font-bold mb-2 text-lg">{current.label}</h4>
                            <p >{current.content}</p>
                        </div>
                        <p className="text-gray-700 font-semibold">
                            At Refurb Doctor, we are committed to delivering exceptional automotive care with unmatched expertise and professionalism. Our team of skilled technicians ensures that every vehicle receives the highest standard of service, making us your trusted partner in automotive restoration and repair.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCommitment;
