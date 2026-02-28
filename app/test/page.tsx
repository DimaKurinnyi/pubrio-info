export default function StakedCards() {
  return (
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
      <div className="mt-[50vh]">
        {/* Step 1 */}
        <div className="h-screen flex items-center justify-center sticky top-0">
        <div className="h-145 w-250 w-250
          bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 hover:shadow-2xl transition duration-300">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 1 — Define Your Ideal Customer Profile</h3>
          <div className="flex justify-between items-start ">
            <div className="text-slate-700 text-base mb-6 relative z-10">
              <p className="font-medium mb-2 text-xl ">HR SaaS targeting:</p>
              <ul className="space-y-1 ml-4 text-lg font-bold">
                <li>• 50–500 employees</li>
                <li>• Hiring HR roles</li>
                <li>• Located in US & UK</li>
                <li>• Using competitor software</li>
              </ul>
            </div>
            <div className="mt-8 h-64 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-blue-500 text-sm">
              Filter Interface Screenshot Placeholder
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50/50 rounded-xl border border-blue-100 relative z-10">
            <p className="text-slate-700 font-medium mb-2">Use 50+ advanced filters:</p>
            <p className="text-slate-600 text-sm">Industry • Tech stack • Employee count • Hiring signals • Geography • Funding stage</p>
          </div>
          {/* Visual Placeholder */}
        </div></div>
        {/* Step 2 */}
        <div className="h-screen flex items-center justify-center sticky top-0">
        <div className="h-145 w-250 bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 hover:shadow-2xl transition duration-300">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 2 — Identify High-Intent Companies</h3>
          <div className=" flex justify-between items-start ">
            <ul className="text-slate-700 text-base space-y-2 mb-6 relative z-10">
              <li>• Companies expanding teams</li>
              <li>• Businesses launching new products</li>
              <li>• Companies raising funding</li>
              <li>• Tech stack changes</li>
            </ul>
            <div className="mt-8 h-64 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-blue-500 text-sm">
              Company List Screenshot Placeholder
            </div>
          </div>

          <p className="text-blue-600 font-medium relative z-10">AI assigns buying probability score.</p>
          {/* Visual Placeholder */}
        </div></div>

        {/* Step 3 */}
        <div className="h-screen flex items-center justify-center sticky top-0">
        <div className="h-145 w-250 bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 hover:shadow-2xl transition duration-300">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 3 — Access Verified Decision Makers</h3>
          <div className="mb-6 relative z-10">
            <p className="text-slate-700 font-medium mb-2">Find:</p>
            <ul className="text-slate-700 space-y-1 ml-4">
              <li>• VP Sales</li>
              <li>• Head of Marketing</li>
              <li>• CTO</li>
              <li>• Founder</li>
            </ul>
          </div>
          <div className="mb-6 relative z-10">
            <p className="text-slate-600 text-sm">Includes:</p>
            <ul className="text-slate-600 text-sm space-y-1 ml-4">
              <li>• Verified business emails</li>
              <li>• LinkedIn profiles</li>
              <li>• Company insights</li>
            </ul>
          </div>
          <p className="text-blue-600 font-medium relative z-10">No scraped junk. Only verified B2B data.</p>
        </div></div>

        {/* Step 4 */}
        <div className="h-screen flex items-center justify-center sticky top-0">
        <div className="h-145 w-250 bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 hover:shadow-2xl transition duration-300">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 4 — Launch Automated Outreach</h3>
          <p className="text-slate-700 font-medium mb-4 relative z-10">Create multi-channel sequences:</p>
          <div className="flex justify-between items-start ">
            <ul className="text-slate-700 text-base space-y-2 mb-6 relative z-10">
              <li>• Email sequences</li>
              <li>• LinkedIn invitations</li>
              <li>• Follow-ups</li>
              <li>• Conditional branching</li>
            </ul>
            <div className=" h-64 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-blue-500 text-sm">
              Automation Workflow Screenshot Placeholder
            </div>
          </div>
        </div></div>

        {/* Step 5 */}
        <div className="h-screen flex items-center justify-center sticky top-0">
        <div className="h-145 w-250 bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-12 hover:shadow-2xl transition duration-300">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 5 — Track Performance & Optimize</h3>
          <p className="text-slate-700 font-medium mb-4 relative z-10">Monitor:</p>
          <ul className="text-slate-700 text-base space-y-2 mb-6 relative z-10">
            <li>• Open rate</li>
            <li>• Reply rate</li>
            <li>• Conversion rate</li>
            <li>• Engagement score</li>
          </ul>
          <p className="text-slate-600 text-base relative z-10">Adjust targeting based on results.</p>
        </div></div>
      </div>
    </section>
  );
}
