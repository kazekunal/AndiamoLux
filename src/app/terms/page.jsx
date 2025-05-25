import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for Andiamo Lux travel planning services.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: "https://www.andiamolux.com/terms",
  },
};


const TermsAndConditionsPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 font-inter p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-2xl rounded-xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-blue-600 dark:bg-blue-700 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Andiamo Lux</h1>
            </div>
            <p className="text-sm opacity-90">Terms & Conditions – May 2025</p>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="p-6 sm:p-8 md:p-10 space-y-8 text-slate-700 dark:text-slate-300">
          <p className="text-lg leading-relaxed">
            Welcome to Andiamo Lux. We specialize in personalized travel planning through our dedicated travel
            advisors. By engaging with our team for your travel needs, you agree to the terms outlined below.
          </p>

          {/* Section 1: Personalized Travel Service */}
          <section aria-labelledby="personalized-service-heading">
            <h2 id="personalized-service-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              1. Personalized Travel Service
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                All bookings are handled personally by our travel consultants, not through online transactions.
              </li>
              <li>
                Travel itineraries, pricing, and services will be discussed and confirmed directly with you via
                WhatsApp, phone, email, or in-person consultation.
              </li>
              <li>
                A booking is considered confirmed only after client approval and complete payment of the
                discussed amount.
              </li>
            </ul>
          </section>

          {/* Section 2: Payments */}
          <section aria-labelledby="payments-heading">
            <h2 id="payments-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              2. Payments
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                All payments are to be made through secure, mutually agreed methods (e.g., UPI, bank transfer,
                authorized gateways).
              </li>
              <li>
                Payment instructions will be shared by your designated travel consultant.
              </li>
              <li>
                Invoices and receipts will be provided upon request or upon confirmation of payment.
              </li>
            </ul>
          </section>

          {/* Section 3: Cancellations & Refunds */}
          <section aria-labelledby="cancellations-refunds-heading">
            <h2 id="cancellations-refunds-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              3. Cancellations & Refunds
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                Cancellation terms are specific to each itinerary and dependent on airline, hotel, and vendor
                policies.
              </li>
              <li>
                Any refund request must be communicated to your Andiamo Lux consultant in writing.
              </li>
              <li>
                Service fees may apply for cancellations or changes, and refunds will be processed as per
                partner terms.
              </li>
            </ul>
          </section>

          {/* Section 4: Amendments to Itinerary */}
          <section aria-labelledby="amendments-itinerary-heading">
            <h2 id="amendments-itinerary-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              4. Amendments to Itinerary
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                Modifications after confirmation are subject to availability and vendor approval.
              </li>
              <li>
                Additional charges may apply based on the nature of the change.
              </li>
            </ul>
          </section>

          {/* Section 5: Travel Documents & Visa */}
          <section aria-labelledby="travel-documents-visa-heading">
            <h2 id="travel-documents-visa-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              5. Travel Documents & Visa
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                Clients are responsible for providing accurate personal information and valid travel documents.
              </li>
              <li>
                Andiamo Lux can assist with visa applications and guidance, but approval is at the discretion of
                the consulate or embassy.
              </li>
              <li>
                We are not liable for delays or denials in visa processing.
              </li>
            </ul>
          </section>

          {/* Section 6: Liability & Responsibility */}
          <section aria-labelledby="liability-responsibility-heading">
            <h2 id="liability-responsibility-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              6. Liability & Responsibility
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                Andiamo Lux acts as a coordinator between the client and service providers (airlines, hotels, etc.)
                and cannot be held liable for service failures, delays, cancellations, or unforeseen disruptions.
              </li>
              <li>
                We do not guarantee services beyond the scope of confirmed bookings.
              </li>
            </ul>
          </section>

          {/* Section 7: Travel Insurance */}
          <section aria-labelledby="travel-insurance-heading">
            <h2 id="travel-insurance-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              7. Travel Insurance
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                We strongly recommend purchasing travel insurance.
              </li>
              <li>
                Our team can assist in connecting you with reliable insurance providers, but coverage decisions
                are at your discretion.
              </li>
            </ul>
          </section>

          {/* Section 8: Client Conduct */}
          <section aria-labelledby="client-conduct-heading">
            <h2 id="client-conduct-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              8. Client Conduct
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4 text-slate-600 dark:text-slate-400">
              <li>
                Clients are expected to comply with local laws and conduct themselves respectfully throughout
                the trip.
              </li>
              <li>
                Any misconduct may lead to denial of services without refund.
              </li>
            </ul>
          </section>

          {/* Section 9: Intellectual Property */}
          <section aria-labelledby="intellectual-property-heading">
            <h2 id="intellectual-property-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              9. Intellectual Property
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              All content, branding, and material on the Andiamo Lux website and social media are the
              intellectual property of Andiamo Lux and may not be reused without permission.
            </p>
          </section>

          {/* Section 10: Governing Law */}
          <section aria-labelledby="governing-law-heading">
            <h2 id="governing-law-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              10. Governing Law
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of
              the courts in New Delhi.
            </p>
          </section>

          {/* Section 11: Policy Updates */}
          <section aria-labelledby="policy-updates-tc-heading"> {/* Changed id to avoid conflict with privacy policy */}
            <h2 id="policy-updates-tc-heading" className="text-2xl font-semibold text-blue-600 dark:text-blue-500 mb-4 border-b-2 border-blue-200 dark:border-blue-700 pb-2">
              11. Policy Updates
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Andiamo Lux reserves the right to update these terms from time to time. The latest version will
              always be available on our website.
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
  );
};

export default TermsAndConditionsPage;