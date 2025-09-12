import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0e1623] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Info */}
        <div>
          <img src="/logo1.webp" alt="Refurb Doctor Logo" className="h-30 mb-4" />
          <p className="text-lg font-semibold text-gray-300 mb-4">
            Professional auto repair services for all makes and models. Quality work guaranteed.
          </p>
          <div className="flex space-x-3">
            <a href="https://web.facebook.com/RefurbdoctorLtd/?_rdc=1&_rdr#" target='_blank' className="bg-gray-700 p-2 rounded-full transition hover:bg-[#2E7BCF]">
              <FaFacebookF className='text-xl' />
            </a>
            <a href="https://www.instagram.com/refurbdoctor_ltd/#" target='_blank' className="bg-gray-700 p-2 rounded-full hover:bg-[#2E7BCF]  transition">
              <FaInstagram className='text-xl' />
            </a>
            {/* <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#2E7BCF] transition">
              <FaTwitter className='text-xl' />
            </a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Quick Links</h4>
          <ul className="space-y-2 font-semibold text-gray-300 ">
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/#home">Home</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/about">About Us</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/#testimonials">Testimonials</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/#contact">Contact</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services">Services</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/terms-and-conditions">Terms And Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        {/* Our Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Our Services</h4>
          <ul className="space-y-2 font-semibold text-gray-300">
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/full-respray">Full Respray</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/car-part-damage-repair">Car Part Damage</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/accident-repair">Accident Repair</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/vandal-scratch-removal">Vandal Scratches</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/paintless-dent-removal">Paintless Dent Removal</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/alloy-wheel-repair">Alloy Wheel Repair</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/machine-polishing">Machine Polishing</Link>
            </li>
            <li className='hover:text-[#2E7BCF]'>
              <Link to="/services/mobile-repair">Mobile Repair</Link>
            </li>
          </ul>
        </div>


        {/* Business Hours */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Business Hours</h4>
          <ul className="font-semibold text-gray-300 space-y-2">
            <li className="flex justify-between">
              <span>Monday -<br /> Friday:</span>
              <span>8:30 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span>8:00 AM - 1:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />
      <p className="text-center font-semibold text-gray-400 mb-4">
        © 2025 Refurb Doctor. All Rights Reserved. Partnered with <span className="font-semibold text-white">
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-[#2E7BCF] transition hover:underline"
          >
            Ansely
          </a>

        </span>
      </p>
    </footer>
  );
};

export default Footer;
