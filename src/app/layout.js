import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

// Make sure to specify weights for Playfair Display
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"], // Add explicit weights
});

export const metadata = {
  title: "Andiamo Lux",
  description:
    "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary, they're designed for those who expect more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}