import { FileSpreadsheet, Send, ShieldCheck, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  justify-center bg-white font-sans min-w-full ">
      <div
        className="relative overflow-visible bg-[#f6f9ff] w-full bg-no-repeat bg-left"
        style={{
          backgroundImage: "url('/assets/p-home-pic.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          backgroundSize: 'auto',
        }}>
        {/* gradient circle in top-right that overflows the block */}
        {/* <div
          className="absolute -right-24 top-24 w-96 h-96 rounded-full pointer-events-none z-0 border border-black"
          style={{
            background: 'radial-gradient(circle at center, rgba(1,60,243,0.35) 0%, rgba(124,156,255,0.35) 60%)',
            filter: 'blur(40px)',
          }}></div> */}
        <div className="relative z-10 flex flex-col items-center justify-center py-20">
          <h1 className=" text-6xl font-bold bg-[linear-gradient(rgb(1,60,243)_0%,rgb(124,156,255)_100%)] bg-clip-text text-transparent pb-2">Pubrio AI-powered</h1>
          <h1 className="text-4xl font-bold text-black pb-4">B2B Lead Generation Platform</h1>
          <h3 className=" font-semibold text-gray-500">Find verified business contacts and drive growth with AI-driven insights and automation.</h3>
          <a href="https://pubrio.pxf.io/dONgNW"> Sign up for free</a>
        </div>
      </div>
      <div className="px-40 py-12  ">
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-black">What is Pubrio?</h1>
          <p className="text-gray-700 mt-4   text-2xl">
            Pubrio is an AI-powered business lead generation and sales intelligence platform. Using advanced data models, Pubrio provides access to verified decision-maker contacts, insights, and
            tools designed to help sales and marketing teams identify quality leads and engage businesses more effectively.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-[#f6f9ff] px-40 py-12 ">
        <h1 className="text-4xl font-bold text-black text-center  ">How it works</h1>

        <div className="mt-8 text-black flex items-start justify-center gap-16">
          {/* left */}
          <div className=" flex flex-col gap-4 items-center justify-center">
            <div className="">
              <div className=" flex items-center gap-4">
                <Target className='text-blue-500 w-15 h-15 p-2 border border-blue-100 bg-blue-100 rounded-xl' />
                <div className="">
                  <h2 className="text-xl font-bold">Intelligent B2B prospect search</h2>
                  <p>Smarter </p>
                </div>
              </div>
              <div className=" flex items-center gap-4 mt-4">
                <ShieldCheck className='text-blue-500 w-15 h-15 p-2 border border-blue-100 bg-blue-100 rounded-xl' />
                <div className="">
                  <h2 className="text-xl font-bold">Verified contact profiles and metadata</h2>
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
                <FileSpreadsheet className='text-blue-500 w-15 h-15 p-2 border border-blue-100 bg-blue-100 rounded-xl' />
                <div className="">
                  <h2 className="text-xl font-bold">Targeted filters and industry insights</h2>
                  <p>Smarter </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex items-center gap-4 mt-4">
                <Send className='text-blue-500 w-15 h-15 p-2 border border-blue-100 bg-blue-100 rounded-xl' />
                <div className="">
                  <h2 className="text-xl font-bold">Automated outreach support</h2>
                  <p>Smarter </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold text-black mt-8">Who uses Pubrio?</h1>

        <div className="">
          <div className="">
            <div className="">
              <img src="" alt="" />
              <p>Sales & Business Development teams </p>
            </div>
            <div className="">
              <img src="" alt="" />
              <p>Marketing and growth teams </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src="" alt="" />
              <p>Agencies and consulting services </p>
            </div>
            <div className="">
              <img src="" alt="" />
              <p>Companies targeting B2B expansion </p>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl font-bold text-black mt-8">Get started with Pubrio and unlock better B2B leads</h1>
          <a href="https://pubrio.pxf.io/dONgNW"> Sign up for free</a>
        </div>
      </div>

      <footer>
        <p className="text-gray-500 text-sm mt-8">This page provides informational content about Pubrio. Pubrio trademarks belong to their respective owners.</p>
      </footer>
    </div>
  );
}
