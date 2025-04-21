import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'project', name: 'Project' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...");
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 2;
      console.log("Scroll Position:", scrollPos);
      const sections = navLinks.map(link => document.getElementById(link.id));
      console.log("Sections:", sections);

      const currentSection = sections.find(
        section =>
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
      );
      console.log("Current Active Section:", currentSection ? currentSection.id : "None");
      setActiveLink(currentSection ? currentSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);
    console.log("Event listener removed");
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full py-4 px-6 z-100 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-[#242424] bg-opacity-80' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl text-white font-bold">&lt;LailyNova /&gt;</h1>
          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-xl">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollToSection(link.id)}
                  className={`font-semibold relative text-white px-4 py-2 transition-all duration-300 
                    ${
                      activeLink === link.id ? '!text-white' : ''
                    }
                    
                    /* Animasi Highlight (Active Section) */
                    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[3px] after:bg-white after:rounded-full after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2
                    ${
                      activeLink === link.id ? 'after:w-full' : 'after:w-0'
                    }

                    /* Animasi Hover */
                    before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[3px] before:bg-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:-translate-x-1/2
                    hover:before:w-full`}
                >
                  {link.name}
                </button>

              </li>
            ))}
          </ul>
          {/* Mobile Only: GitHub + Hamburger */}
          <div className="flex items-center space-x-4 md:hidden">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-white hover:text-gray-400" />
            </a>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Only GitHub Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <FaGithub size={30} className="text-white hover:text-gray-400" />
          </a>

        </div>
      </nav>

      {/* Sidebar Mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white z-100 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          <button
            className="self-end text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
          <ul className="space-y-4">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollToSection(link.id)}
                  className={`block px-4 py-2 rounded-md w-full text-left transition-all duration-300 ${
                    activeLink === link.id
                      ? 'text-blue-400 bg-gray-800'
                      : 'hover:text-blue-300'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className=" bg-opacity-10 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
