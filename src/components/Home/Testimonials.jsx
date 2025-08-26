import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Lee",
        text: "Service is brilliant, Darren gave quote over the phone prior to seeing the car. Very happy with service received, Would highly recommend!!! 💯",
        rating: 5,
    },
    {
        name: "Bobby Adeniran",
        text: "Big thanks to Sean for fixing a scratch repair at the last minute. Great advice and professional. I strongly recommend this place.",
        rating: 5,
    },
    {
        name: "Flo Swann",
        text: "Lovely tidy-up job on my VW where I'd scraped the whole side along a wall - doh!. No fuss, done for the price quoted in the time quoted. Thank you 8-)",
        rating: 5,
    },
    {
        name: "Les Clayton",
        text: `Had scratches done on my VW transporter campervan amazing job looks perfect would highly recommend
would give 10 stars only 5 available
thanks for doing a great job 👍`,
        rating: 5,
    },
    {
        name: "Keith Lemmon",
        text: `Sean and Darren have done the most amazing job on both sides of my Nissan note in such a reasonable time...perfection! Thanks...`,
        rating: 5,
    },
    {
        name: "Rich Burke",
        text: `Great service and work done to a high standard. Almost like magic how they’ve managed to get a dent out of the car!`,
        rating: 5,
    },
    {
        name: "Jimmy T",
        text: `Excellent service every time. Friendly, honest and will let you know if something isn't quite right to make sure they do a perfect job. Have taken 3 x cars here now and wouldn’t go anywhere else. Highly recommended!`,
        rating: 5,
    },
    {
        name: "Dave Keeble",
        text: `First class quality job at a good price`,
        rating: 5,
    },
    {
        name: "Carol Ellis",
        text: `I have used the refurb doctor now 2019 & today to have my DIAMOND CUT WHEEL REFURBED after my Husband had curbed my car yes ladies my husband curbed my car TWICE, the young lad has done a fantastic job.`,
        rating: 5,
    },
    {
        name: "Michal Uchanski",
        text: `Painted my navy door black and it looks incredible thank you for the great job`,
        rating: 5,
    },
];

const Testimonials = () => {
    // Adjust visibleCount based on screen width
    const getVisibleCount = () => {
        if (window.innerWidth < 640) return 1; // Mobile
        if (window.innerWidth < 1024) return 2; // Tablet
        return 3; // Desktop
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount());

    // Update visibleCount on window resize
    useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [visibleCount]);

    // Calculate visible testimonials
    const getVisibleTestimonials = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            result.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return result;
    };

    return (
        <section id="testimonials" className="bg-[#f5f9fc] py-16 px-2 sm:px-4 scroll-mt-18">
            <div className="text-center mb-8 sm:mb-10">
                <p className="text-[#2E7BCF] font-semibold uppercase tracking-wide mb-2">
                    Our Testimonials
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase">
                    What Our Clients Say
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto flex items-center">
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 text-[#2E7BCF] hover:text-blue-800 z-10"
                    aria-label="Previous"
                >
                    <FaChevronLeft size={32} />
                </button>

                {/* Testimonial Cards */}
                <div
                    className="flex w-full justify-center items-stretch gap-4 sm:gap-6 md:mx-10 overflow-x-auto sm:overflow-x-hidden py-2"
                    style={{
                        scrollSnapType: "x mandatory",
                    }}
                >
                    {getVisibleTestimonials().map((t, idx) => (
                        <div
                            key={idx}
                            className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-4 sm:p-6 rounded-lg shadow text-center transition duration-500 ease-in-out mx-auto"
                            style={{ minWidth: 0, scrollSnapAlign: "center" }}
                        >
                            {/* Stars */}
                            <div className="flex justify-center text-yellow-400 mb-3">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="italic text-gray-700 text-base sm:text-lg leading-relaxed mb-4 max-w-xs mx-auto">
                                "{t.text}"
                            </p>
                            <p className="text-[#2E7BCF] text-lg sm:text-xl font-bold">{t.name}</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 text-[#2E7BCF] hover:text-blue-800 z-10"
                    aria-label="Next"
                >
                    <FaChevronRight size={32} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full transition ${
                            idx === currentIndex ? "bg-[#2E7BCF]" : "bg-gray-300"
                        }`}
                    ></div>
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-10">
                <button
                    onClick={() =>
                        window.open(
                            "https://www.google.no/search?sa=X&sca_esv=2c9e1e9a39f0ac3a&hl=no&biw=1536&bih=703&sxsrf=AE3TifO70TSq65-BUE32QQMJ1lQzh898IA:1748100184909&kgmid=/g/11jxthl28k&q=Refurbdoctor&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1",
                            "_blank"
                        )
                    }
                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 font-semibold rounded"
                >
                    View More
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
