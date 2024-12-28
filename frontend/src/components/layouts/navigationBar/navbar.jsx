import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const NavigationBar = () => {
  const menu = [
    {
      label: "Home",
      href: "#heroSection",
      isActive: true,
      color: "foreground",
    },
    {
      label: "About",
      href: "#about",
      isActive: false,
      color: "foreground",
    },
    {
      label: "Project",
      href: "#project",
      isActive: false,
      color: "foreground",
    },
    {
      label: "Contact",
      href: "#contact",
      isActive: false,
      color: "foreground",
    },
  ];
  return (
    <Navbar shouldHideOnScroll className="py-3 bg-transparent">
      <NavbarContent
        className="flex justify-center items-center mx-auto space-x-4"
        justify="center"
      >
        {menu.map((menu) => (
          <NavbarItem isActive={menu.isActive} key={menu.label}>
            <Link
              color={menu.color}
              href={menu.href}
              className="sm:text-[18px]"
            >
              {menu.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
