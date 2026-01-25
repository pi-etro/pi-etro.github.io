import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { devName, navSections } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const handleSectionSelect = useCallback((sectionTitle) => {
    setSelectedSection(sectionTitle);
  }, []);

  const handleHomeClick = useCallback(() => {
    setSelectedSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsToggleMenuOpen((prev) => !prev);
  }, []);

  const NavSections = ({ isMobile = false }) => (
    <ul className={`flex ${isMobile ? "flex-col gap-4" : "flex-row gap-10"}`}>
      {navSections.map((section) => (
        <li
          key={section.id}
          className={`text-[${
            isMobile ? "16px" : "18px"
          }] font-medium cursor-pointer ${
            selectedSection === section.title ? "text-white" : "text-secondary"
          } hover:text-white`}
          onClick={() => {
            handleSectionSelect(section.title);
            if (isMobile) setIsToggleMenuOpen(false);
          }}
        >
          <a href={`#${section.id}`}>{section.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full bg-primary py-5 flex items-center`}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            {devName}
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex">
          <NavSections />
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center">
          <button onClick={handleToggleMenu} aria-label="Toggle menu">
            <img
              src={isToggleMenuOpen ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain"
            />
          </button>

          {isToggleMenuOpen && (
            <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <NavSections isMobile />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
