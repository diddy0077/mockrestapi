import React, { useState } from "react";
import { Github, Code, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import rocket from "../assets/rocket.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["Docs", "Guide"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="bg-blue-600 shadow-md relative z-50">
        <div className=" flex justify-between items-center container mx-auto p-4">
          <div className="flex items-center gap-2">
            <img src={rocket} alt="logo" className="w-12 h-12" />
            <h1 className="text-shadow text-white text-2xl sm:text-3xl font-bold">
              MockHub API
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8 text-white font-medium">
            <div className="flex flex-col sm:flex-row ">
              {navLinks.map((nav) => {
                return (
                  <NavLink
                    key={nav}
                    to={nav.toLowerCase() === "guide" ? "/guide" : "/"}
                    end
                    className={({ isActive }) =>
                      `${
                        isActive ? "shadow-md bg-white text-blue-600" : ""
                      } p-2 px-4 rounded-lg transition duration-300`
                    }
                  >
                    {nav}
                  </NavLink>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center gap-4 sm:absolute right-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden text-white hover:bg-blue-700 p-2 rounded-lg transition duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Github className="text-white hover:bg-blue-700 rounded-lg transition duration-300 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden transition duration-300">
          <div
            className="absolute inset-0 bg-black/30 bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>
          <nav className="absolute top-0 right-0 w-64 h-full bg-blue-600 shadow-xl transform transition duration-300 ease-in-out">
            <div className="flex flex-col pt-20 p-4 gap-4">
              {navLinks.map((nav) => {
                return (
                  <NavLink
                    key={nav}
                    to={nav.toLowerCase() === "guide" ? "/guide" : "/"}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "shadow-md bg-white text-blue-600"
                          : "text-white hover:bg-blue-700"
                      } p-3 px-4 rounded-lg transition duration-300 font-medium`
                    }
                  >
                    {nav}
                  </NavLink>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
