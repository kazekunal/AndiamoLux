import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

export const metadata = {
  title: "Privacy Policy - Andiamo Lux",
  description: "Privacy policy for Andiamo Lux travel planning services.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: "https://www.andiamolux.com/privacy",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Additional Head elements for favicon compatibility */}
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 font-inter p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-2xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <header className="bg-blue-600 dark:bg-blue-700 text-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                {/* Add your logo here for consistency */}
                <img 
                  src="/logo_3.png" 
                  alt="Andiamo Lux Logo" 
                  className="h-8 w-auto mr-2"
                />
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Andiamo Lux</h1>
              </div>
              <p className="text-sm opacity-90">Privacy Policy – May 2025</p>
            </div>
          </header>

          {/* Main Content Section */}
          <main className="p-6 sm:p-8 md:p-10 space-y-8 text-slate-700 dark:text-slate-300">
            <p className="text-lg leading-relaxed">
              At Andiamo Lux, your privacy is important to us. This Privacy Policy explains how we collect, use, and
              protect your information when you interact with our agency, website, and social platforms.
            </p>

            {/* Section 1: Information We Collect */}
            <section aria-labelledby="info-collect-heading">
              <h2 id="info-collect-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                1. Information We Collect
              </h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, travel preferences, passport
                  details, etc.
                </li>
                <li>
                  <strong>Communication Details:</strong> Messages shared via email, WhatsApp, Instagram, or contact forms.
                </li>
                <li>
                  <strong>Device & Usage Data:</strong> Basic info like browser type, device used, and pages visited on our site
                  (via cookies or analytics tools).
                </li>
                <li>
                  <strong>Payment Info:</strong> If shared via offline/secure channel, but we <strong>do not store card or bank details</strong> on
                  our website.
                </li>
              </ul>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section aria-labelledby="how-we-use-heading">
              <h2 id="how-we-use-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                <li>To provide travel planning and consultancy services.</li>
                <li>To share itineraries, quotations, and booking details.</li>
                <li>To process payments securely through trusted third-party platforms.</li>
                <li>To communicate updates, offers, and service enhancements.</li>
                <li>To respond to inquiries and support requests.</li>
              </ul>
            </section>

            {/* Section 3: Data Sharing & Disclosure */}
            <section aria-labelledby="data-sharing-heading">
              <h2 id="data-sharing-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                3. Data Sharing & Disclosure
              </h2>
              <p className="mb-3">We may share your information only with:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                <li>
                  <strong>Trusted travel partners and vendors</strong> (airlines, hotels, visa agents, etc.) for confirmed bookings.
                </li>
                <li>
                  <strong>Payment processors</strong> for secure transactions.
                </li>
                <li>
                  Government bodies if required by law (e.g., for visa processing).
                </li>
              </ul>
              <p className="mt-3 font-medium">
                We do <strong>not sell or rent</strong> your personal data to third parties.
              </p>
            </section>

            {/* Section 4: Data Storage & Security */}
            <section aria-labelledby="data-storage-heading">
              <h2 id="data-storage-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                4. Data Storage & Security
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                <li>
                  Your data is stored on secure servers or devices accessible only by authorized team members.
                </li>
                <li>
                  We use strong digital and physical safeguards to protect your data from unauthorized access or
                  misuse.
                </li>
              </ul>
            </section>

            {/* Section 5: Cookies & Analytics */}
            <section aria-labelledby="cookies-analytics-heading">
              <h2 id="cookies-analytics-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                5. Cookies & Analytics
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                <li>
                  We may use cookies or third-party tools (e.g., Google Analytics) to monitor website performance
                  and improve user experience.
                </li>
                <li>
                  You can manage cookies via your browser settings.
                </li>
              </ul>
            </section>

            {/* Section 6: Your Rights */}
            <section aria-labelledby="your-rights-heading">
              <h2 id="your-rights-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                6. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                <li>Request a copy of the data we hold about you.</li>
                <li>Correct or update your personal information.</li>
                <li>Withdraw consent and request deletion of your data (unless legally required to retain it).</li>
              </ul>
              <p className="mt-4">
                To make such requests, email us at:
                <a href="mailto:experience@andiamolux.com" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline ml-1">
                  experience@andiamolux.com
                </a>
              </p>
            </section>

            {/* Section 7: Third-Party Links */}
            <section aria-labelledby="third-party-links-heading">
              <h2 id="third-party-links-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                7. Third-Party Links
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Our website and communications may include links to third-party sites (e.g., hotels, tourism boards). We
                are not responsible for the privacy practices of these sites.
              </p>
            </section>

            {/* Section 8: Policy Updates */}
            <section aria-labelledby="policy-updates-heading">
              <h2 id="policy-updates-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                8. Policy Updates
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We may update this policy from time to time. The latest version will always be available on our website.
              </p>
            </section>

            {/* Back to Website Button */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-center">
              <Link href="/">
                <button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Back to Website
                </button>
              </Link>
            </div>
          </main>

          {/* Footer Section */}
          <footer className="text-center p-6 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Andiamo Lux. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;