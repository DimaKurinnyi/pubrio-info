import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  index: number;
}

const UseCaseCard = ({ title, items, icon: Icon, index }: UseCaseCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative glass-card rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl hover:glow-blue transition-all duration-500"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-500">
        <Icon size={24} />
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
        {title}
      </h2>

      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-600">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span className="text-sm md:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-blue-500/5 to-transparent" />
    </motion.article>
  );
};

export default UseCaseCard;
