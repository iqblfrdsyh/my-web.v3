"use client";

import Footer from "@/components/layouts/footer";
import NavigationBar from "@/components/layouts/navigationBar";
import Sidebar from "@/components/layouts/sidebar";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function Providers({ children }) {
  const pathname = usePathname();
  const isAdminPath = pathname.includes("admin");

  return (
    <NextUIProvider>
      <div className="relative">
        {!isAdminPath && <Background />}

        <div className={`relative ${isAdminPath && "flex"}`}>
          {isAdminPath && <Sidebar />}

          <div
            className={`x flex-1 ${isAdminPath && "overflow-y-hidden"}`}
            style={{
              paddingLeft: isAdminPath && "10.5rem",
            }}
          >
            {!isAdminPath && <NavigationBar />}
            <main className="px-5 sm:px-16">{children}</main>
            {!isAdminPath && <Footer />}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

const Background = () => (
  <div className="bg-gradient-bg absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat -z-10 opacity-40"></div>
);
