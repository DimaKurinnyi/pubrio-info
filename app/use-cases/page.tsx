'use client';
import { motion } from "framer-motion";
import { Users, Building2, TrendingUp, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import UseCaseCard from "@/components/UseCaseCard";
import BackgroundEffects from "@/components/BackgroundEffects";


const useCases = [
  {
    title: "B2B Sales Teams",
    icon: Users,
    items: [
      "Ideal customer profile targeting",
      "Discover decision makers",
      "Build outbound lists",
    ],
  },
  {
    title: "SaaS Companies",
    icon: Building2,
    items: [
      "Account-based prospecting",
      "Companies scaling or hiring",
      "Industry monitoring",
    ],
  },
  {
    title: "Marketing & Growth Teams",
    icon: TrendingUp,
    items: [
      "Identify verticals",
      "Validate segments",
      "Campaign lead lists",
    ],
  },
  {
    title: "Agencies",
    icon: Briefcase,
    items: [
      "Prospect lists for clients",
      "Targeted outreach",
      "ABM support",
    ],
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="relative mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-500/10">
                Use Cases
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-800 leading-[1.1]"
            >
              Who Uses{" "}
              <span className="text-blue-500">Pubrio</span>
              {" "}and How
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Pubrio supports modern go-to-market teams that need a tighter loop
              between market signals, high-quality contact data, and focused
              outbound execution.
            </motion.p>
          </div>
        </section>

        {/* Use Case Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((uc, i) => (
            <UseCaseCard
              key={uc.title}
              title={uc.title}
              items={uc.items}
              icon={uc.icon}
              index={i}
            />
          ))}
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 text-center"
        >
          <a
            href="/how-it-works"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            See How Pubrio Works
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </motion.section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Index;
