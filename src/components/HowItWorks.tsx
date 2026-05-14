export function HowItWorks() {
  const steps = [
    {
      title: "Step 1",
      description: "Customer scans QR code placed on the restaurant table.",
    },
    {
      title: "Step 2",
      description: "Customer browses the digital menu and places an order.",
    },
    {
      title: "Step 3",
      description: "Restaurant staff instantly receive and manage the order.",
    },
    {
      title: "Step 4",
      description:
        "Customer receives real-time order updates and invoice notifications.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-white/5 border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            How It
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
              {" "}
              Works
            </span>
          </h2>
          <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
            A simple, seamless ordering process for both your customers and your
            staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-bg-dark/50 border border-white/10 hover:border-text-from/50 transition-colors"
            >
              <div className="text-2xl font-bold text-text-from mb-4">
                {step.title}
              </div>
              <p className="text-text-primary/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
