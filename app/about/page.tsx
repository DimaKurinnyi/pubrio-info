export const metadata = { title: 'About' };

import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          This website is an independent informational resource created to provide insights about business software tools. We are not affiliated with, sponsored by, or officially connected to Pubrio
          or any other third-party brands.
        </p>
      </main>
      <Footer />
    </div>
  );
}
