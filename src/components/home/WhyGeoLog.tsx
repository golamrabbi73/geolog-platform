import {
  ShieldCheck,
  Clock3,
  Layers3,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Secure Data",
    description:
      "JWT authentication and role-based authorization keep geological data protected.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Reduce manual work by organizing wells and samples in one centralized platform.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Built with Next.js, TypeScript, Express, MongoDB, and reusable components.",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description:
      "Analytics dashboards help teams monitor drilling progress and geological operations.",
  },
];

export default function WhyGeoLog() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="badge badge-primary badge-outline mb-4">
            Why GeoLog
          </span>

          <h2 className="text-4xl font-bold">
            Built for Modern Geological Teams
          </h2>

          <p className="mt-5 text-base-content/70">
            GeoLog combines modern technologies with practical
            geological workflows, making exploration and drilling
            data easier to manage.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="card bg-base-100 border shadow hover:shadow-lg transition"
              >
                <div className="card-body">

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">

                      <Icon
                        className="text-primary"
                        size={28}
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-base-content/70 mt-2">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}