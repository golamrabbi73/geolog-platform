export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-base-200/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Page Header - Clean & Sophisticated */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Legal & Compliance
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-base-content mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-base-content/60">
            Transparency is the foundation of our partnership. Learn how we protect your geological data.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="space-y-6">
          <PolicyCard title="Data Ownership" icon="🔐">
            <p className="text-base-content/80 leading-relaxed">
              At <strong>GeoLog</strong>, we hold a simple belief: your geological logs and drilling data are yours alone. We act as custodians, ensuring your intellectual property remains exclusively under your control.
            </p>
          </PolicyCard>

          <PolicyCard title="Security Architecture" icon="🛡️">
            <p className="text-base-content/80 leading-relaxed">
              We leverage multi-tenant isolation, ensuring your data workspaces are architecturally separated. All assets are encrypted using <strong>AES-256</strong> standards both at rest and in transit.
            </p>
          </PolicyCard>

          <PolicyCard title="Usage Transparency" icon="💡">
            <p className="text-base-content/80 leading-relaxed">
              We process telemetry to improve platform stability, not to monetize your findings. We never share proprietary drilling data with third-party aggregators or research firms without your explicit consent.
            </p>
          </PolicyCard>
        </div>

        {/* Action Footer - High-End Touch */}
        <div className="mt-12 p-8 rounded-3xl bg-base-100 border border-base-300 shadow-xl flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Need detailed compliance docs?</h3>
            <p className="text-sm text-base-content/60">Our Data Processing Agreement is available on request.</p>
          </div>
          <a href="mailto:support@geolog.com" className="btn btn-primary rounded-full px-8">
            Contact Security
          </a>
        </div>
      </div>
    </main>
  );
}

// Custom Card Component for UI Consistency
function PolicyCard({ title, icon, children }: { title: string, icon: string, children: React.ReactNode }) {
  return (
    <div className="group bg-base-100 p-8 rounded-3xl border border-base-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="text-3xl p-4 bg-base-200 rounded-2xl group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-base-content mb-3">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}