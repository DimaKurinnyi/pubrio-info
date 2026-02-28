import Navbar from '@/components/Navbar';

export default function Page() {
  const glassPanel = 'bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300';

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
              <div className={badge}>Use Cases</div>
              <h1 className={`mt-6 ${h1}`}>Who Uses Pubrio and How</h1>
              <p className={`mt-6 ${body}`}>Pubrio supports modern go-to-market teams that need a tighter loop between market signals, high-quality contact data, and focused outbound execution.</p>
            </div>

            <div className="mx-auto mt-24 max-w-4xl space-y-16">
              <article className={`${glassPanel} border-l-4 border-l-blue-400/40 p-10`}>
                <h2 className={sectionTitle}>B2B Sales Teams</h2>
                <ul className="mt-6 grid gap-3 text-slate-600">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Ideal customer profile targeting</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Discover decision makers</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Build outbound lists</span>
                  </li>
                </ul>
              </article>

              <article className={`${glassPanel} border-l-4 border-l-blue-400/40 p-10`}>
                <h2 className={sectionTitle}>SaaS Companies</h2>
                <ul className="mt-6 grid gap-3 text-slate-600">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Account-based prospecting</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Companies scaling or hiring</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Industry monitoring</span>
                  </li>
                </ul>
              </article>

              <article className={`${glassPanel} border-l-4 border-l-blue-400/40 p-10`}>
                <h2 className={sectionTitle}>Marketing & Growth Teams</h2>
                <ul className="mt-6 grid gap-3 text-slate-600">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Identify verticals</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Validate segments</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Campaign lead lists</span>
                  </li>
                </ul>
              </article>

              <article className={`${glassPanel} border-l-4 border-l-blue-400/40 p-10`}>
                <h2 className={sectionTitle}>Agencies</h2>
                <ul className="mt-6 grid gap-3 text-slate-600">
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Prospect lists for clients</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>Targeted outreach</span>
                  </li>
                  <li className={bulletRow}>
                    <span className={bulletDot} />
                    <span>ABM support</span>
                  </li>
                </ul>
              </article>

              <section className="pt-4 text-center">
                <a href="/how-it-works" className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-500">
                  See How Pubrio Works
                </a>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
