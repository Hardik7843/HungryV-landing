"use client";

import { useEffect } from "react";
import {
  X,
  Sparkles,
  Zap,
  Star,
  ArrowRight,
  Clock,
  MonitorPlay,
} from "lucide-react";

interface DemoFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoFormPopup({ isOpen, onClose }: DemoFormPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBookDemo = () => {
    onClose();
    const section = document.getElementById("book-demo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#book-demo";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glow border — matches ContactForm */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30" />

        <div className="relative bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/20">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/10 p-1.5 hover:bg-black/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-text-primary" />
          </button>

          {/* Content */}
          <div className="px-8 py-8 text-center">
            {/* Icon */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gradient-from to-gradient-to shadow-lg">
              <MonitorPlay className="h-6 w-6 text-white" />
            </div>

            {/* Urgency badge */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-text-from/10 border border-text-from/20 px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-text-from" />
              <span className="text-xs font-semibold text-text-from uppercase tracking-wider">
                Limited Slots This Week
              </span>
            </div>

            <h2 className="text-2xl font-bold text-text-primary leading-tight mb-3">
              See Hungry V in{" "}
              <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
                Action
              </span>
            </h2>

            <p className="text-text-primary/70 text-sm leading-relaxed mb-6">
              Transform your restaurant&apos;s ordering experience with a{" "}
              <span className="text-text-primary font-medium">
                free 30-minute live demo
              </span>{" "}
              — personalised just for you.
            </p>

            {/* Value props */}
            <div className="mb-7 space-y-2.5 text-left">
              {[
                {
                  icon: Zap,
                  text: "Live QR menu & order management walkthrough",
                },
                { icon: Star, text: "See real-time analytics & insights" },
                { icon: Sparkles, text: "Free setup consultation included" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-500/20 border border-purple-400/20">
                    <Icon className="h-3.5 w-3.5 text-text-from" />
                  </div>
                  <span className="text-sm text-text-primary/80">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA — matches ContactForm button exactly */}
            <button
              onClick={handleBookDemo}
              className="group w-full py-4 px-6 bg-gradient-to-r from-gradient-from to-gradient-to hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400/20 flex items-center justify-center gap-2"
            >
              Book My Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onClose}
              className="mt-3 w-full py-2 text-xs text-text-primary/40 hover:text-text-primary/60"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
