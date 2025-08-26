import React, { useState } from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const tabs = [
    {
        key: "management",
        label: "Commitment to Quality",
        content:
            "We are dedicated to delivering the highest standard of repair and refurbishment, no matter the size of the job. From small cosmetic fixes to full panel restorations, our skilled technicians use only quality materials and proven techniques to ensure lasting results that you can trust.",
        content2 : "At Refurb Doctor, we pride ourselves on expert craftsmanship and attention to detail. Every repair is carried out with precision, ensuring your vehicle not only looks its best but is restored to a standard you’ll be proud of."    
    },
    {
        key: "mechanic",
        label: "Commitment to Convenience & Transparency",
        content:
            "We understand that car repairs can feel disruptive, which is why we’ve built our service around your convenience. Whether at your doorstep with our mobile repair vans or at one of our fully equipped workshops, we make the process simple, efficient, and stress-free.",
        content2: "At Refurb Doctor, we put our customers first by providing clear, competitive pricing with no hidden costs. You’ll always know exactly what to expect, giving you peace of mind while we take care of your vehicle."
    },
];

const Commitment = () => {
    const [activeTab, setActiveTab] = useState("management");

    const current = tabs.find((t) => t.key === activeTab);

    return (
        <section className="bg-white">
            {/* Section 1: Call to Action */}
            <div className="bg-[#2E7BCF] text-white py-12 px-6 rounded-xl text-center max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book a Service?</h2>
                <p className="max-w-xl mx-auto mb-6">
                    Contact us today to schedule an appointment for any of our services. Our team is ready to assist you with all your automotive needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/447795528849?text=Hello, I'm interested in your services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#2E7BCF] font-semibold px-8 py-3 rounded-lg shadow flex items-center justify-center gap-2"
                    >
                        <FaPhoneAlt /> +447581 730734
                    </a>
                    {/* Contact Us Button */}
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center gap-2"
                    >
                        Contact Us <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Section 2: Our Commitment */}
            <div className="bg-gray-100 py-16 px-4 md:px-10 mt-15">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Left Tabs */}
                    <div>
                        <h3 className="text-[#2E7BCF] text-4xl font-bold mb-4">OUR COMMITMENT</h3>
                        <div className="flex flex-col gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`text-left font-bold px-4 py-3 text-lg rounded ${activeTab === tab.key
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
                            <p className="font-semibold text-lg">{current.content}</p>
                            <p className="font-semibold text-lg mt-2">{current.content2}</p>
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

export default Commitment;
