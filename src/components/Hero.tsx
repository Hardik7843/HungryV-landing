"use client";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-12"
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-bg-first rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-bg-second rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-bg-third rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent block">
              Hungry V
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-text-primary mb-6">
            Restaurant Management & QR Food Ordering Platform
          </h2>

          <div className="text-lg md:text-xl text-text-primary/80 mb-10 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>
              Hungry V helps restaurants simplify food ordering and table
              management through smart digital menus and real-time order
              tracking.
            </p>
            <p>
              Customers can scan QR codes placed on tables to browse menus,
              place food orders, and receive real-time updates without waiting
              for manual order taking.
            </p>
            <p>
              Restaurant staff members can efficiently manage incoming orders,
              monitor table occupancy, and streamline restaurant operations
              through a centralized dashboard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-text-from to-text-to text-white font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-text-primary font-semibold text-lg hover:bg-white/20 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent text-text-primary font-semibold text-lg hover:text-text-from transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
              View Demo
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7-7m7 7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="animate-bounce mt-16">
          <svg
            className="w-6 h-6 mx-auto text-text-primary/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
