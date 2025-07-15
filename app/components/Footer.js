import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Intro */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Tanvi<span className="text-red-500">Studio</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Ad video production, voiceover, dubbing, animation, and digital branding — by RJ Mohit (Akashwani Radio).
          </p>
        </div>

        {/* Services Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/#" className="hover:text-white">Animation Ads</Link></li>
            <li><Link href="/#" className="hover:text-white">Commercial Shoots</Link></li>
            <li><Link href="/#" className="hover:text-white">Dubbing & Voiceovers</Link></li>
            <li><Link href="/#" className="hover:text-white">Social Media Marketing</Link></li>
          </ul>
        </div>

        {/* Technical/Support Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/#" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/#" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/#" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </Link>
            <Link href="https://www.youtube.com/@rsstoryanalysis9547" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaYoutube />
            </Link>
            <Link href="https://wa.me/917827574020" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp />
            </Link>
            <Link href="mailto:tanvivoices@gmail.com" className="hover:text-white">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tanvi Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
