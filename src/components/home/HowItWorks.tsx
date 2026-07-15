import {
  Database,
  FolderSearch,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Collect Geological Data",
    description:
      "Field engineers record wells, drilling information, and core samples directly into the GeoLog platform.",
  },
  {
    icon: FolderSearch,
    title: "Manage & Organize",
    description:
      "Managers securely organize, search, update, and review geological records using advanced filters.",
  },
  {
    icon: BarChart3,
    title: "Analyze & Monitor",
    description:
      "Interactive dashboards provide valuable insights into wells, drilling activities, and geological samples.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary badge-outline mb-4">
            Workflow
          </span>

          <h2 className="text-4xl font-bold">
            How GeoLog Works
          </h2>

          <p className="mt-5 text-base-content/70">
            GeoLog simplifies geological data management through
            a structured workflow, helping engineering teams
            collaborate efficiently from field data collection
            to analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="card bg-base-100 border shadow-md hover:shadow-xl transition-all"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon
                      size={30}
                      className="text-primary"
                    />
                  </div>

                  <div className="badge badge-primary mt-5">
                    Step {index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold mt-3">
                    {step.title}
                  </h3>

                  <p className="text-base-content/70 leading-7">
                    {step.description}
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