"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/validator/contact.validator";
import z from "zod";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";

type FormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axiosInstance.post("/enquiry", {
        ...data,
        comments: data.query,
        type: "GENERAL",
      });

      if (response.status == 201) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);

        toast.success("We got your message, We'll be in touch soon");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Contact
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
              {" "}
              Us
            </span>
          </h2>
          <p className="text-xl text-text-primary/70">
            Be among the first to experience something revolutionary. Join our
            exclusive early access list.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30"></div>

          <div className="relative bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center text-green-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thank you! We&apos;ll be in touch soon.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black/80 mb-2"
                >
                  Business Name *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="Raibo Infotech"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black/80 mb-2"
                >
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="contact@raiboinfotech.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black/80 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* State and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-black/80 mb-2"
                  >
                    State *
                  </label>
                  <input
                    {...register("state")}
                    type="text"
                    id="state"
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                    placeholder="Maharashtra"
                  />
                  {errors.state && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-black/80 mb-2"
                  >
                    City *
                  </label>
                  <input
                    {...register("city")}
                    type="text"
                    id="city"
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                    placeholder="Mumbai"
                  />
                  {errors.city && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Query Text Box */}
              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-medium text-black/80 mb-2"
                >
                  Query *
                </label>
                <textarea
                  {...register("query")}
                  id="query"
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="Tell us about your business"
                  rows={4}
                />
                {errors.query && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.query.message}
                  </p>
                )}
              </div>

              {/* Website Field */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-black/80 mb-2"
                >
                  Website <span className="text-black/50">(optional)</span>
                </label>
                <input
                  {...register("website")}
                  type="text"
                  id="website"
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="https://www.youtube.com/@RaiboInfotech"
                />
                {errors.website && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.website.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-gradient-from to-gradient-to hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400/20 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <p className="animate-spin">
                      <LoaderCircle></LoaderCircle>
                    </p>
                    {/* <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> */}
                    Sending...
                  </div>
                ) : (
                  "Get in touch with us"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-black/50 text-sm">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
