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
  title: {
    default: "Andiamo Lux - Personalized Luxury Travel Planning",
    template: "%s | Andiamo Lux"
  },
  description: "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary, they're designed for those who expect more.",
  keywords: "luxury travel, personalized travel planning, travel advisors, luxury vacations, bespoke travel experiences",
  authors: [{ name: "Andiamo Lux" }],
  creator: "Andiamo Lux",
  publisher: "Andiamo Lux",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.andiamolux.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.andiamolux.com",
    siteName: "Andiamo Lux",
    title: "Andiamo Lux - Personalized Luxury Travel Planning",
    description: "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary, they're designed for those who expect more.",
    images: [
      {
        url: "https://www.andiamolux.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andiamo Lux - Luxury Travel Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andiamo Lux - Personalized Luxury Travel Planning",
    description: "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary, they're designed for those who expect more.",
    images: ["https://www.andiamolux.com/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
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