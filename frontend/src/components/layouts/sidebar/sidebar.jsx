import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMessageSquare,
} from "react-icons/fi";
import { PiCertificateFill } from "react-icons/pi";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/admin/dashboard", icon: <FiHome />, label: "Dashboard" },
    { href: "/admin/profile", icon: <FiUser />, label: "Profile" },
    { href: "/admin/project", icon: <FiBriefcase />, label: "Project" },
    { href: "/admin/skill", icon: <FiCode />, label: "Skill" },
    {
      href: "/admin/certificate",
      icon: <PiCertificateFill />,
      label: "Certificate",
    },
  ];

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 h-screen bg-gray-800 text-white transition-transform
          transform duration-300 ease-in-out z-50 w-56 p-4
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h1 className="text-2xl font-bold mb-4 border-b-2 pt-2 pb-5">
          Admin Panel
        </h1>
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer"
            >
              <Link
                href={item.href}
                onClick={toggleSidebar}
                className="flex items-center w-full"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="z-50">
        <div
          className={`md:hidden mt-3 transition-all duration-500 absolute flex gap-4 ${
            isOpen ? "translate-x-48" : "translate-x-3"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} color="white" /> : <FiMenu size={24} />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
