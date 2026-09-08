import React from 'react';
import { motion } from 'motion/react';
import { FileText, EyeOff, Share2, Shirt, Bot } from 'lucide-react';

interface LearnItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}

const learnItems: LearnItem[] = [
  {
    id: 'digital-products',
    icon: FileText,
    title: 'Digital Products',
    description: 'Create and sell PDFs, templates, guides and more.',
    badge: 'High Margin',
  },
  {
    id: 'faceless-content',
    icon: EyeOff,
    title: 'Faceless Content',
    description: 'Build content on YouTube or Instagram without showing your face.',
    badge: 'Zero Camera',
  },
  {
    id: 'affiliate-marketing',
    icon: Share2,
    title: 'Affiliate Marketing',
    description: 'Learn how referral-based online income works.',
    badge: 'Passive Reach',
  },
  {
    id: 'print-on-demand',
    icon: Shirt,
    title: 'Print-on-Demand',
    description: 'Sell original designs without keeping inventory.',
    badge: 'No Inventory',
  },
  {
    id: 'ai-digital-business',
    icon: Bot,
    title: 'AI Digital Business',
    description: 'Use AI to create useful digital products and services.',
    badge: 'Automated',
  },
];

export const LearningCards: React.FC = () => {
  return (
    <section id="what-youll-learn" className="w-full py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What You'll Learn
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Five proven, beginner-ready models broken down into actionable, step-by-step frameworks.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {learnItems.map((item, idx) => {
            const Icon = item.icon;
            // The 5th item can be centered or span nicely on desktop
            const isLast = idx === 4;

            return (
              <motion.div
                key={item.id}
                id={`card-${item.id}`}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between ${
                  isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-100/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span>Model 0{idx + 1}</span>
                  <span className="mx-2 text-slate-300">•</span>
                  <span>Full Guide Inside</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
