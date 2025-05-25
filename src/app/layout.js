import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';

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
    description: "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary, they're designed for those who expect more.",
    appleWebApp: {
      title: "Andiamo Lux",
      statusBarStyle: "black",
      capable: true,
    },
    icons: {
      icon: [
        { url: "/logo_3.png", sizes: "32x32", type: "image/png" },
        { url: "/logo_3.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/logo_3.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <GoogleAnalytics gaId="G-HVL6VCQCWC" />
      </body>
    </html>
  );
}