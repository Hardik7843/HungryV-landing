import React from "react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-light to-bg-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 text-text-primary border border-white/20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to">
          Terms of Service — Hungry V
        </h1>
        <p className="text-sm font-medium text-text-to mb-10">
          Last Updated: May 2026
        </p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <p>
              These Terms of Service govern the use of Hungry V and its related
              services.
            </p>
            <p className="mt-4">
              By accessing or using Hungry V, users agree to comply with these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              1. Platform Description
            </h2>
            <p className="mb-2">
              Hungry V provides a restaurant management and digital food
              ordering platform that enables:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>QR-based menu access</li>
              <li>Table ordering</li>
              <li>Real-time order tracking</li>
              <li>Restaurant staff order management</li>
              <li>Table occupancy management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              2. User Accounts
            </h2>
            <p className="mb-2">Users may create accounts using:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Google authentication</li>
              <li>Email and password authentication</li>
            </ul>
            <p className="mb-2 mt-4">Users are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Maintaining account security</li>
              <li>Providing accurate information</li>
              <li>Preventing unauthorized access to their accounts</li>
            </ul>
            <p>
              Hungry V reserves the right to suspend accounts involved in misuse
              or unauthorized activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              3. Restaurant Responsibilities
            </h2>
            <p className="mb-2">
              Restaurants using Hungry V are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Maintaining accurate menu information</li>
              <li>Managing order fulfillment</li>
              <li>Ensuring pricing accuracy</li>
              <li>
                Complying with applicable food safety and legal regulations
              </li>
            </ul>
            <p>
              Hungry V is not responsible for food preparation, delivery
              quality, or restaurant operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              4. Acceptable Use
            </h2>
            <p className="mb-2">Users and restaurants agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Misuse the platform</li>
              <li>Attempt unauthorized system access</li>
              <li>Interfere with platform security</li>
              <li>Upload malicious software or harmful content</li>
              <li>Use Hungry V for unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              5. Intellectual Property
            </h2>
            <p className="mb-2">
              All platform content, branding, software, designs, and systems
              related to Hungry V remain the property of Hungry V unless
              otherwise stated.
            </p>
            <p>Unauthorized copying or redistribution is prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              6. Service Availability
            </h2>
            <p className="mb-2">
              Hungry V aims to provide reliable service but does not guarantee
              uninterrupted availability.
            </p>
            <p className="mb-2 mt-4">
              The platform may occasionally experience:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Maintenance downtime</li>
              <li>Technical failures</li>
              <li>Third-party service interruptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              7. Limitation of Liability
            </h2>
            <p className="mb-2">Hungry V shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Restaurant operational issues</li>
              <li>Order fulfillment problems</li>
              <li>Indirect or incidental damages</li>
              <li>Temporary service interruptions</li>
              <li>User-generated content or restaurant-provided information</li>
            </ul>
            <p>Use of the platform is at the user&apos;s own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              8. Termination
            </h2>
            <p>
              Hungry V may suspend or terminate access for violations of these
              terms or activities that may harm the platform or its users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              9. Changes to Terms
            </h2>
            <p className="mb-2">
              Hungry V reserves the right to modify these Terms of Service at
              any time.
            </p>
            <p>
              Continued use of the platform after changes indicates acceptance
              of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              10. Contact
            </h2>
            <p className="mb-4">For legal or support inquiries:</p>
            <div className="bg-bg-dark p-4 rounded-xl border border-gray-200 inline-block">
              <a
                href="mailto:support@hungryv.com"
                className="text-gradient-from font-medium hover:underline"
              >
                support@hungryv.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-gradient-from to-gradient-to text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
