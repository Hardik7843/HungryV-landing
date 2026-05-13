"use client";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-bg-first rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-bg-second rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-bg-third rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-text-primary/80 text-sm font-medium mb-8 border border-black/20">
            🚀 Something amazing is brewing
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
            We&apos;re
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent block">
              Coming Soon
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text-primary/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get ready for the next generation of digital innovation. We&apos;re
            crafting something extraordinary just for you.
          </p>
        </div>

        {/* Countdown or progress indicator */}
        {/* <div className="flex justify-center mb-12">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { label: 'Days', value: '15' },
              { label: 'Hours', value: '08' },
              { label: 'Minutes', value: '42' },
              { label: 'Seconds', value: '17' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="animate-bounce">
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
