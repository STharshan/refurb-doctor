import React, { useState } from "react";

const categories = [
    "All",
    "Mobile Repair",
    "Machine Polishing",
    "Alloy Wheel Repair",
    "Paintless Dent Removal",
    "Vandal Scratch Removal",
    "Accident Repair",
    "Car Park Damage Repair",
    "Full Respray",
];

const allItems = [
    {
        image: "/machine polishing-1.jpg",
        category: "Machine Polishing",
    },
    {
        image: "/machine polishing-2.jpg",
        category: "Machine Polishing",
    },
    {
        image: "/machine polishing-3.jpg",
        category: "Machine Polishing",
    },
    {
        image: "/machine polishing-4.jpg",
        category: "Machine Polishing",
    },
    {
        image: "/pdr3.jpg",
        category: "Paintless Dent Removal",
    },
    {
        image: "/pdr2.jpg",
        category: "Paintless Dent Removal",
    },
    {
        image: "/pdr5.jpg",
        category: "Paintless Dent Removal",
    },
    {
        image: "/pdr4.jpg",
        category: "Paintless Dent Removal",
    },
    {
        image: "/pdr1.jpg",
        category: "Paintless Dent Removal",
    },
    {
        image: "/pdr7.jpg",
        category: "Paintless Dent Removal",
    },
    {
        image: "/28.webp",
        category: "Full Respray",
    },
    {
        image: "/29.webp",
        category: "Full Respray",
    },
    {
        image: "/mobile.mp4", // Example video for Mobile Repair
        category: "Mobile Repair",
    },
    // Alloy Wheel Repair Video
    {
        image: "/Alloy.mp4", // Example video for Alloy Wheel Repair
        category: "Alloy Wheel Repair",
    },
        {
        image: "/Vandal.mp4", 
        category: "Vandal Scratch Removal",
    },
    {
        image: "/30.webp",
        category: "Full Respray",
    },
    {
        image: "/31.webp",
        category: "Full Respray",
    },
    {
        image: "/32.webp",
        category: "Full Respray",
    },
    {
        image: "/33.webp",
        category: "Full Respray",
    },
    {
        image: "/34.webp",
        category: "Full Respray",
    },
    {
        image: "/35.webp",
        category: "Full Respray",
    },
    {
        image: "/36.webp",
        category: "Full Respray",
    },
    {
        image: "/car park repair-1.jpg",
        category: "Car Park Damage Repair",
    },
    {
        image: "/car park repair-2.jpg",
        category: "Car Park Damage Repair",
    },
    {
        image: "/car park repair-3.jpg",
        category: "Car Park Damage Repair",
    },
    {
        image: "/car park repair-4.jpg",
        category: "Car Park Damage Repair",
    },
    {
        image: "/car park repair-5.jpg",
        category: "Car Park Damage Repair",
    },
    {
        image: "/car park repair-6.jpg",
        category: "Car Park Damage Repair",
    },
    {
        image: "/41.webp",
        category: "Accident Repair",
    },
    {
        image: "/42.webp",
        category: "Accident Repair",
    },
    {
        image: "/43.webp",
        category: "Accident Repair",
    },
    {
        image: "/44.webp",
        category: "Accident Repair",
    },
    {
        image: "/45.webp",
        category: "Accident Repair",
    },
    {
        image: "/46.webp",
        category: "Accident Repair",
    },
    {
        image: "/47.webp",
        category: "Accident Repair",
    },
    {
        image: "/48.webp",
        category: "Accident Repair",
    },
];

const OurGallery = () => {
    const [selected, setSelected] = useState("All");

    // Filter the items based on the selected category
    const filtered =
        selected === "All"
            ? allItems
            : allItems.filter((item) => item.category === selected);

    return (
        <section className="w-full text-white py-16 px-6">
            {/* Title */}
            <div className="text-center mt-20 mb-10">
                <h2 className="text-4xl text-gray-800 font-bold">Our Gallery</h2>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-5xl mx-auto">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelected(cat)}
                        className={`px-4 py-2 rounded-3xl font-medium transition duration-300 ease-in-out ${selected === cat
                                ? "bg-[#2E7BCF] text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-400 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto cursor-pointer">
                {filtered.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#0e1b0e]/90 rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:shadow-2xl"
                    >
                        {item.category === "Mobile Repair" || item.category === "Alloy Wheel Repair" || item.category === "Vandal Scratch Removal" ? (
                            <video className="w-full h-64 object-cover" autoPlay muted loop>
                                <source src={item.image} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={item.image} alt="item" className="w-full h-64 object-cover" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurGallery;
