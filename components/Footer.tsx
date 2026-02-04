export default function Footer() {
  return (
    <footer className="mt-8 w-full">
      <div className="max-w-6xl mx-auto md:px-6 md:py-6 p-1 flex flex-col items-center justify-between">
        <nav className=" flex  gap-1 md:text-sm text-[10px]">
          <a href="/about" className="text-gray-700 hover:underline">
            About
          </a>
          <span className="text-gray-400">|</span>
          <a href="/contact" className="text-gray-700 hover:underline">
            Contact
          </a>
          <span className="text-gray-400">|</span>
          <a href="/privacy-policy" className="text-gray-700 hover:underline">
            Privacy Policy
          </a>
          <span className="text-gray-400">|</span>
          <a href="/terms-of-service" className="text-gray-700 hover:underline">
            Terms of Service
          </a>
          <span className="text-gray-400">|</span>
          <a href="/affiliate-disclosure" className="text-gray-700 hover:underline">
            Affiliate Disclosure
          </a>
        </nav>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">This is an independent website and not the official Pubrio website. All trademarks belong to their respective owners.</p>
    </footer>
  );
}
