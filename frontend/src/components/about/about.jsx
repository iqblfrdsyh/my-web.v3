"use client";

import { Image } from "@nextui-org/react";
import React from "react";
import { Buttons } from "../ui/buttons";
import Statistics from "../ui/statistics";
import Link from "next/link";

const About = () => {
  return (
    <section
      className="sm:flex items-center gap-24 justify-center h-screen sm:h-[500px] relative mb-52 sm:mb-24 -mt-20 sm:-mt-0"
      id="about"
    >
      <div className="z-10">
        <Image
          src="/images/profile/me.png"
          alt="Me"
          className="w-[360px] h-[360px]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            Hi !{" "}
            <Image
              src="/images/icons/line.svg"
              alt="line"
              className="w-[35px]"
            />
          </div>
          <h2 className="text-[30px] sm:text-[35px] font-semibold tracking-[5px]">
            I&apos;m a Web Developer
          </h2>
          <p className="w-[350px] sm:w-[420px] mt-4">
            I am a 2024 graduate of SMK Yadika Soreang, skilled in website
            development with experience in HTML, CSS, JavaScript, TypeScript,
            Tailwind CSS, ReactJS, and NextJS. I’m also familiar with RESTful
            APIs and single-page applications (SPA). Coding has been my hobby
            since vocational school.
          </p>
        </div>
        <div className="mt-3">
          <Link href="/files/M Iqbal Ferdiansyah - CV.pdf" download={true}>
            <Buttons.CTA className="bg-[#14A7EA] text-white" radius="sm">
              Download CV
            </Buttons.CTA>
          </Link>
        </div>
        <div className="mt-10">
          <Statistics />
        </div>
      </div>
    </section>
  );
};

export default About;
