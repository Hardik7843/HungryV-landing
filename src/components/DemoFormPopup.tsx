"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoFormSchema } from "@/validator/contact.validator";
import z from "zod";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import {
  X,
  Calendar,
  Clock,
  Sparkles,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";

type DemoFormData = z.infer<typeof demoFormSchema>;

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

interface DemoFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoFormPopup({ isOpen, onClose }: DemoFormPopupProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    try {
      const response = await axiosInstance.post("/enquiry", {
        type: "DEMO",
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        state: data.state,
        comments: data.comments || undefined,
        scheduledDate: data.scheduledDate,
        scheduledTime: data.scheduledTime,
      });

      if (response.status === 201) {
        setIsSuccess(true);
        reset();
        toast.success("Demo scheduled! We'll contact you soon.");
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error scheduling demo:", error);
      toast.error("Failed to schedule demo. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-70" />

        <div className="relative bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 p-6 text-white">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-1.5 hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-white" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Limited Slots Available
                </p>
                <h2 className="text-xl font-bold text-white">
                  Book a Free Demo
                </h2>
              </div>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">
              See how Hungry V can transform your restaurant. Get a
              personalized walkthrough — completely free.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                "30-min live demo",
                "QR menu setup",
                "Order management",
                "Free consultation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-white/90"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Demo Scheduled! 🎉
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We&apos;ll reach out within 2 hours to confirm your slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Your Restaurant"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="owner@restaurant.com"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="9876543210"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      {...register("city")}
                      type="text"
                      placeholder="Mumbai"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      {...register("state")}
                      type="text"
                      placeholder="Maharashtra"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    />
                    {errors.state && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.state.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      <Calendar className="inline h-3.5 w-3.5 mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      {...register("scheduledDate")}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    />
                    {errors.scheduledDate && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.scheduledDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      <Clock className="inline h-3.5 w-3.5 mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      {...register("scheduledTime")}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    >
                      <option value="">Select time</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.scheduledTime && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.scheduledTime.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Additional Notes{" "}
                    <span className="font-normal text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    {...register("comments")}
                    rows={2}
                    placeholder="Tell us about your restaurant..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 py-3 px-6 text-sm font-semibold text-white shadow-lg hover:from-purple-700 hover:to-cyan-600 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Scheduling...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Schedule Free Demo
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  No credit card required · Free consultation
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}