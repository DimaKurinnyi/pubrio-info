'use client';

import Navbar from '@/components/Navbar';
import StakedCards from '@/components/StakedCards';

import { BadgeCheck, BrainCircuit, CheckCircle2, Eye, Megaphone, Radar, RefreshCcw, Rocket, Send, ShieldCheck, Target, TrendingUp, Users, XCircle } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Fixed Background Layers */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Blob 1 */}
        <div className="absolute -top-37.5 -left-37.5 w-125 h-125 bg-blue-500 rounded-full blur-3xl opacity-20" />
        {/* Blob 2 */}
        <div className="absolute -bottom-50 -right-37.5 w-150 h-150 bg-blue-600 rounded-full blur-3xl opacity-15" />
        {/* Blob 3 */}
        <div className="absolute top-[40%] left-[50%] w-100 h-100 bg-blue-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Radial Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.12),transparent_45%)]" />
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none mix-blend-soft-light opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* HERO SECTION */}
      <main className=" mx-auto px-6 py-0  min-h-screen">
        <section className="max-w-4xl mx-auto py-32 text-center relative">
          {/* Decorative Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10" />
          {/* Badge */}
          <div className="inline-flex px-4 py-2 bg-white/60 backdrop-blur-md border border-blue-100 rounded-full text-sm uppercase tracking-wider text-blue-600 mb-6">How It Works</div>
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">How Pubrio Works — AI-Powered B2B Prospecting Engine</h1>
          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 mt-6">Identify high-intent companies, access verified decision-makers, and focus on prospects ready to buy.</p>
          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://pubrio.pxf.io/dONgNW"
              onClick={(e) => {
                e.preventDefault();
                const url = 'https://pubrio.pxf.io/dONgNW';
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', {
                    send_to: 'AW-17889136948/YN-ICJSD8fAbELSimtJC',
                    value: 1.0,
                    currency: 'PLN',
                    event_callback: () => {
                      window.location.href = url;
                    },
                  });
                } else {
                  window.location.href = url;
                }
              }}
              className="bg-blue-600 text-white rounded-xl px-8 py-4 hover:bg-blue-500 shadow-lg shadow-blue-500/20 text-lg font-semibold transition duration-200"
              rel="noopener noreferrer">
              Start Free Trial on Pubrio
            </a>
          </div>
        </section>

        {/* 4-STEP PROCESS SECTION */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">How Pubrio Finds High-Intent Companies</h1>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Step 1 */}
            <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <div className=" flex items-center justify-center gap-2.5 mb-4">
                <Radar className="w-10 h-10 text-blue-400 " />
                <h3 className="text-xl font-semibold text-blue-700 ">Signal Collection</h3>
              </div>

              <ul className="text-slate-700 text-base space-y-2 text-left">
                <li>• Hiring activity</li>
                <li>• Funding rounds</li>
                <li>• Technology stack changes</li>
                <li>• Website traffic trends</li>
                <li>• Market expansion signals</li>
              </ul>
            </div>
            {/* Step 2 */}
            <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <div className=" flex items-center justify-center gap-2.5 mb-4">
                <BrainCircuit className="w-10 h-10 text-blue-400 " />
                <h3 className="text-xl font-semibold text-blue-700 ">AI Intent Analysis</h3>
              </div>

              <ul className="text-slate-700 text-base space-y-2 text-left">
                <li>• Matching company behavior with solution categories</li>
                <li>• Scoring likelihood of purchase</li>
                <li>• Filtering out low-probability prospects</li>
              </ul>
            </div>
            {/* Step 3 */}
            <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <div className=" flex items-center justify-center gap-2.5 mb-4">
                <BadgeCheck className="w-10 h-10 text-blue-400 " />
                <h3 className="text-xl font-semibold text-blue-700 ">Verified Contact Data</h3>
              </div>

              <ul className="text-slate-700 text-base space-y-2 text-left">
                <li>• Decision-makers</li>
                <li>• Department heads</li>
                <li>• Verified business emails</li>
                <li>• LinkedIn profiles</li>
              </ul>
              <div className="mt-4 text-blue-600 font-medium">No outdated lists. No scraping noise.</div>
            </div>
            {/* Step 4 */}
            <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <div className=" flex items-center justify-center gap-2.5 mb-4">
                <Send className="w-10 h-10 text-blue-400 " />
                <h3 className="text-xl font-semibold text-blue-700 ">Export & Outreach</h3>
              </div>
              <ul className="text-slate-700 text-base space-y-2 text-left">
                <li>• Export to CSV</li>
                <li>• Sync with CRM</li>
                <li>• Launch cold outreach campaigns</li>
                <li>• Prioritize accounts with highest buying signals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMPARISON BLOCK */}
        <section className="relative py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900">Cold Search vs AI Intent Targeting</h2>
            <p className="text-slate-600 mt-4">The difference between guessing and targeting buying intent.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Card - Traditional Prospecting */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-12 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-700 mb-8">Traditional Prospecting</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-slate-400 mt-1" />
                  <span className="text-slate-600">Random cold lists</span>
                </div>

                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-slate-400 mt-1" />
                  <span className="text-slate-600">Low reply rates</span>
                </div>

                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-slate-400 mt-1" />
                  <span className="text-slate-600">Manual filtering</span>
                </div>

                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-slate-400 mt-1" />
                  <span className="text-slate-600">Outdated data</span>
                </div>
              </div>
            </div>

            {/* Right Card - Pubrio AI Prospecting (Highlighted) */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl p-12 shadow-2xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-400/20 via-blue-500/10 to-blue-400/20 rounded-2xl blur-xl -z-10" />

              <h3 className="text-xl font-semibold text-blue-700 mb-8">Pubrio AI Prospecting</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <span className="text-blue-700 font-medium">Real-time intent signals</span>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <span className="text-blue-700 font-medium">High buying probability</span>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <span className="text-blue-700 font-medium">Pre-qualified leads</span>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <span className="text-blue-700 font-medium">Verified data</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXAMPLE WORKFLOW (Extended Flow Version) */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">How a Sales Team Uses Pubrio in Practice</h2>
          <p className="text-lg text-slate-600 mt-4 text-center">From signal detection to booked meeting — in 4 simple steps.</p>

          {/* Horizontal Flow Navigation */}
          <div className="overflow-x-auto flex items-center justify-between gap-6 mt-16 min-w-max px-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-600 flex items-center justify-center font-semibold">1</div>
              <span className="text-slate-700 font-medium whitespace-nowrap">Define ICP</span>
            </div>
            <div className="w-8 h-0.5 bg-blue-200" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-600 flex items-center justify-center font-semibold">2</div>
              <span className="text-slate-700 font-medium whitespace-nowrap">Find High-Intent Companies</span>
            </div>
            <div className="w-8 h-0.5 bg-blue-200" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-600 flex items-center justify-center font-semibold">3</div>
              <span className="text-slate-700 font-medium whitespace-nowrap">Access Decision Makers</span>
            </div>
            <div className="w-8 h-0.5 bg-blue-200" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-600 flex items-center justify-center font-semibold">4</div>
              <span className="text-slate-700 font-medium whitespace-nowrap">Launch Outreach</span>
            </div>
            <div className="w-8 h-0.5 bg-blue-200" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-600 flex items-center justify-center font-semibold">5</div>
              <span className="text-slate-700 font-medium whitespace-nowrap">Track & Optimize</span>
            </div>
          </div>

          {/* Detailed Step Cards */}

          <StakedCards />
          {/* Results Block */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-blue-200 rounded-2xl shadow-2xl p-12 text-center">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Real Impact</h3>
              <p className="text-slate-700 mb-6">Companies using intent-based targeting report:</p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div className="text-blue-600 font-semibold text-lg">✔ 30–50% higher reply rates</div>
                <div className="text-blue-600 font-semibold text-lg">✔ Shorter sales cycles</div>
                <div className="text-blue-600 font-semibold text-lg">✔ Better lead quality</div>
                <div className="text-blue-600 font-semibold text-lg">✔ Lower cost per acquisition</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS IT FOR SECTION */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Who Is It For</h1>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* B2B SaaS sales teams */}
            <div className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Rocket className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">B2B SaaS sales teams</div>
            </div>
            {/* Marketing agencies */}
            <div className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Megaphone className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">Marketing agencies</div>
            </div>
            {/* SDR teams */}
            <div className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Users className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">SDR teams</div>
            </div>
            {/* Growth teams */}
            <div className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">Growth teams</div>
            </div>
            {/* Lead generation specialists */}
            <div className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Target className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">Lead generation specialists</div>
            </div>
          </div>
        </section>

        {/* DATA ACCURACY & COMPLIANCE SECTION */}
        <section className="py-24 ">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Data Accuracy & Compliance</h1>
          <div className="relative overflow-hidden max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 mt-16">
            {/* Light Reflection */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
            </div>
            {/* Grid Layout with Icons */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-7 h-7 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">GDPR-aware sourcing</h4>
                  <p className="text-slate-600 text-sm">Compliant data acquisition aligned with privacy standards.</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <RefreshCcw className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Regular data updates</h4>
                  <p className="text-slate-600 text-sm">Continuously refreshed records to maintain accuracy.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Verified business contacts</h4>
                  <p className="text-slate-600 text-sm">Validated B2B emails and decision-maker profiles.</p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <Eye className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Transparent methodology</h4>
                  <p className="text-slate-600 text-sm">Clear sourcing process and structured validation methods.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA BLOCK */}
        <section className="max-full mx-auto relative overflow-hidden bg-white/80 backdrop-blur-xl border border-blue-200 rounded-2xl shadow-2xl p-16 mt-24 mb-32 text-center">
          {/* Light Reflection */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative z-10">Start Finding Companies Ready to Buy</h1>
          <p className="text-lg text-slate-600 mb-10 relative z-10">Stop guessing. Start targeting intent.</p>
          <a
            href="https://pubrio.pxf.io/dONgNW"
            onClick={(e) => {
              e.preventDefault();
              const url = 'https://pubrio.pxf.io/dONgNW';
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-17889136948/YN-ICJSD8fAbELSimtJC',
                  value: 1.0,
                  currency: 'PLN',
                  event_callback: () => {
                    window.location.href = url;
                  },
                });
              } else {
                window.location.href = url;
              }
            }}
            className="px-10 py-5 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/30 font-semibold transition duration-200"
            rel="noopener noreferrer">
            Start Free Trial
          </a>
        </section>
      </main>
    </>
  );
}
