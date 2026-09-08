import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, Layers } from 'lucide-react';

export const BookMockup: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full flex items-center justify-center py-6 sm:py-10 perspective-1000 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background glow - subtle blue tint */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: isHovered ? 'scale(1.1) translateY(-10px)' : 'scale(1) translateY(0px)'
        }}
      />

      {/* 3D Book Container */}
      <motion.div
        className="relative preserve-3d cursor-pointer"
        initial={{ rotateY: -22, rotateX: 6, y: 0 }}
        animate={{
          rotateY: isHovered ? -14 : -22,
          rotateX: isHovered ? 3 : 6,
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft ground shadow */}
        <div 
          className="absolute -bottom-8 left-4 right-2 h-10 bg-slate-900/15 rounded-full blur-xl transition-all duration-300 pointer-events-none"
          style={{
            transform: isHovered ? 'scale(1.08) translateY(6px) opacity(0.8)' : 'scale(1) opacity(1)',
          }}
        />

        {/* The Front Book Cover */}
        <div 
          className="relative w-[260px] sm:w-[300px] md:w-[330px] aspect-[1/1.42] bg-white rounded-r-xl rounded-l-[4px] border border-slate-200/90 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-7 z-20"
          style={{
            boxShadow: `
              inset 4px 0 8px rgba(0,0,0,0.06),
              inset 1px 0 2px rgba(0,0,0,0.08),
              12px 18px 40px -10px rgba(15, 23, 42, 0.22),
              2px 4px 12px rgba(37, 99, 235, 0.08)
            `
          }}
        >
          {/* Subtle light reflection overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-tr from-transparent via-white/80 to-blue-50/40"
            style={{ mixBlendMode: 'overlay' }}
          />

          {/* Book Spine Crease & Shadow on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-900/15 via-slate-400/5 to-transparent pointer-events-none z-30" />
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-slate-200 pointer-events-none z-30" />

          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Top Section */}
          <div className="relative z-10 pl-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[10px] font-bold text-white shadow-sm">
                  TM
                </span>
                <span className="font-extrabold tracking-wider text-xs sm:text-sm text-slate-900">
                  TECHMONEY
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                <Sparkles className="w-2.5 h-2.5" /> 2026 GUIDE
              </span>
            </div>

            <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-slate-600 uppercase mt-2.5">
              LEARN • BUILD • EARN
            </p>
          </div>

          {/* Middle Title Section */}
          <div className="relative z-10 my-auto pl-2 py-3">
            <div className="space-y-1">
              <span className="block text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
                THE PRACTICAL GUIDE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                How to <span className="text-blue-600">Make Money</span> Online
              </h3>
            </div>

            {/* Model Badge */}
            <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                <span>5 Online Business Models</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1 font-medium leading-relaxed">
                Zero fluff • ₹0–₹5,000 Startup Capital
              </p>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="relative z-10 pl-2 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-600 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Complete Digital Blueprint</span>
              </div>
              <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">
                ₹299
              </span>
            </div>
          </div>
        </div>

        {/* Book Left Spine (3D extruded) */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-8 bg-slate-100 border-r border-slate-300 rounded-l-[3px] flex flex-col justify-between items-center py-6 text-slate-800 text-[10px] font-bold"
          style={{
            transform: 'rotateY(-90deg) translateZ(0px)',
            transformOrigin: 'left center',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.12)',
            background: 'linear-gradient(90deg, #e2e8f0 0%, #ffffff 70%, #cbd5e1 100%)',
          }}
        >
          <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white">
            TM
          </div>
          <div 
            className="tracking-widest whitespace-nowrap text-[9px] font-bold text-slate-800"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            TECHMONEY • 2026 EDITION
          </div>
          <span className="text-[8px] text-blue-600 font-bold">5 MODELS</span>
        </div>

        {/* Book Right Side Page Edges (Paper stack thickness) */}
        <div 
          className="absolute top-[2px] bottom-[2px] right-0 w-5 bg-[#fbfbfa] rounded-r-[2px] border-y border-slate-200 pointer-events-none"
          style={{
            transform: 'rotateY(90deg) translateZ(0px)',
            transformOrigin: 'right center',
            background: `
              repeating-linear-gradient(
                to right,
                #f8fafc 0px,
                #e2e8f0 1px,
                #ffffff 2px,
                #f1f5f9 3px
              )
            `,
            boxShadow: 'inset 2px 0 6px rgba(0,0,0,0.1)'
          }}
        />

        {/* Floating badge for added polish */}
        <div className="absolute -top-3 -right-3 z-30 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>INSTANT ACCESS</span>
        </div>
      </motion.div>
    </div>
  );
};
