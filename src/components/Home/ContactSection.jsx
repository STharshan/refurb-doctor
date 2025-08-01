import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#2E7BCF] py-16 px-4 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Refurb Doctor</h2>
          <p className="mb-6 max-w-lg text-white/90 font-semibold">
            Trust our service to get you back on the road. Our expert technicians
            are ready to help with any automotive issue you might have.
          </p>

          <div className="space-y-6 text-white">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={20} className="mt-5" />
              <div>
                <p className="font-semibold text-xl">Location</p>
                <p className="text-white/90 font-semibold">
                  Torrington Avenue, Unit E, Templar Industrial Park, Coventry<br />
                  CV4 9AP, Storbritannia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt size={20} className="mt-4" />
              <div>
                <p className="font-semibold text-xl ">Phone</p>
                <p className="text-white/90 font-semibold">07795 528849</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={20} className="mt-4" />
              <div>
                <p className="font-semibold text-xl">Email</p>
                <p className="text-white/90 font-semibold">refurbdoctor@live.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black rounded-md p-6 md:p-8 shadow-md">
          <h3 className="text-3xl font-bold mb-6">How Can We Help?</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded px-4 py-2 border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2E7BCF] text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              SUBMIT YOUR MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
