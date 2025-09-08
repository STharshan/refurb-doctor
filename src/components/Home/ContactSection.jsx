import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(form.phone)) newErrors.phone = "Enter a valid UK phone number.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.message.trim()) newErrors.message = "Message is required."; // Added validation for message
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const ownerNumber = "447581730734";
    const waMessage =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Address: ${form.address}\n` +
      `Message: ${form.message}`;
    const waUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(waMessage)}`;

    window.open(waUrl, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
    setSuccessMsg("Your message is ready to send on WhatsApp! Please click 'Send' in WhatsApp to complete your message.");

    setTimeout(() => setSuccessMsg(""), 5000); // Hide after 5s
  };

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
                <a
                  href="https://www.google.com/maps?q=Torrington+Avenue,+Unit+E,+Templar+Industrial+Park,+Coventry,+CV4+9AP,+Storbritannia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 font-semibold hover:underline"
                >
                  Torrington Avenue, Unit E, Templar Industrial Park, Coventry
                  <br />
                  CV4 9AP, Storbritannia, United Kingdom
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt size={20} className="mt-4" />
              <div>
                <p className="font-semibold text-xl">Phone</p>
                <a
                  href="tel:+447581730734"
                  className="text-white/90 font-semibold hover:underline"
                >
                  +447581 730734
                  <br />
                  +447795 528849
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope size={20} className="mt-4" />
              <div>
                <p className="font-semibold text-xl">Email</p>
                <a
                  href="mailto:refurbdoctor@live.co.uk"
                  className="text-white/90 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  refurbdoctor@live.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black rounded-md p-6 md:p-8 shadow-md">
          <h3 className="text-3xl font-bold mb-6">How Can We Help?</h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={form.name}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone*"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address*"
                value={form.address}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.address ? "border-red-500" : ""}`}
              />
              {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message*"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.message ? "border-red-500" : ""}`}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>} {/* Error message */}
            </div>
            <button
              type="submit"
              className="w-full bg-[#2E7BCF] text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              SUBMIT YOUR MESSAGE
            </button>
          </form>
          {successMsg && (
            <div className="mt-4 text-green-600 font-semibold transition-all duration-300">
              {successMsg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
