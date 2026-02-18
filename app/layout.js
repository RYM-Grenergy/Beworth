import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BWorth - Sustainable Fashion Ecosystem",
  description: "Join the revolution in sustainable fashion with BWorth. Buy, sell, and recycle your clothes responsibly.",
  keywords: ["Sustainable Fashion", "Buyback Program", "Eco-friendly Clothing", "Fashion Tech", "BWorth", "Circular Economy"],
  authors: [{ name: "BWorth" }],
  creator: "BWorth",
  openGraph: {
    title: "BWorth - Sustainable Fashion Ecosystem",
    description: "Join the revolution in sustainable fashion with BWorth. Buy, sell, and recycle your clothes responsibly.",
    url: "https://beworth.in",
    siteName: "BWorth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BWorth - Sustainable Fashion Ecosystem",
    description: "Creating a sustainable fashion marketplace through innovative buyback programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased font-sans cursor-none`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider>
            <CustomCursor />
            <Navbar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
