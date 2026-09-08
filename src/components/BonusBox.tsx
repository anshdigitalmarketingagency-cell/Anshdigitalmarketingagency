import React from 'react';
import { CheckCircle2, Gift } from 'lucide-react';

const bonuses = [
  {
    title: '7-Day Action Plan',
    desc: 'Step-by-step launch checklist from day 1 to first asset live',
  },
  {
    title: '20 Digital Product Ideas',
    desc: 'Pre-validated niches and product blueprints in high demand',
  },
  {
    title: 'First ₹1,000 Roadmap',
    desc: 'Realistic milestone framework to hit your first online revenue',
  },
];

export const BonusBox: React.FC = () => {
  return (
    <section id="bonus" className="w-full py-6 sm:py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Bonus Box */}
        <div 
          id="bonus-box-container"
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-blue-50/70 border border-blue-200/80 p-6 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(37,99,235,0.06)]"
        >
          {/* Subtle background decorative badge */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            {/* Left Header */}
            <div className="md:max-w-xs shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
                <Gift className="w-3.5 h-3.5" />
                <span>BONUS INCLUDED</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Included Free With Your Order Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Instant additions bundled directly into your digital download at no extra cost.
              </p>
            </div>

            {/* Right 3 Bonuses Horizontal/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {bonuses.map((bonus) => (
                <div 
                  key={bonus.title}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-blue-100 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
                        {bonus.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      {bonus.desc}
                    </p>
                  </div>
                  <div className="mt-3 pl-7 flex items-center gap-1">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      Included (₹0)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
