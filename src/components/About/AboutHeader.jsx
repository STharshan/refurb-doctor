import React from "react";

const AboutUs = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 text-center scroll-mt-18">
            <div className="max-w-4xl mx-auto mt-10">
                <h4 className=" font-medium mb-3">About Us</h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    We’re a company of talented <br className="hidden sm:block" />
                    engineers & mechanics
                </h2>
                <p className="mt-6 text-base sm:text-lg text-gray-700 font-semibold leading-relaxed">
                    At Refurb Doctor, we’re dedicated to providing expert automotive care and mechanical <br className="hidden md:block" />
                    solutions with our team of skilled engineers and technicians.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
