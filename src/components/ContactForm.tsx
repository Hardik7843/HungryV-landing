"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/validator/contact.validator";

interface FormData {
  name: string;
  website?: string;
  instagram: string;
  phone: string;
}

// interface FormErrors {
//   name?: string;
//   website?: string;
//   instagram?: string;
//   phone?: string;
// }

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });
  // const [errors, setErrors] = useState<FormErrors>({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      // setIsSubmitting(true);

      // Clear previous errors
      // setErrors({});

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
      // setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Get
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
              {" "}
              Early Access
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

              {/* Instagram Field */}
              <div>
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium text-black/80 mb-2"
                >
                  Instagram Handle *
                </label>
                <input
                  {...register("instagram")}
                  type="text"
                  id="instagram"
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="https://instagram.com/raiboinfotech"
                />
                {/* <div className="relative"> */}
                {/* <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/50">
                    @
                  </span> */}

                {/* <input
                  {...register("instagram")}
                  type="text"
                  id="instagram"
                  className="w-full pl-8 pr-4 py-3 bg-white/50 border border-white/20 rounded-lg text-black placeholder-black/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="yourbusiness"
                /> */}
                {/* </div> */}
                {errors.instagram && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.instagram.message}
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
                    Joining the list...
                  </div>
                ) : (
                  "Get access now! 🚀"
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
