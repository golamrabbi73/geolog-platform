import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* Left */}
          <div>
            <span className="badge badge-primary badge-outline mb-5">
              Enterprise Geological Data Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Manage
              <span className="text-primary">
                {" "}
                Core Samples
              </span>
              <br />
              Wells &
              <br />
              Geological Data
            </h1>

            <p className="mt-6 text-lg text-base-content/70 leading-8">
              GeoLog helps geological teams securely manage
              wells, drilling records, and core samples in one
              centralized platform with role-based access,
              analytics, and modern workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="btn btn-primary btn-lg"
              >
                Get Started
              </Link>

              <Link
                href="/login"
                className="btn btn-outline btn-lg"
              >
                Live Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-primary">
                  500+
                </h3>

                <p className="text-base-content/60">
                  Wells Managed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  10K+
                </h3>

                <p className="text-base-content/60">
                  Core Samples
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  99.9%
                </h3>

                <p className="text-base-content/60">
                  Data Reliability
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="card bg-base-100 shadow-2xl w-full max-w-md border">
              <div className="card-body">
                <div className="stats stats-vertical shadow">
                  <div className="stat">
                    <div className="stat-title">
                      Active Wells
                    </div>

                    <div className="stat-value text-primary">
                      128
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">
                      Core Samples
                    </div>

                    <div className="stat-value text-secondary">
                      4,532
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">
                      Field Engineers
                    </div>

                    <div className="stat-value">
                      42
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}