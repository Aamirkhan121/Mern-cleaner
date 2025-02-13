import React from "react";
import { MdCleaningServices } from "react-icons/md";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-elaichi w-full">
      <div className="px-6 sm:px-10 md:px-20 py-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Footer text start */}
          <div className="footer-text">
            <h1 className="flex items-center text-3xl md:text-4xl font-bold mb-4">
              CLEAN
              <MdCleaningServices className="ml-2 text-4xl md:text-5xl" />
            </h1>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.youtube.com/@mdaamirkhan8381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/website_services_byaamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/md-aamir-khan-740406283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="mt-4 text-sm md:text-base tracking-wide">
              Efficient Cleaning, Exceptional Results.
            </p>
          </div>
          {/* Footer text end */}

          {/* Footer nav start */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold mb-4">MAIN</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">PAGES</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">UTILITIES</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/style-guide">Style Guide</Link>
                </li>
                <li>
                  <Link to="/instructions">Instructions</Link>
                </li>
                <li>
                  <Link to="/licenses">Licenses</Link>
                </li>
                <li>
                  <Link to="/changelog">Changelog</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer nav end */}
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
          <p>© 2024 Cleaners. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">
            Built By <span className="font-semibold">Md Aamir Khan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

