import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="py-16 px-6 text-gray-800 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2E7BCF] mb-10 mt-15">
        Terms and Conditions
      </h1>

      <p className="mb-6 font-semibold">
        These Terms and Conditions outline the rules and regulations for the use of our website and services.
        Please read these terms carefully before engaging with our platform.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Acceptance of Terms</h2>
      <p className="mb-6 font-semibold">
        By accessing or using this website, you acknowledge and agree to be bound by these terms and applicable laws and
        regulations within the United Kingdom. If you do not agree with any part of these terms, you must not use our service.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Licence to Use</h2>
      <p className="mb-6 font-semibold">
        Unless otherwise stated, we own the intellectual property rights of all content on the site. All content is protected
        by UK copyright law and international treaties. You are permitted to view, download for caching purposes only, and
        print pages for your own personal use without permission from us.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">User Obligations</h2>
      <p className="mb-6 font-semibold">
        When using our services, you agree not to engage in any activity that may interfere with or disrupt the service or
        network. This includes attempting to gain unauthorized access to any portion of the site or other accounts, computer
        systems, or networks.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Privacy and Data Protection</h2>
      <p className="mb-6 font-semibold">
        We are committed to protecting your privacy and handling your data in accordance with the UK Data Protection Act 2018
        and GDPR requirements. Please refer to our{" "}
        <a
          href="/privacy-policy"
          className="text-[#2E7BCF] underline hover:text-blue-800"
        >
          Privacy Policy
        </a>{" "}
        for detailed information about how we collect, use, and protect your data.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Limitations</h2>
      <p className="mb-6 font-semibold">
        In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit)
        arising out of the use or inability to use the materials on our platform, even if we or an authorized representative
        have been notified orally or in writing of the possibility of such damage.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-6 font-semibold">
        We reserve the right to revise these terms at any time without prior notice. By continuing to use the site after such
        changes are made, you acknowledge and accept the revised Terms and Conditions. Please review them regularly for any
        updates.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Governing Law</h2>
      <p className="mb-6 font-semibold">
        These terms shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes
        relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of the United
        Kingdom.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-2">Contact Information</h2>
      <p className="mb-6 font-semibold">
        For questions or concerns regarding these Terms, please contact us at{" "}
        <a
          href="mailto:refurbdoctor@live.co.uk"
          className="text-[#2E7BCF] underline hover:text-blue-800"
        >
          refurbdoctor@live.co.uk
        </a>
        . Our support team aims to respond to all enquiries within 2 working days.
      </p>
    </section>
  );
};

export default TermsAndConditions;
