import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

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
  description: "Creating a sustainable fashion marketplace through innovative buyback programs. Join us in reducing fashion industry's carbon footprint.",
  keywords: ["Sustainable Fashion", "Buyback Program", "Eco-friendly Clothing", "Fashion Tech", "Bworth Technologies", "Circular Economy"],
  authors: [{ name: "Bworth Technologies" }],
  creator: "Bworth Technologies",
  openGraph: {
    title: "Bworth Technologies - Sustainable Fashion Ecosystem",
    description: "Creating a sustainable fashion marketplace through innovative buyback programs. Join us in reducing fashion industry's carbon footprint.",
    url: "https://bworth.co.in",
    siteName: "Bworth Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bworth Technologies - Sustainable Fashion Ecosystem",
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
        className={`${spaceGrotesk.variable} ${playfair.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
