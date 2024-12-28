import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMessageSquare,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`
            fixed top-0 left-0 h-screen pverflow-hidden bg-gray-800 text-white
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 w-56 z-50
        `}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 border-b-2 pt-2 pb-5">
            Admin Panel
          </h1>
          <ul className="space-y-4">
            <li className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FiHome className="mr-2" /> Dashboard
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FiUser className="mr-2" /> Profile
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FiBriefcase className="mr-2" /> Project
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FiCode className="mr-2" /> Skill
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FiMessageSquare className="mr-2" /> Messages
            </li>
          </ul>
        </div>
      </div>

      <div className="z-50">
        <div
          className={`md:hidden mt-3 transition-all duration-500 absolute flex gap-4 ${
            isOpen ? "translate-x-48" : "translate-x-3"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} color="white" /> : <FiMenu size={24} />}
          {/* <h2 className="-mt-[2.2px] text-[20px] font-semibold tracking-[1px]">Dashboard</h2> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
