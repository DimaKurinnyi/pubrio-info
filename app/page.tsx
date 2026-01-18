import { BriefcaseBusiness, Earth, FileSpreadsheet, Handshake, Send, ShieldCheck, Speech, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  justify-center bg-white font-sans min-w-full ">
      <div className="relative overflow-visible bg-[#f6f9ff] w-full bg-none md:bg-[url('/assets/p-home-pic.webp')] md:bg-no-repeat md:bg-left md:bg-auto">
        {/* gradient circle in top-right that overflows the block */}
        {/* <div
          className="absolute -right-24 top-24 w-96 h-96 rounded-full pointer-events-none z-0 border border-black"
          style={{
            background: 'radial-gradient(circle at center, rgba(1,60,243,0.35) 0%, rgba(124,156,255,0.35) 60%)',
            filter: 'blur(40px)',
          }}></div> */}
        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 md:px-40">
          <h1 className="text-4xl md:text-6xl font-bold bg-[linear-gradient(rgb(1,60,243)_0%,rgb(124,156,255)_100%)] bg-clip-text text-transparent pb-2">Pubrio AI-powered</h1>
          <h1 className="text-2xl md:text-4xl font-bold text-black pb-4">B2B Lead Generation Platform</h1>
          <h3 className=" font-semibold text-gray-500 text-[10px] text-center md:text-[16px]">Find verified B2B leads and streamline your prospecting with AI-powered insights.</h3>
          <a href="https://pubrio.pxf.io/dONgNW" className="mt-4 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Sign up for free
          </a>
        </div>
      </div>
      <div className="px-6 md:px-40 py-12  ">
        <div className="mt-8">
          <h1 className="text-2xl md:text-4xl font-bold text-black">What is Pubrio?</h1>
          <p className="text-gray-700 mt-4   md:text-2xl">
            Pubrio is an AI-powered business lead generation and sales intelligence platform. Using advanced data models, Pubrio provides access to verified decision-maker contacts, insights, and
            tools designed to help sales and marketing teams identify quality leads and engage businesses more effectively.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-[#f6f9ff] px-6 md:px-40 py-12 md:bg-[url('/assets/p-home-pic2.webp')] md:bg-no-repeat md:bg-right md:bg-auto ">
        <h1 className="text-2xl md:text-4xl font-bold text-black text-center  ">How it works</h1>

        <div className="mt-8 text-black flex flex-col md:flex-row items-start justify-center md:gap-16">
          {/* left */}
          <div className=" flex flex-col gap-4 items-center justify-center">
            <div className="">
              <div className=" flex items-center gap-4">
                <Target className="text-blue-500  md:w-15 md:h-15 w-10 h-10 p-1 border border-blue-100 bg-blue-100 rounded-xl shadow-lg" />
                <div className="">
                  <h2 className="md:text-xl font-bold">Intelligent B2B prospect search</h2>
                  <p>Smarter </p>
                </div>
              </div>
              <div className=" flex items-center gap-4 mt-4">
                <ShieldCheck className="text-blue-500 md:w-15 md:h-15 w-10 h-10  p-1 border border-blue-100 bg-blue-100 rounded-xl shadow-lg" />
                <div className="">
                  <h2 className="md:text-xl font-bold">Verified contact profiles and metadata</h2>
                  <p>Smarter </p>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
          {/* right */}
          <div className="">
            <div className="">
              <div className=" flex items-center gap-4">
                <FileSpreadsheet className="text-blue-500 md:w-15 md:h-15 w-10 h-10  p-1 border border-blue-100 bg-blue-100 rounded-xl shadow-lg" />
                <div className="">
                  <h2 className="md:text-xl font-bold">Targeted filters and industry insights</h2>
                  <p>Smarter </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex items-center gap-4 mt-4">
                <Send className="text-blue-500 md:w-15 md:h-15 w-10 h-10 p-1 border border-blue-100 bg-blue-100 rounded-xl shadow-lg" />
                <div className="">
                  <h2 className="md:text-xl font-bold">Automated outreach support</h2>
                  <p>Smarter </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8  px-6 md:px-40 py-12">
        <h1 className="md:text-4xl text-2xl text-center md:text-start font-bold text-black ">Who uses Pubrio?</h1>

        <div className="flex flex-col gap-4  items-center justify-center mt-8">
          <div className="border border-blue-100 bg-blue-100 rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-4 ">
              <Handshake className="text-blue-500 md:w-15 md:h-15 w-10 h-10 p-1 " />
              <p className="md:text-xl font-bold">Sales & Business Development teams </p>
            </div>
            <div className="flex items-center gap-4">
              <Speech className="text-blue-500 md:w-15 md:h-15 w-10 h-10 p-1" />
              <p className="md:text-xl font-bold">Marketing and growth teams </p>
            </div>

            <div className="flex items-center gap-4">
              <BriefcaseBusiness className="text-blue-500 md:w-15 md:h-15 w-10 h-10 p-1" />
              <p className="md:text-xl font-bold">Agencies and consulting services </p>
            </div>
            <div className="flex items-center gap-4">
              <Earth className="text-blue-500 md:w-15 md:h-15 w-10 h-10 p-1" />
              <p className="md:text-xl font-bold">Companies targeting B2B expansion </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8  px-6 md:px-40 ">
        <div className="bg-[#f6f9ff] py-12">
          <h1 className="md:text-4xl text-2xl font-semibold text-black text-center ">Get started with Pubrio and unlock better B2B leads</h1>
          <div className=" flex items-center justify-center">
            <a href="https://pubrio.pxf.io/dONgNW" className="mt-4 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Sign up for free
            </a>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center mt-8">
        <p className="text-gray-500 md:text-sm text-[12px] text-center mt-8">This page provides informational content about Pubrio. Pubrio trademarks belong to their respective owners.</p>
      </footer>
    </div>
  );
}
