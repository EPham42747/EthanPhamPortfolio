import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm_sans",
  weight: "400",
  subsets: ["latin"],
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Hi, I'm Ethan!",
  description: "A portfolio website for Ethan Pham.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ibmSans.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
