"use client";

import { Image, Link } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Buttons } from "../ui/buttons";
import {
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  const sosmed = [
    {
      icon: FaGithub,
      alt: "github",
      href: "https://github.com/iqblfrdsyh",
    },
    {
      icon: FaInstagram,
      alt: "instagram",
      href: "https://instagram.com/i.frdsyh",
    },
    {
      icon: FaLinkedin,
      alt: "linkedin",
      href: "https://linkedin.com/in/iqblfrdsyh",
    },
    {
      icon: FaXTwitter,
      alt: "x",
      href: "https://x.com/iqblfrdsyh",
    },
  ];

  return (
    <section
      className="relative flex justify-center h-screen mt-10 sm:mt-0"
      id="heroSection"
    >
      <div className="absolute sm:left-4 top-[340px] sm:top-1/4 flex sm:flex-col items-center gap-4 -mt-2">
        {sosmed.map((sosmed, index) => {
          const IconComponent = sosmed.icon;

          return (
            <Link
              href={sosmed.href}
              key={sosmed.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-[#56c9ff]"
              >
                <IconComponent size={30} />
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="absolute top-24 sm:top-1/4 -mt-9">
        <div className="flex flex-col gap-5 items-center">
          <div className="text-start">
            <p className="font-semibold text-[19px]">Hello, I&apos;m</p>
            <h1 className="text-[35px] sm:text-[40px] font-semibold tracking-[3px]">
              Web{" "}
              <span className="text-[#56c9ff] underline underline-offset-[20px]">
                Developer
              </span>
            </h1>
          </div>
          <div>
            <p className="w-[300px] sm:w-[450px] text-center text-[14px] sm:text-[16px]">
              Hello my name is M Iqbal Ferdiansyah. I just learned coding in
              Front End, my achievement is to become Full Stack Developer.
            </p>
          </div>
          <div className="flex gap-5">
            <Buttons.CTA
              size="md"
              variant="bordered"
              href="#project"
              className="border- border-2 rounded-[8px] px-5 flex items-center gap-2 hover:bg-slate-800"
            >
              <FaLaptopCode className="text-[20px]" />
              Explore My Portfolio
            </Buttons.CTA>
            <Buttons.CTA
              size="md"
              variant="bordered"
              href="#contact"
              className="border- border-2 rounded-[8px] px-5 hover:bg-slate-800"
            >
              Hire Me
            </Buttons.CTA>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
