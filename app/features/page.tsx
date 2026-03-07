'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Page() {
  const glassCard = 'bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300';

  const badge = 'inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-md border border-blue-100 rounded-full text-sm uppercase tracking-wider text-blue-600';

  const h1 = 'text-4xl md:text-6xl font-bold tracking-tight text-slate-900';
  const sectionTitle = 'text-2xl md:text-3xl font-semibold text-slate-900';
  const body = 'text-lg text-slate-600 leading-relaxed';
  const bulletDot = 'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400';
  const bulletRow = 'flex items-start gap-3';

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

      <main className="relative overflow-x-hidden mx-auto px-6 py-0 min-h-screen pt-20">
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Hero */}
          <section className="py-32">
            <div className="mx-auto max-w-4xl text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-500/10">
                Platform capabilities
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className={`mt-6 ${h1}`}>
                Pubrio Platform Features Overview
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={`mt-6 ${body}`}>
                Pubrio is designed to help B2B sales teams identify and prioritize high-probability prospects using AI-driven data analysis. Below is an overview of the core capabilities that make the
                platform effective for outbound and growth teams.
              </motion.p>
            </div>

            {/* 5 premium glass cards stacked vertically */}
            <div className="mx-auto mt-24 flex flex-col items-center max-w-4xl space-y-16">
              <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`${glassCard} p-10`}>
                <h2 className={sectionTitle}>AI-Powered Prospect Discovery</h2>
                <ul className="mt-6 grid gap-3 text-slate-600 md:grid-cols-2">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Company growth patterns</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Hiring trends</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Technology adoption</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Market activity indicators</span>
                  </li>
                </ul>
                <p className={`mt-6 ${body}`}>Use signal-based insights to quickly surface accounts that match your ICP—so outbound stays focused on the highest probability targets.</p>
              </motion.article>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex md:flex-row flex-col items-center justify-between gap-6">
                <article className={`${glassCard} p-10 md:w-[45%]`}>
                  <h2 className={sectionTitle}>Verified B2B Contact Data</h2>
                  <ul className="mt-6 grid gap-3 text-slate-600">
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Identify stakeholders</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Build targeted prospect lists</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Reduce manual research</span>
                    </li>
                  </ul>
                </article>

                <article className={`${glassCard} p-10 md:w-[45%]`}>
                  <h2 className={sectionTitle}>Advanced Filtering & Targeting</h2>
                  <ul className="mt-6 grid gap-3 text-slate-600 md:grid-cols-2">
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Industry</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Company size</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Geography</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Growth indicators</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Technology stack</span>
                    </li>
                  </ul>
                </article>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex md:flex-row flex-col items-center justify-between gap-6">
                <article className={`${glassCard} p-10 md:w-[45%] min-h-70`}>
                  <h2 className={sectionTitle}>Intent-Based Targeting</h2>
                  <p className={`mt-6 ${body}`}>
                    Prioritize accounts that are <span className="font-semibold text-blue-600">actively exploring solutions</span> so your team focuses on buyers with immediate needs.
                  </p>
                </article>

                <article className={`${glassCard} p-10 md:w-[45%] min-h-70`}>
                  <h2 className={sectionTitle}>Workflow & Export Capabilities</h2>
                  <ul className="mt-6 grid gap-3 text-slate-600">
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Export lead lists</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>CRM sync</span>
                    </li>
                    <li className={bulletRow}>
                      <span className={bulletDot} />
                      <span>Outreach campaigns</span>
                    </li>
                  </ul>
                </article>
              </motion.div>

              {/* CTA Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`${glassCard} p-12 text-center w-full`}>
                <div className="mx-auto max-w-2xl">
                  <div className="text-sm uppercase tracking-wider text-blue-600">Official Resource</div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">Visit Official Pubrio Website</h2>
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
                    className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-500">
                    Visit Pubrio
                  </a>
                </div>
              </motion.section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
