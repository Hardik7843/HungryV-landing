import { FeatureBox } from "./FeatureBox";

const features = [
  {
    icon: "📱",
    title: "Smart QR Ordering",
    description:
      "Customers can instantly scan QR codes placed on restaurant tables to access digital menus and place orders directly from their devices.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: "⏱️",
    title: "Real-Time Order Tracking",
    description:
      "Track food orders live from preparation to serving with instant updates for both customers and restaurant staff.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: "📋",
    title: "Digital Restaurant Menus",
    description:
      "Manage menus digitally with easy updates for pricing, categories, and food availability.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: "🪑",
    title: "Table Occupancy Management",
    description:
      "Restaurant staff can monitor table occupancy and manage customer flow more efficiently.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "💻",
    title: "Staff Dashboard",
    description:
      "A centralized dashboard allows restaurant staff to handle orders, track activity, and manage operations in real time.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: "🔒",
    title: "Secure Authentication",
    description:
      "Users can securely sign in using Google authentication or email and password authentication.",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Powerful
            <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
              {" "}
              Features
            </span>
          </h2>
          <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
            Everything you need to modernize your restaurant operations and
            provide a seamless ordering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              // gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
