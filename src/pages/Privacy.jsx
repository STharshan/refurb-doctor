import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 px-6 text-gray-800 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2E7BCF] mb-10 mt-15">
        Privacy Policy
      </h1>

      <p className="mb-6 font-semibold">
        Your privacy is of utmost importance to us. This privacy policy outlines how we collect,
        utilise, and safeguard your personal information when you engage with our services.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-5">Information We Collect</h2>
      <p className="mb-6 font-semibold">
        We may collect personal data including, but not limited to, your name, email address,
        telephone number, and usage data when you interact with our platform. Additionally, we may
        collect information about your vehicle, service history, and payment details when you book
        our services.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">How We Use Your Information</h2>
      <p className="mb-6 font-semibold">
        The information we collect is utilised to provide and enhance our services, ensure
        security, and communicate with users. This includes processing your bookings, sending
        service reminders, and improving our customer experience. We may also use your data to
        personalise our services and provide relevant promotional offers.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Data Security</h2>
      <p className="mb-6 font-semibold">
        We implement appropriate technical and organisational measures to protect your data against
        unauthorised access and loss. This includes encrypted data storage, secure servers, and
        regular security audits. Our staff are trained in data protection practices and bound by
        confidentiality agreements.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Your Rights</h2>
      <p className="mb-6 font-semibold">
        Under UK data protection law, you have the right to access, correct, or delete your personal
        information. You may also request a copy of your data or object to its processing. We aim to
        respond to all such requests within 30 days.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Cookie Policy</h2>
      <p className="mb-6 font-semibold">
        We use cookies and similar technologies to enhance your browsing experience. These help us
        understand how you use our website and allow us to improve our services. You can manage your
        cookie preferences through your browser settings.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Contact Us</h2>
      <p className="mb-6 font-semibold">
        If you have any enquiries about this policy or wish to exercise your data protection rights,
        please contact us at{" "}
        <a
          href="mailto:refurbdoctor@live.co.uk"
          className="text-[#2E7BCF] underline hover:text-blue-800"
        >
          refurbdoctor@live.co.uk
        </a>
        . Our Data Protection Officer will be happy to assist you.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
