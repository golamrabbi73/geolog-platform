const faqs = [
  {
    question: "Who can use GeoLog?",
    answer:
      "GeoLog is designed for field engineers, managers, and administrators working with geological and drilling data.",
  },
  {
    question: "Is my geological data secure?",
    answer:
      "Yes. GeoLog uses JWT authentication, role-based authorization, and secure APIs.",
  },
  {
    question: "Can I search wells and samples?",
    answer:
      "Yes. GeoLog provides powerful search, filtering, pagination, and management tools.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border mb-4"
          >
            <input type="radio" name="faq" />

            <div className="collapse-title font-semibold">
              {faq.question}
            </div>

            <div className="collapse-content">
              {faq.answer}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}