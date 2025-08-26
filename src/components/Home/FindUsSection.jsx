import React from "react";

const FindUsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">FIND US</h2>
        <p className="text-gray-700 max-w-2xl font-semibold text-lg mx-auto mb-10">
          Visit our workshop for professional auto repairs and services. We’re conveniently located and ready to serve you.
        </p>
        <div className="max-w-7xl mx-auto">
          {/* Map iframe */}
          <div className="w-full h-[400px] rounded-md overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1023.5738890652815!2d-1.5705523767506497!3d52.39792733764277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x48774b65209c1625%3A0x25a4c26ea87b1c06!2sTorrington%20Avenue%2C%20Unit%20E%2C%20Templar%20industrial%20park%2C%20Coventry%20CV4%209AP%2C%20United%20Kingdom!3m2!1d52.397808!2d-1.5698054!5e0!3m2!1sen!2slk!4v1756217058102!5m2!1sen!2slk"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Refurbdoctor, Torrington Avenue, Unit E, Templar industrial park, Coventry CV4 9AP, United Kingdom"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
