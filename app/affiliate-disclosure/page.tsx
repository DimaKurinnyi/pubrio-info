export const metadata = { title: 'Affiliate Disclosure' };

import Footer from '../../components/Footer';

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
        <p className="text-gray-700 leading-relaxed">
          This website contains affiliate links. This means we may receive a commission if you sign up through these links. This website is not the official Pubrio website and does not represent
          Pubrio.
        </p>
      </main>
      <Footer />
    </div>
  );
}
