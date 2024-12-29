import { Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 px-2 mt-14">
      <p className="tracking-[1px] sm:tracking-[2px] text-[13px] sm:text-[15px]">
        &copy;{new Date().getFullYear()}{" "}
        <Link
          href="https://instagram.com/i.frdsyh"
          underline="always"
          className="text-[13px] sm:text-[15px] text-[#56c9ff]"
        >
          M Iqbal Ferdiansyah
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
