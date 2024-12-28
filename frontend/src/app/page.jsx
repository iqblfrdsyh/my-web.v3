"use client";

import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import { Buttons } from "@/components/ui/buttons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TechStack from "@/components/techStack";
import Certificates from "@/components/certificates";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  const pathname = usePathname();
  const [rotateValue, setRotateValue] = useState("90deg");
  const [scrollTo, setScrollTo] = useState("#about");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#about" || pathname.includes("/#about")) {
        setRotateValue("270deg");
        setScrollTo("#");
      } else {
        setRotateValue("90deg");
        setScrollTo("#about");
      }
    };

    handleHashChange();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  useEffect(() => {
    if (hasScrolled) {
      setRotateValue("270deg");
      setScrollTo("#");
    } else {
      setRotateValue("90deg");
      setScrollTo("#about");
    }
  }, [hasScrolled]);

  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <About />
      <TechStack />
      <Certificates />
      <Projects />
      <Contact />

      <Buttons.ButtonScroll scrollTo={scrollTo} rotateValue={rotateValue} />
    </div>
  );
}
