import {
  Database,
  ShieldCheck,
  BarChart3,
  Search,
  Users,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Centralized Data Management",
    description:
      "Manage wells, drilling records, and core samples from one secure platform.",
  },
  {
    icon: Search,
    title: "Powerful Search & Filters",
    description:
      "Quickly locate wells and samples using advanced search and filtering tools.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Role-Based Access",
    description:
      "Protect sensitive geological data with JWT authentication and role permissions.",
  },
  {
    icon: BarChart3,
    title: "Interactive Analytics",
    description:
      "Visualize drilling progress and geological insights with modern dashboards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Allow engineers, managers, and administrators to work together efficiently.",
  },
  {
    icon: MapPinned,
    title: "Well Tracking",
    description:
      "Organize wells by location and operational status for better field management.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-base-200"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="badge badge-primary badge-outline mb-4">
            Platform Features
          </span>

          <h2 className="text-4xl font-bold">
            Everything Needed to Manage
            Geological Operations
          </h2>

          <p className="mt-5 text-base-content/70">
            GeoLog provides modern tools for storing,
            organizing, analyzing, and managing
            geological data with security and
            scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card bg-base-100 shadow-md border hover:shadow-xl transition-all duration-300"
              >
                <div className="card-body">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon
                      size={28}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-base-content/70 leading-7">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}