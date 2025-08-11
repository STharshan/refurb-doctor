import React, { useState, useEffect } from "react";
import {
  FaCar,
  FaCarCrash,
  FaPaintRoller,
  FaScrewdriver,
  FaSprayCan,
  FaStar,
  FaWrench,
} from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Full Respray",
    subtitle: "For a Fresh Look",
    icon: <FaSprayCan />,
    images: ["/31.webp", "/32.webp", "33.webp", "34.webp"],
    path: "/services/full-respray",
  },
  {
    title: "Car Park Damage Repair",
    subtitle: "Precision and Quality",
    icon: <FaScrewdriverWrench />,
    images: ["/car park repair-1.jpg", "/car park repair-3.jpg", "car park repair-5.jpg", "car park repair-2.jpg"],
    path: "/services/car-part-damage-repair",
  },
  {
    title: "Accident Repair",
    subtitle: "Fast, Reliable, and Professional",
    icon: <FaCarCrash />,
    images: ["/41.webp", "/42.webp", "43.webp", "44.webp"],
    path: "/services/accident-repair",
  },
  {
    title: "Vandal Scratch Removal",
    subtitle: "Efficient Restoration",
    icon: <FaPaintRoller />,
    images: ["/23.webp", "/24.webp", "25.webp", "26.webp"],
    path: "/services/vandal-scratch-removal",
  },
  {
    title: "Paintless Dent Removal (PDR)",
    subtitle: "Preserve Your Original Paint",
    icon: <FaScrewdriver />,
    video: "/PDR.mp4",
    path: "/services/paintless-dent-removal",
  },
  {
    title: "Alloy Wheel Repair",
    subtitle: "Perfect Condition for Your Wheels",
    icon: <FaCar />,
    video: "/vedio.mp4", // <-- Use video instead of images
    path: "/services/alloy-wheel-repair",
  },
  {
    title: "Machine Polishing",
    subtitle: "Restore the Shine of Your Car's Paint",
    icon: <FaStar />,
    images: ["/machine polishing-1.jpg", "/machine polishing-2.jpg", "machine polishing-3.jpg", "machine polishing-4.jpg"],
    path: "/services/machine-polishing",
  },
  {
    title: "Mobile Repair",
    subtitle: "We Come to You",
    icon: <FaWrench />,
    video: "/mobile.mp4",
    path: "/services/mobile-repair",
  },
];

const ServiceUs = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    services.map((s) => (s.images ? 0 : null))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) =>
          services[i].images
            ? (index + 1) % services[i].images.length
            : null
        )
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-10 mt-25">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E7BCF]">
          Our Comprehensive Services
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto font-semibold text-lg">
          At Refurb Doctor, we offer a wide range of automotive services to keep your vehicle in optimal condition.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden flex flex-col text-center hover:shadow-lg transition"
          >
            {/* Top Text */}
            <div className="p-4">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-gray-800">{service.subtitle}</p>
            </div>

            {/* Image or Video + Icon */}
            <div className="relative w-full">
              {service.video ? (
                <video
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[88%] ml-6 rounded h-52 object-cover"
                />
              ) : (
                <img
                  src={service.images[currentIndexes[i]]}
                  alt={service.title}
                  className="w-[88%] ml-6 rounded h-52 object-cover"
                />
              )}

              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white group-hover:bg-[#2E7BCF] text-[#2E7BCF] text-2xl group-hover:text-white rounded-full shadow p-2 transition-colors duration-300">
                {service.icon}
              </div>
            </div>

            {/* Button */}
            <div className="p-4 mt-auto">
              <Link to={service.path}>
                <button className="bg-[#2E7BCF] text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700 transition">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceUs;
