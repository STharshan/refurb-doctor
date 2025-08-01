import React from "react";

const FindUsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">FIND US</h2>
        <p className="text-gray-700 max-w-2xl font-semibold text-lg mx-auto mb-10">
          Visit our workshop for professional auto repairs and services. We’re conveniently located and ready to serve you.
        </p>

        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Refurb Doctor Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.0194044373263!2d-1.5741749235851387!3d52.39483914534186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b8b3640217b%3A0xbb3cdacdc43b3ebd!2sRefurbdoctor!5e0!3m2!1sen!2slk!4v1699871234567!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
