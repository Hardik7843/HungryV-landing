export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-10">
          About{" "}
          <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
            Hungry V
          </span>
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-text-primary/80 leading-relaxed text-left sm:text-center">
          <p>
            Hungry V is designed for restaurants and food businesses that want
            to modernize their ordering experience and improve operational
            efficiency.
          </p>
          <p>
            The platform reduces manual ordering friction by enabling QR-based
            food ordering, digital menus, real-time order updates, and
            centralized restaurant management tools.
          </p>
          <p>
            Hungry V focuses on creating a smoother experience for both
            customers and restaurant staff.
          </p>
        </div>
      </div>
    </section>
  );
}
