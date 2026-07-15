const stats = [
  {
    value: "500+",
    title: "Managed Wells",
  },
  {
    value: "10,000+",
    title: "Core Samples",
  },
  {
    value: "40+",
    title: "Field Engineers",
  },
  {
    value: "99.9%",
    title: "Data Reliability",
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="py-24 bg-primary text-primary-content"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold">
            GeoLog in Numbers
          </h2>

          <p className="mt-5 opacity-90">
            Designed to help geological organizations manage
            critical field data with efficiency and confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">
                {item.value}
              </h3>

              <p className="mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}