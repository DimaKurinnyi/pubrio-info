'use client';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSaction';

export default function Page() {
  const glassSection = 'bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300';

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
          <section className="py-32">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-500/10">
                Pricing Guide
              </span>
              <h1 className={`mt-6 ${h1}`}>Pubrio Pricing & Access Guide</h1>
              <p className={`mt-6 ${body}`}>
                Pubrio pricing depends on platform usage, automation features, and data access level. Users typically start with a free trial or demo to evaluate the platform before upgrading.
              </p>
            </div>

            <div className="mx-auto mt-24 max-w-4xl space-y-16">
              <article className={`${glassSection} p-10`}>
                <h2 className={sectionTitle}>Trial & Evaluation</h2>
                <ul className="mt-6 grid gap-3 text-slate-600">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Lead data quality</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Filtering capabilities</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Platform usability</span>
                  </li>
                </ul>
              </article>

              <article className={`${glassSection} p-10`}>
                <h2 className={sectionTitle}>Subscription Structure</h2>
                <ul className="mt-6 grid gap-3 text-slate-600 md:grid-cols-2">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Users</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Data volume</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Export limits</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Automation features</span>
                  </li>
                </ul>
              </article>

              <article className={`${glassSection} p-10`}>
                <h2 className={sectionTitle}>ROI Consideration</h2>
                <ul className="mt-6 grid gap-3 text-slate-600 md:grid-cols-2">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Cost per qualified lead</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Time saved</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Outreach efficiency</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Pipeline acceleration</span>
                  </li>
                </ul>
              </article>

              {/* <article className={`${glassSection} p-10`}>
                <h2 className={sectionTitle}>Where to Find Official Pricing</h2>
                <p className={`mt-6 ${body}`}>Official pricing can change—use Pubrios official sources for the latest details.</p>
              </article> */}

              <PricingSection />

              {/* Final Premium CTA Card */}
              <section className=" relative">
                <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                  <div className="h-130 w-130 rounded-full bg-blue-400 blur-3xl opacity-20" />
                </div>
                <div className={`${glassSection} p-12 text-center`}>
                  <div className="mx-auto max-w-2xl">
                    <div className="text-sm uppercase tracking-wider text-blue-600">Official Pricing</div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">View Official Pubrio Pricing</h2>
                    <p className={`mt-4 ${body}`}>Get the current plan details directly from the source.</p>
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
                      View Official Pubrio Pricing
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
