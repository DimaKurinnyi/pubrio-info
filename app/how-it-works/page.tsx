'use client';

import Navbar from '@/components/Navbar';
import StakedCards from '@/components/StakedCards';
import { motion } from 'framer-motion';

import { BadgeCheck, BrainCircuit, CheckCircle2, Eye, Megaphone, Radar, RefreshCcw, Rocket, Send, ShieldCheck, Target, TrendingUp, Users, XCircle } from 'lucide-react';

export default function Page() {
  const HorizontalItems = [
    { number: 1, title: 'Define ICP' },
    { number: 2, title: 'Find High-Intent Companies' },
    { number: 3, title: 'Access Decision Makers' },
    { number: 4, title: 'Launch Outreach' },
    { number: 5, title: 'Track & Optimize' },
  ];
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
      <main className=" mx-auto px-6 py-0  min-h-screen ">
        <section className="max-w-4xl mx-auto md:py-32 pt-32 text-center relative">
          {/* Decorative Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10" />
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-500/10">
            How It Works
          </motion.span>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl mt-6 font-bold tracking-tight text-slate-900">
            How Pubrio Works — AI-Powered B2B Prospecting Engine
          </motion.h1>
          {/* Subheading */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-slate-600 mt-6">
            Identify high-intent companies, access verified decision-makers, and focus on prospects ready to buy.
          </motion.p>
          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 flex justify-center">
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
          </motion.div>
        </section>

        {/* 4-STEP PROCESS SECTION */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            How Pubrio Finds High-Intent Companies
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
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
            </motion.div>
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
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
            </motion.div>
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
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
            </motion.div>
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-10 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
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
            </motion.div>
          </div>
        </section>

        {/* COMPARISON BLOCK */}
        <section className="relative md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900">Cold Search vs AI Intent Targeting</h2>
            <p className="text-slate-600 mt-4">The difference between guessing and targeting buying intent.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Card - Traditional Prospecting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-12 shadow-lg">
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
            </motion.div>

            {/* Right Card - Pubrio AI Prospecting (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl p-12 shadow-2xl">
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
            </motion.div>
          </div>
        </section>

        {/* EXAMPLE WORKFLOW (Extended Flow Version) */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">How a Sales Team Uses Pubrio in Practice</h2>
            <p className="text-lg text-slate-600 mt-4 text-center">From signal detection to booked meeting — in 4 simple steps.</p>
          </motion.div>

          {/* Horizontal Flow Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-x-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mt-16 min-w-max px-4">
            {HorizontalItems.map((item) => (
              <>
                {' '}
                <div key={item.number} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-600 flex items-center justify-center font-semibold">{item.number}</div>
                  <span className="text-slate-700 font-medium whitespace-nowrap">{item.title}</span>
                </div>
                {item.number !== 5 && <div className="md:w-8 h-0.5 bg-blue-200" />}
              </>
            ))}
          </motion.div>

          {/* Detailed Step Cards */}

          <StakedCards />
          {/* Results Block */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="md:mt-24 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-blue-200 rounded-2xl shadow-2xl md:p-12 p-6 text-center">
              <h3 className="md:text-2xl text-lg font-semibold text-slate-900 mb-8">Real Impact</h3>
              <p className="text-slate-700 mb-6">Companies using intent-based targeting report:</p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div className="text-blue-600 font-semibold md:text-lg">✔ 30–50% higher reply rates</div>
                <div className="text-blue-600 font-semibold md:text-lg">✔ Shorter sales cycles</div>
                <div className="text-blue-600 font-semibold md:text-lg">✔ Better lead quality</div>
                <div className="text-blue-600 font-semibold md:text-lg">✔ Lower cost per acquisition</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHO IS IT FOR SECTION */}
        <section className="md:py-24 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Who Is It For
          </motion.h1>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* B2B SaaS sales teams */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Rocket className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">B2B SaaS sales teams</div>
            </motion.div>
            {/* Marketing agencies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Megaphone className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">Marketing agencies</div>
            </motion.div>
            {/* SDR teams */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Users className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">SDR teams</div>
            </motion.div>
            {/* Growth teams */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">Growth teams</div>
            </motion.div>
            {/* Lead generation specialists */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/70 border border-blue-100 rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
              {/* Light Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
              </div>
              <Target className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <div className="text-slate-700 font-medium relative z-10">Lead generation specialists</div>
            </motion.div>
          </div>
        </section>

        {/* DATA ACCURACY & COMPLIANCE SECTION */}
        <section className="py-24 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Data Accuracy & Compliance
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 mt-16">
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
          </motion.div>
        </section>

        {/* FINAL CTA BLOCK */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-full mx-auto relative overflow-hidden bg-white/80 backdrop-blur-xl border border-blue-200 rounded-2xl shadow-2xl md:p-16 p-7 mt-24 mb-32 text-center">
          {/* Light Reflection */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-gradient-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 relative z-10">Start Finding Companies Ready to Buy</h1>
          <p className="md:text-lg text-slate-600 mb-10 relative z-10">Stop guessing. Start targeting intent.</p>
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
            className="md:px-10 md:py-5 px-5 py-2.5 md:text-lg text-md bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/30 font-semibold transition duration-200"
            rel="noopener noreferrer">
            Start Free Trial
          </a>
        </motion.section>
      </main>
    </>
  );
}
