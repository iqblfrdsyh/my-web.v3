"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <main>{children}</main>
    </NextUIProvider>
  );
}
