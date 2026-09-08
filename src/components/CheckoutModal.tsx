import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  onUpdateCheckoutUrl: (newUrl: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
  onUpdateCheckoutUrl,
}) => {
  const [customUrl, setCustomUrl] = useState(checkoutUrl);
  const [isEditing, setIsEditing] = useState(false);

  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      onUpdateCheckoutUrl(customUrl.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="checkout-redirect-dialog"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-7 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
            ₹
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Razorpay Secure Checkout
            </h3>
            <p className="text-xs text-slate-500">
              TechMoney: How to Make Money Online
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-5 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Digital Guide + 3 Bonuses</span>
            <span className="line-through text-slate-400 font-medium">₹999</span>
          </div>
          <div className="flex justify-between items-center text-base font-bold pt-2 border-t border-slate-200">
            <span className="text-slate-900">Total Due Today</span>
            <span className="text-blue-600 text-lg">₹299</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-600 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Instant PDF download link sent via email</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>256-bit encrypted Razorpay payment gateway</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
            <span>One-time payment • Lifetime access • No subscriptions</span>
          </div>
        </div>

        {/* Razorpay Action Button */}
        <div className="space-y-3">
          <button
            onClick={handleProceed}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all duration-200"
          >
            <span>Proceed to Razorpay – ₹299</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <div className="text-center pt-2">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="text-[11px] text-slate-500 hover:text-blue-600 underline font-medium"
              >
                Configure Razorpay link: {checkoutUrl.replace('https://', '').slice(0, 30)}...
              </button>
            ) : (
              <form onSubmit={handleSaveUrl} className="mt-2 space-y-2 text-left">
                <label className="block text-[11px] font-semibold text-slate-700">
                  Target Razorpay Payment Link:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://rzp.io/l/your-link"
                    className="flex-1 text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
