export const metadata = { title: 'Privacy Policy' };

import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed">
          This website does not collect personal data such as names or payment information. We may use cookies and basic analytics tools to understand how visitors interact with the site. This website
          may contain affiliate links that redirect to third-party websites with their own privacy policies.
        </p>
      </main>
      <Footer />
    </div>
  );
}
