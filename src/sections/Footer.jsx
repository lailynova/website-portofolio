// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#404040] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
        <div>
          <h2 className="md:text-3xl tex-3xl font-semibold mb-2">Mohammad Laily Nova Krisna</h2>
          <p className="md:text-xl text-md text-gray-400">Full Stack Developer</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/lailynova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/lailynova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="md:text-md text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mohammad Laily Nova Krisna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
