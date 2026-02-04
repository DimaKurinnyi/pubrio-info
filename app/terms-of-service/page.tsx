export const metadata = { title: 'Terms of Service' };

import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-700 leading-relaxed">
          This website is provided for informational purposes only. We do not provide Pubrio services or accounts. All trademarks and brand names belong to their respective owners.
        </p>
      </main>
      <Footer />
    </div>
  );
}
