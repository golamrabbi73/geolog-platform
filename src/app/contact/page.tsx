import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">

          <span className="badge badge-primary badge-outline">
            Contact Us
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Lets Build Better
            <span className="text-primary">
              {" "}Geological Workflows
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-base-content/70 leading-8">
            Have questions about GeoLog? Need support or want to
            learn more about our platform? Wed love to hear from
            you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">

                <Mail
                  className="text-primary mt-1"
                  size={24}
                />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-base-content/70">
                    support@geolog.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Phone
                  className="text-primary mt-1"
                  size={24}
                />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-base-content/70">
                    +880 1700-000000
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <MapPin
                  className="text-primary mt-1"
                  size={24}
                />

                <div>

                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="text-base-content/70">
                    Jashore, Bangladesh
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Clock
                  className="text-primary mt-1"
                  size={24}
                />

                <div>

                  <h3 className="font-semibold">
                    Working Hours
                  </h3>

                  <p className="text-base-content/70">
                    Sunday - Thursday
                  </p>

                  <p className="text-base-content/70">
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="card bg-base-100 shadow-lg">

            <div className="card-body">

              <h2 className="card-title text-2xl mb-4">
                Send us a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                />

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="bg-base-200 py-20">

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div className="collapse collapse-arrow bg-base-100">

              <input type="radio" name="faq" defaultChecked />

              <div className="collapse-title font-medium">
                What is GeoLog?
              </div>

              <div className="collapse-content">

                <p>
                  GeoLog is a geological data management
                  platform for wells, drilling activities and
                  core samples.
                </p>

              </div>

            </div>

            <div className="collapse collapse-arrow bg-base-100">

              <input type="radio" name="faq" />

              <div className="collapse-title font-medium">
                Is my data secure?
              </div>

              <div className="collapse-content">

                <p>
                  Yes. GeoLog uses JWT authentication,
                  authorization and secure backend APIs.
                </p>

              </div>

            </div>

            <div className="collapse collapse-arrow bg-base-100">

              <input type="radio" name="faq" />

              <div className="collapse-title font-medium">
                Who can use GeoLog?
              </div>

              <div className="collapse-content">

                <p>
                  Field Engineers, Managers and
                  Administrators can collaborate using
                  GeoLog.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-primary text-primary-content">

        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold">
            Ready to Start Using GeoLog?
          </h2>

          <p className="mt-5 opacity-90">
            Register today and manage geological projects with
            confidence.
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