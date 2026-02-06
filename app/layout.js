import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bworth Technologies - Sustainable Fashion Ecosystem",
  description:
    "Creating a sustainable fashion marketplace through innovative buyback programs. Join us in reducing fashion industry's carbon footprint.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
