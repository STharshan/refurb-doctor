import React, { useState } from 'react';

const categories = [
    "All",
    "Mobile Repair",
    "Machine Polishing",
    "Alloy Wheel Repair",
    "Paintless Dent Removal",
    "Vandak Scratch Removal",
    "Accident Repair",
    "Car Park Damage Repair",
    "Full Respray"
];

const allItems = [
    {
        image: "/1.webp",
        category: "Mobile Repair"
    },
    {
        image: "/2.webp",
        category: "Mobile Repair"
    },
    {
        image: "/3.webp",
        category: "Mobile Repair"
    },
    {
        image: "/4.webp",
        category: "Mobile Repair"
    },
    {
        image: "/5.webp",
        category: "Mobile Repair"
    },
    {
        image: "/machine polishing-1.jpg",
        category: "Machine Polishing"
    },
    {
        image: "/machine polishing-2.jpg",
        category: "Machine Polishing"
    },
    {
        image: "/machine polishing-3.jpg",
        category: "Machine Polishing"
    },
    {
        image: "/machine polishing-4.jpg",
        category: "Machine Polishing"
    },
    {
        image: "/10.webp",
        category: "Alloy Wheel Repair"
    },
    {
        image: "/11.webp",
        category: "Alloy Wheel Repair"
    },
    {
        image: "/12.webp",
        category: "Alloy Wheel Repair"
    },
    {
        image: "/13.webp",
        category: "Alloy Wheel Repair"
    },
    {
        image: "/14.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/6.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/16.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/17.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/18.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/19.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/20.webp",
        category: "Paintless Dent Removal"
    },
    {
        image: "/21.webp",
        category: "Vandak Scratch Removal"
    },
    {
        image: "/22.webp",
        category: "Vandak Scratch Removal"
    },
    {
        image: "/23.webp",
        category: "Vandak Scratch Removal"
    },
    {
        image: "/24.webp",
        category: "Vandak Scratch Removal"
    },
    {
        image: "/25.webp",
        category: "Vandak Scratch Removal"
    },
    {
        image: "/26.webp",
        category: "Vandak Scratch Removal"
    },
    {
        image: "/27.webp",
        category: "Full Respray"
    },
    {
        image: "/28.webp",
        category: "Full Respray"
    },
    {
        image: "/29.webp",
        category: "Full Respray"
    },
    {
        image: "/30.webp",
        category: "Full Respray"
    },
    {
        image: "/31.webp",
        category: "Full Respray"
    },
    {
        image: "/32.webp",
        category: "Full Respray"
    },
    {
        image: "/33.webp",
        category: "Full Respray"
    },
    {
        image: "/34.webp",
        category: "Full Respray"
    },
    {
        image: "/35.webp",
        category: "Full Respray"
    },
    {
        image: "/36.webp",
        category: "Full Respray"
    },
    {
        image: "/car park repair-1.jpg",
        category: "Car Park Damage Repair"
    },
    {
        image: "/car park repair-2.jpg",
        category: "Car Park Damage Repair"
    },
    {
        image: "/car park repair-3.jpg",
        category: "Car Park Damage Repair"
    },
    {
        image: "/car park repair-4.jpg",
        category: "Car Park Damage Repair"
    },
    {
        image: "/car park repair-5.jpg",
        category: "Car Park Damage Repair"
    },
    {
        image: "/car park repair-6.jpg",
        category: "Car Park Damage Repair"
    },
    {
        image: "/41.webp",
        category: "Accident Repair"
    },
    {
        image: "/42.webp",
        category: "Accident Repair"
    },
    {
        image: "/43.webp",
        category: "Accident Repair"
    },
    {
        image: "/44.webp",
        category: "Accident Repair"
    },
    {
        image: "/45.webp",
        category: "Accident Repair"
    },
    {
        image: "/46.webp",
        category: "Accident Repair"
    },
    {
        image: "/47.webp",
        category: "Accident Repair"
    },
    {
        image: "/48.webp",
        category: "Accident Repair"
    },
];

const OurGallery = () => {
    const [selected, setSelected] = useState("All");

    const filtered = selected === "All"
        ? allItems
        : allItems.filter((item) => item.category === selected);

    return (
        <section className="w-full text-white py-16 px-6">
            {/* Title */}
            <div className="text-center mt-20  mb-10">
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
                        <img src={item.image} alt="item" className="w-full h-64 object-cover" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurGallery;
