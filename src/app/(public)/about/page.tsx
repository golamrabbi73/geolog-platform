import Link from "next/link";
import {
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    title: "Centralized Data",
    description:
      "Manage geological records, wells and core samples from one secure platform.",
    icon: Database,
  },
  {
    title: "Secure Access",
    description:
      "Role-based authentication ensures every user accesses only authorized resources.",
    icon: ShieldCheck,
  },
  {
    title: "Data Analytics",
    description:
      "Transform drilling and geological data into meaningful insights.",
    icon: BarChart3,
  },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "React Query",
  "Tailwind CSS",
  "JWT Authentication",
];

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">

          <span className="badge badge-primary badge-outline">
            About GeoLog
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Modern Geological Data
            <span className="text-primary">
              {" "}Management Platform
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-base-content/70 leading-8">
            GeoLog is a modern web platform designed for
            petroleum, mining and geological organizations to
            manage wells, drilling activities and core samples
            through a secure and collaborative environment.
          </p>

        </div>
      </section>

      {/* Mission */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-base-content/70 leading-8">
              Geological projects generate huge volumes of
              drilling and laboratory data. GeoLog simplifies
              this workflow by providing a centralized platform
              where engineers, managers and administrators can
              securely collaborate while maintaining complete
              data integrity.
            </p>

            <p className="mt-4 text-base-content/70 leading-8">
              Our goal is to replace scattered spreadsheets and
              manual record keeping with an efficient digital
              workflow that improves productivity and
              decision-making.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">

              <div className="flex items-center gap-4">
                <Globe className="text-primary" size={40} />

                <div>
                  <h3 className="font-bold text-xl">
                    Enterprise Ready
                  </h3>

                  <p className="opacity-70">
                    Built for geological organizations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Values */}

      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why GeoLog
            </h2>

            <p className="mt-4 text-base-content/70">
              Designed around real geological workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="card bg-base-100 shadow-md"
                >
                  <div className="card-body">

                    <Icon
                      size={42}
                      className="text-primary"
                    />

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-base-content/70">
                      {item.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Technology */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Technology Stack
            </h2>

            <p className="mt-4 text-base-content/70">
              GeoLog is built with modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="badge badge-lg badge-primary badge-outline"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-20 bg-primary text-primary-content">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <Users
            className="mx-auto mb-6"
            size={48}
          />

          <h2 className="text-4xl font-bold">
            Ready to manage your geological data?
          </h2>

          <p className="mt-6 opacity-90">
            Join GeoLog and modernize the way your team manages
            wells and core samples.
          </p>

          <Link
            href="/register"
            className="btn btn-neutral btn-lg mt-8"
          >
            Get Started

            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}