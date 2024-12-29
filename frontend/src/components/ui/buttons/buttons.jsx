const { Button, Link, Image } = require("@nextui-org/react");
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const Buttons = {
  CTA: ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
  },
  ButtonScroll: ({ scrollTo, rotateValue }) => {
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setScreenHeight(window.innerHeight);

        const handleResize = () => {
          setScreenHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return (
      <Link
        href={scrollTo}
        className="fixed right-0 sm:right-16  hover:cursor-pointer hover:opacity-70 transition-all duration-500 ease-in-out z-50"
        style={{ bottom: screenHeight * 0.1, rotate: rotateValue }}
      >
        <div className="bg-[#22aded] flex gap-1 px-3 py-2 animateScrollTo rounded-full">
          <Image
            src="/images/icons/ellipse.svg"
            alt="eliipse"
            className="rotate-90"
          />
          <FaArrowDown className="-rotate-90 text-white font-bold text-[18px]" />
        </div>
      </Link>
    );
  },
};

export { Buttons };
