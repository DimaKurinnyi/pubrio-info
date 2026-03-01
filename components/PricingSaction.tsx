'use client';
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with essential prospecting tools.",
    features: [
      "100 credits per month",
      "Basic company search",
      "Limited contact reveals",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "Scale your outbound with advanced data and targeting.",
    features: [
      "72,000 credits annually",
      "Advanced filters & search",
      "Phone & email reveals",
      "CRM integrations",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "Full-scale prospecting for high-performing teams.",
    features: [
      "180,000 credits annually",
      "Unlimited search queries",
      "Bulk export & enrichment",
      "Team collaboration",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="mt-24 md:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Choose the plan that fits your needs. No hidden fees.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative glass-card rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 ${
              plan.highlighted
                ? "ring-2 ring-blue-500 shadow-xl glow-blue md:scale-105"
                : "shadow-lg hover:shadow-xl"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-4 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            )}

            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm">{plan.period}</span>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-500">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

           

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-primary/5 to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;