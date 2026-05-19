"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoFormSchema } from "@/validator/contact.validator";
import z from "zod";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

type DemoFormData = z.infer<typeof demoFormSchema>;

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

const BENEFITS = [
  "30-minute personalized walkthrough",
  "QR menu setup demonstration",
  "Real-time order management",
  "Staff & kitchen dashboard tour",
  "Free consultation included",
  "No credit card required",
];

export function BookDemoSection() {
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
      }
    } catch (error) {
      console.error("Error scheduling demo:", error);
      toast.error("Failed to schedule demo. Please try again.");
    }
  };

  return (
    <section id="book-demo" className="py-20 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            See Hungry V in{" "}
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
            Schedule a free 30-minute demo and discover how Hungry V can
            revolutionize your restaurant operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Benefits */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                What you&apos;ll get in the demo:
              </h3>
              <ul className="space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-500" />
                    <span className="text-text-primary/80 text-sm">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-30" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {isSuccess ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Demo Scheduled! 🎉
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Our team will reach out within 2 hours to confirm your slot.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-sm text-purple-600 underline"
                  >
                    Schedule another demo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Schedule Your Free Demo
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Your Restaurant"
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
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
                      <span className="font-normal text-gray-400">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      {...register("comments")}
                      rows={2}
                      placeholder="Tell us about your restaurant..."
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
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
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
