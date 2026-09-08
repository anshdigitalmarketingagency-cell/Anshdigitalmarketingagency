import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Download, Settings } from 'lucide-react';
import { BookMockup } from './components/BookMockup.tsx';
import { LearningCards } from './components/LearningCards.tsx';
import { BonusBox } from './components/BonusBox.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';

export default function App() {
  const [checkoutUrl, setCheckoutUrl] = useState<string>('https://rzp.io/l/techmoney');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Load saved Razorpay link if previously customized
  useEffect(() => {
    const saved = localStorage.getItem('techmoney_razorpay_url');
    if (saved) {
      setCheckoutUrl(saved);
    }
  }, []);

  const handleUpdateCheckoutUrl = (newUrl: string) => {
    setCheckoutUrl(newUrl);
    localStorage.setItem('techmoney_razorpay_url', newUrl);
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Direct redirect to the Razorpay Checkout Link in a new tab
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Brand Bar */}
      <header className="w-full bg-white border-b border-slate-100 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
              TM
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-lg text-slate-900 block leading-tight">
                TECHMONEY
              </span>
              <span className="text-[10px] font-bold text-slate-600 tracking-widest block">
                LEARN • BUILD • EARN
              </span>
            </div>
          </div>

          {/* Discreet link settings button for testing / plugging custom Razorpay link */}
          <button
            onClick={() => setIsModalOpen(true)}
            id="configure-checkout-button"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
            title="Configure Razorpay Checkout Link"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Checkout Settings</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* ==================== HERO SECTION ==================== */}
        <section id="hero" className="w-full pt-10 pb-16 sm:pt-16 sm:pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Copy, Pricing & CTA */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Brand & Tagline */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100/80 mb-2">
                    <Sparkles className="w-3 h-3" /> TECHMONEY
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 tracking-widest uppercase mt-1">
                    LEARN • BUILD • EARN
                  </p>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
                  How to <span className="text-blue-600">Make Money</span> Online
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
                  Learn 5 beginner-friendly online business models you can start with ₹0–₹5,000.
                </p>

                {/* Pricing Box */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-xl sm:text-2xl text-slate-500 line-through font-semibold">
                    ₹999
                  </span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    ₹299
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    70% OFF TODAY
                  </span>
                </div>

                {/* CTA Button */}
                <div className="w-full sm:w-auto">
                  <a
                    href={checkoutUrl}
                    onClick={handleCtaClick}
                    id="hero-cta-button"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base sm:text-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                  >
                    <span>Get Instant Access – ₹299</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Small Trust Text */}
                <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <span>One-Time Payment</span>
                  <span className="text-slate-300">•</span>
                  <span>Digital Guide</span>
                  <span className="text-slate-300">•</span>
                  <span>Instant Access</span>
                </div>

                {/* Micro trust indicators */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Razorpay Secure</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-blue-600" />
                    <span>Instant PDF Download</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified 2026 Edition</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Product / Ebook Mockup */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <BookMockup />
              </div>

            </div>
          </div>
        </section>

        {/* ==================== WHAT YOU'LL LEARN ==================== */}
        <LearningCards />

        {/* ==================== BONUS SECTION ==================== */}
        <BonusBox />

        {/* ==================== FINAL CTA SECTION ==================== */}
        <section id="final-cta" className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 md:p-14 border border-slate-200/90 shadow-sm relative overflow-hidden">
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Ready to Start?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal mb-8 max-w-md mx-auto">
                Get the complete guide for just ₹299.
              </p>

              <div className="inline-block w-full sm:w-auto">
                <a
                  href={checkoutUrl}
                  onClick={handleCtaClick}
                  id="final-cta-button"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base sm:text-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                >
                  <span>Get Instant Access – ₹299</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <span>One-Time Payment</span>
                <span className="text-slate-300">•</span>
                <span>Digital Guide</span>
                <span className="text-slate-300">•</span>
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full bg-white border-t border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[10px] font-bold text-white">
              TM
            </span>
            <span className="font-extrabold tracking-wider text-sm text-slate-900">
              TECHMONEY
            </span>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            © 2026 TechMoney. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-600 max-w-md leading-normal">
            Results vary. No income is guaranteed.
          </p>
        </div>
      </footer>

      {/* Checkout Configuration & Preview Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        checkoutUrl={checkoutUrl}
        onUpdateCheckoutUrl={handleUpdateCheckoutUrl}
      />
    </div>
  );
}
