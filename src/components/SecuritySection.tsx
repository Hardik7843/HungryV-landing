export function SecuritySection() {
  return (
    <section
      id="security"
      className="py-20 px-6 bg-white/5 border-y border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-10 text-center">
          Security &{" "}
          <span className="bg-gradient-to-r from-text-from to-text-to bg-clip-text text-transparent">
            Authentication
          </span>
        </h2>

        <div className="bg-bg-dark/50 p-8 rounded-2xl border border-white/10">
          <p className="text-lg text-text-primary/80 mb-6">
            Hungry V uses secure authentication systems to protect user accounts
            and platform access.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Users may sign in using:
            </h3>
            <ul className="list-disc list-inside text-lg text-text-primary/80 space-y-2 ml-4">
              <li>Google Sign-In</li>
              <li>Email and Password Authentication</li>
            </ul>
          </div>

          <div className="space-y-4 text-lg text-text-primary/80">
            <p>
              Passwords are encrypted securely and are never stored as plain
              text.
            </p>
            <p>
              The platform also uses cookies and session technologies for
              authentication, authorization, security, and session management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
