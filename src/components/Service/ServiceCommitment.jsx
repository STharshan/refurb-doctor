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

const ServiceCommitment = () => {
    const [activeTab, setActiveTab] = useState("management");

    const current = tabs.find((t) => t.key === activeTab);

    const onContact = () => {

    }

    return (
        <section className="bg-white">
            {/* Section 1: Call to Action */}
            <div className="bg-[#2E7BCF] text-white py-12 px-6 rounded-xl text-center max-w-7xl mx-auto mb-20 mt-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book a Service?</h2>
                <p className="max-w-xl mx-auto mb-6">
                    Contact us today to schedule an appointment for any of our services. Our team is ready to assist you with all your automotive needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="tel:+447795528849"
                        className="bg-white text-[#2E7BCF] font-semibold px-7 py-3 rounded-lg shadow flex items-center justify-center gap-2"
                    >
                        <FaPhoneAlt /> +447795528849
                    </a>
                    <a href="/#contact"  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                        Contact Us <FaArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServiceCommitment;
