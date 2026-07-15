import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-4">

        <div className="hero rounded-3xl bg-primary text-primary-content">

          <div className="hero-content text-center py-20">

            <div>

              <h2 className="text-5xl font-bold">
                Ready to Manage Geological Data?
              </h2>

              <p className="py-6 max-w-2xl">
                Start organizing wells, drilling operations,
                and core samples using a modern platform built
                for geological teams.
              </p>

              <Link
                href="/register"
                className="btn btn-neutral"
              >
                Get Started
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}