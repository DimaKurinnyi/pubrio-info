export const metadata = { title: 'Contact' };

import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this website, please contact us at:
          <br />
          Email: dimakurinnoy8@gmail.com
        </p>
      </main>
      <Footer />
    </div>
  );
}
