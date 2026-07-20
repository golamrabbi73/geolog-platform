import { HardHat, Users2, ShieldCheck } from "lucide-react";

const roles = [
  {
    icon: HardHat,
    title: "Field Engineer",
    description:
      "Log core samples on-site, attach depth and rock-type data, and keep a personal record of every sample collected.",
  },
  {
    icon: Users2,
    title: "Manager",
    description:
      "Oversee wells across the operation, review team submissions, and keep well status up to date from planning to completion.",
  },
  {
    icon: ShieldCheck,
    title: "Admin",
    description:
      "Full visibility across wells and samples, with the ability to manage records and keep the whole dataset consistent.",
  },
];

export default function TeamRoles() {
  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold">Built for Every Role</h2>

          <p className="mt-5 text-base-content/70">
            GeoLog adapts to how your team actually works, from field
            data collection to organization-wide oversight.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="card bg-base-100 border border-base-300 rounded-2xl"
            >
              <div className="card-body items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <role.icon size={28} />
                </div>

                <h3 className="text-xl font-semibold mt-3">
                  {role.title}
                </h3>

                <p className="text-base-content/70 mt-2">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
