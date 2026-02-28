import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function StakedCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.2, 1], [1, 0.92]);
  const scale3 = useTransform(scrollYProgress, [0.4, 1], [1, 0.94]);
  const scale4 = useTransform(scrollYProgress, [0.6, 1], [1, 0.96]);
  const scale5 = useTransform(scrollYProgress, [0.8, 1], [1, 0.98]);
  return (
    <div ref={container} className="mt-4">
      {/* Step 1 */}
      <motion.div style={{ scale: scale1 }} className="h-screen flex items-center justify-center sticky top-0">
        <div
          className="h-145 w-275
          bg-white  border border-blue-100 rounded-2xl shadow-xl p-12 ">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 1 — Define Your Ideal Customer Profile</h3>

              <div className="text-slate-700 text-base mb-6 relative z-10">
                <p className="font-medium mb-2 text-xl ">HR SaaS targeting:</p>
                <ul className="space-y-1 ml-4 text-lg font-bold">
                  <li>• 50–500 employees</li>
                  <li>• Hiring HR roles</li>
                  <li>• Located in US & UK</li>
                  <li>• Using competitor software</li>
                </ul>
              </div>
              <div className="mt-8 p-6 bg-blue-50/50 rounded-xl border border-blue-100 relative z-10">
                <p className="text-slate-700 font-medium mb-2">Use 50+ advanced filters:</p>
                <p className="text-slate-600 text-sm">Industry • Tech stack • Employee count • Hiring signals • Geography • Funding stage</p>
              </div>
            </div>
            <div className=" rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden">
              <Image src="/assets/step1.png" alt="Filter Interface Screenshot Placeholder" width={300} height={200} className="object-cover rounded-lg" />
            </div>
          </div>

          {/* Visual Placeholder */}
        </div>
      </motion.div>
      {/* Step 2 */}
      <motion.div style={{ scale: scale2 }} className="h-screen flex items-center justify-center sticky top-8">
        <div style={{ top: `calc(-10% + ${2 * 25}px)` }} className="h-145 w-275 bg-white  border border-blue-100 rounded-2xl shadow-xl p-12 top-1/2 ">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 2 — Identify High-Intent Companies</h3>
          <div className=" flex justify-between items-start ">
            <ul className="text-slate-700 text-lg space-y-2 mb-6 font-bold relative z-10">
              <li>• Companies expanding teams</li>
              <li>• Businesses launching new products</li>
              <li>• Companies raising funding</li>
              <li>• Tech stack changes</li>
            </ul>
            <div className="mt-8  rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden">
              
              <Image src="/assets/step2.png" alt="Company List" width={500} height={400} className="object-cover rounded-lg" />
            </div>
          </div>

          <p className="text-blue-600 font-medium relative z-10">AI assigns buying probability score.</p>
          {/* Visual Placeholder */}
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div style={{ scale: scale3 }} className="h-screen flex items-center justify-center sticky top-16">
        <div className="h-145 w-275 bg-white  border border-blue-100 rounded-2xl shadow-xl p-12 ">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 3 — Access Verified Decision Makers</h3>
          <div className="mb-6 relative z-10">
            <p className="text-slate-700 text-lg font-bold mb-2">Find:</p>
            <ul className="text-slate-700 text-lg font-bold space-y-1 ml-4">
              <li>• VP Sales</li>
              <li>• Head of Marketing</li>
              <li>• CTO</li>
              <li>• Founder</li>
            </ul>
          </div>
          <div className="mb-6 relative z-10">
            <p className="text-slate-600 text-lg font-bold">Includes:</p>
            <ul className="text-slate-600 text-lg font-bold space-y-1 ml-4">
              <li>• Verified business emails</li>
              <li>• LinkedIn profiles</li>
              <li>• Company insights</li>
            </ul>
          </div>
          <p className="text-blue-600 font-medium relative z-10">No scraped junk. Only verified B2B data.</p>
        </div>
      </motion.div>

      {/* Step 4 */}
      <motion.div style={{ scale: scale4 }} className="h-screen flex items-center justify-center sticky top-24">
        <div className="h-145 w-275 bg-white  border border-blue-100 rounded-2xl shadow-xl p-12 ">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 4 — Launch Automated Outreach</h3>
          <p className="text-slate-700 text-lg font-bold mb-4 relative z-10">Create multi-channel sequences:</p>
          <div className="flex justify-between items-start ">
            <ul className="text-slate-700 text-lg space-y-2 mb-6 font-bold relative z-10">
              <li>• Email sequences</li>
              <li>• LinkedIn invitations</li>
              <li>• Follow-ups</li>
              <li>• Conditional branching</li>
            </ul>
            <div className="  rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden">
             <Image src="/assets/step4.png" alt="Company List" width={550} height={500} className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Step 5 */}
      <motion.div style={{ scale: scale5 }} className="h-screen flex items-center justify-center sticky top-32">
        <div className="h-145 w-275 bg-white  border border-blue-100 rounded-2xl shadow-xl p-12 ">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 left-[-30%] w-[160%] h-[200%] bg-linear-to-br from-white/40 via-white/10 to-transparent rotate-12 opacity-20" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 relative z-10">Step 5 — Track Performance & Optimize</h3>
          <p className="text-slate-700 text-lg font-bold mb-4 relative z-10">Monitor:</p>
          <ul className="text-slate-700 text-lg font-bold space-y-2 mb-6 relative z-10">
            <li>• Open rate</li>
            <li>• Reply rate</li>
            <li>• Conversion rate</li>
            <li>• Engagement score</li>
          </ul>
          <p className="text-slate-600 text-base relative z-10">Adjust targeting based on results.</p>
        </div>
      </motion.div>
    </div>
  );
}
