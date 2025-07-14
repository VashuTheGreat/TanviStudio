"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  MessageSquareMore,
} from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id) =>
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-pink-50 text-gray-900 font-sans">

      {/* Hero Section */}
      <section
        id="contact-hero"
        className="py-24 px-6 text-center"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-600">
          Have a project in mind? Let’s collaborate! Reach out to us through any platform.
        </p>
      </section>

      {/* Contact Info */}
      <section id="contact-info" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Contact Form */}
          <div
            id="form"
            className={`bg-white rounded-xl shadow-lg p-8 ${fadeInUp("form")}`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <form
              action="mailto:your-email@example.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Direct Contact Links */}
          <div id="social" className={`space-y-5 text-lg ${fadeInUp("social")}`}>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Reach us directly</h2>

            <a
              href="mailto:your-email@example.com"
              className="flex items-center text-red-600 hover:underline space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>your-email@example.com</span>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="flex items-center text-red-600 hover:underline space-x-2"
            >
              <MessageSquareMore className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="https://t.me/yourtelegramusername"
              target="_blank"
              className="flex items-center text-red-600 hover:underline space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Telegram Channel</span>
            </a>

            <a
              href="https://instagram.com/yourinstausername"
              target="_blank"
              className="flex items-center text-red-600 hover:underline space-x-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram Profile</span>
            </a>

            <a
              href="tel:+919999999999"
              className="flex items-center text-red-600 hover:underline space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+91 99999 99999</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
