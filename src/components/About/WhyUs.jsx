import React from "react";
import { FiUser } from "react-icons/fi";
import { PiMedalLight, PiWrench } from "react-icons/pi";

const features = [
    {
        title: "CERTIFIED EXPERTISE",
        description:
            "Our team of certified technicians brings years of experience in professional car refurbishment, ensuring your vehicle gets the highest quality care.",
        icon: <PiMedalLight className="text-6xl text-[#2E7BCF] mb-4" />,
    },
    {
        title: "CUSTOMER SATISFACTION",
        description:
            "We prioritize our clients’ needs and deliver exceptional service, making sure every refurbishment project exceeds expectations.",
        icon: <FiUser className="text-6xl text-[#2E7BCF] mb-4" />,
    },
    {
        title: "QUALITY RESTORATION",
        description:
            "Using state-of-the-art equipment and premium materials, we restore your vehicle to its former glory with meticulous attention to detail.",
        icon: <PiWrench className="text-6xl text-[#2E7BCF] mb-4" />,
    },
];

const WhyUs = () => {
    return (
        <section className="bg-gray-50 py-18 px-4">
            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
                    >
                        <div className="ml-35">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-80 mx-auto font-semibold">{feature.description}</p>
                        <div className="mb-5">
                            <a
                                href="/contact"
                                className="bg-[#2E7BCF] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                            >
                                CONTACT US
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;
