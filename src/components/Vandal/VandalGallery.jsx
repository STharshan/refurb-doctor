import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VandalGallery = () => {
  const navigate = useNavigate();

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

        <h2 className="text-2xl md:text-3xl font-bold text-[#2E7BCF] mb-5">
          Vandal Scratch Removal - <span className="font-normal text-gray-500 text-xl"> Efficient Restoration</span>
        </h2>

        {/* Video */}
        <div className="mx-auto">
          <video
            autoPlay
            muted
            loop
            className="w-full h-[400px] object-cover rounded-md" // Adjust the height as needed
          >
            <source src="/Vandal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VandalGallery;
