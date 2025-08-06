import React, { useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const images = [
    "/10.webp",
    "/11.webp",
    "/12.webp",
    "/13.webp",
];

const AllowWheelGallery = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1;
            }
        }, 0); // Speed of scroll
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-4 py-10 lg:px-20">
            <div className="max-w-6xl mx-auto text-left">
                {/* Header */}
                <div
                    onClick={() => navigate("/services")}
                    className="flex items-center gap-2 mb-6 text-[#2E7BCF] font-semibold text-lg cursor-pointer mt-20"
                >
                    <FaArrowLeft />
                    <span>Back</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#2E7BCF] mb-10">
                    Alloy Wheel Repair - <span className="font-normal text-gray-500 text-xl">Perfect Condition for Your Wheels</span>
                </h2>

                {/* Scrollable Images */}
                <div
                    ref={scrollRef}
                    className="mt-6 flex space-x-4 overflow-x-hidden no-scrollbar scroll-smooth max-w-250 -ml-1 mx-auto"
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`respray-${index}`}
                            className="h-60 md:h-72 w-80 rounded-md shrink-0 object-cover"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllowWheelGallery;
