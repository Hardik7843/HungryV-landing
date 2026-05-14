import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-light to-bg-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 text-text-primary border border-white/20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to">
          Privacy Policy — Hungry V
        </h1>
        <p className="text-sm font-medium text-text-to mb-10">
          Last Updated: May 2026
        </p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <p>
              Welcome to Hungry V. This Privacy Policy explains how Hungry V
              collects, uses, stores, and protects user information while using
              our platform and services.
            </p>
            <p className="mt-4">
              Hungry V is a digital restaurant management and food ordering
              platform that allows customers to scan QR codes to browse menus,
              place orders, and track food orders in real time. The platform
              also helps restaurant staff manage orders and table occupancy
              efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              Hungry V may collect the following information during signup,
              login, and platform usage:
            </p>

            <h3 className="text-xl font-semibold mb-2 text-text-primary mt-6">
              Personal Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-text-primary mt-6">
              Authentication Information
            </h3>
            <p className="mb-2">Users may authenticate using:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Google Sign-In</li>
              <li>Email and password</li>
            </ul>
            <p className="mb-4">
              Passwords are securely encrypted and are never stored or viewable
              in plain text.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-text-primary mt-6">
              Usage Information
            </h3>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Device information</li>
              <li>Browser type</li>
              <li>Login activity</li>
              <li>Order activity</li>
              <li>Session and authentication information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-text-primary mt-6">
              Cookies
            </h3>
            <p className="mb-2">
              Hungry V uses cookies and session technologies for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Authentication</li>
              <li>Authorization</li>
              <li>Session management</li>
              <li>Security purposes</li>
              <li>Improving user experience</li>
            </ul>
            <p>Disabling cookies may affect certain platform functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              2. How We Use Information
            </h2>
            <p className="mb-2">The information collected may be used for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>User authentication and account management</li>
              <li>Processing and tracking food orders</li>
              <li>Sending real-time order updates</li>
              <li>Sending invoices and order confirmations</li>
              <li>Improving platform performance and security</li>
              <li>Preventing fraudulent or unauthorized activities</li>
              <li>Customer support and communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              3. Information Shared with Restaurants
            </h2>
            <p className="mb-2">
              Hungry V limits the information shared with restaurants.
            </p>
            <p className="mb-2">Restaurants may receive:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Customer name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Order details</li>
            </ul>
            <p>
              Sensitive authentication data, passwords, and internal system
              information are never shared with restaurants.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              4. Data Security
            </h2>
            <p className="mb-2">
              Hungry V takes reasonable technical and organizational measures to
              protect user information.
            </p>
            <p className="mb-2">This includes:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Encrypted password storage</li>
              <li>Secure authentication systems</li>
              <li>Restricted internal access</li>
              <li>Session security mechanisms</li>
            </ul>
            <p>
              However, no internet-based system can be guaranteed to be
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              5. Third-Party Services
            </h2>
            <p className="mb-2">
              Hungry V may use trusted third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Authentication providers (such as Google)</li>
              <li>Cloud hosting</li>
              <li>Analytics</li>
              <li>Notification and email delivery systems</li>
            </ul>
            <p>
              These services may process information as required to provide
              their functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              6. User Rights
            </h2>
            <p className="mb-2">Users may request:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Access to their data</li>
              <li>Correction of inaccurate data</li>
              <li>Account deletion requests</li>
              <li>Removal of stored information where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              7. Data Retention
            </h2>
            <p className="mb-2">Hungry V may retain information for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-text-to">
              <li>Legal obligations</li>
              <li>Security purposes</li>
              <li>Transaction records</li>
              <li>Operational requirements</li>
            </ul>
            <p>Data may be deleted or anonymized when no longer required.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              8. Children’s Privacy
            </h2>
            <p>
              Hungry V is not intended for children under the age required by
              local laws to create online accounts independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              9. Changes to This Policy
            </h2>
            <p>
              Hungry V may update this Privacy Policy periodically. Continued
              use of the platform after updates indicates acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              10. Contact
            </h2>
            <p className="mb-4">
              For questions regarding this Privacy Policy, users may contact:
            </p>
            <div className="bg-bg-dark p-4 rounded-xl border border-gray-200 inline-block">
              <a
                href="mailto:reach@raiboinfotech.com"
                className="text-gradient-from font-medium hover:underline"
              >
                reach@raiboinfotech.com
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
