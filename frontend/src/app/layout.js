import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "M Iqbal Ferdiansyah",
  description: "A Website Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
