import React from 'react'
import { SectionWrapper } from "../hoc";
import { devName, email, linkedinLink, githubLink } from "../constants";

const Contact = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-16">
      {/* Footer Container */}
      <div className="bg-gray-900 rounded-3xl w-full max-w-6xl mx-4 p-8 shadow-2xl">
        <div className="flex flex-row justify-between items-center">
          {/* Left Section - Name and Copyright */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">{devName}</h2>
            <p className="text-white text-sm">E-mail: {email}</p>
          </div>

          {/* Right Section - Social Links */}
          <div className="text-right">
            <h3 className="text-white text-lg font-semibold mb-3">Social</h3>
            <div className="space-y-2">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;