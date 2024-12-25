"use client";

import Footer from "@/components/layouts/footer";
import NavigationBar from "@/components/layouts/navigationBar";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NavigationBar />
      <main className="px-5 sm:px-16">{children}</main>
      <Footer />
    </NextUIProvider>
  );
}
