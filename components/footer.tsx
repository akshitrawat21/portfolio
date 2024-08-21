import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Akshit. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      
      {/* Social Media Links */}
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://www.instagram.com/akkshitrawat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition"
        >
          <FaInstagram size={20} className="sm:size-24" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshitrawat21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700 transition"
        >
          <FaLinkedin size={20} className="sm:size-24" />
        </a>
        <a
          href="https://github.com/akshitrawat21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition"
        >
          <FaGithub size={20} className="sm:size-24" />
        </a>
        <a
          href="https://twitter.com/akshitrawat21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition"
        >
          <FaTwitter size={20} className="sm:size-24" />
        </a>
      </div>
    </footer>
  );
}
