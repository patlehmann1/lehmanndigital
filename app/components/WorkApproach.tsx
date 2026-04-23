export default function WorkApproach() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your project requirements, timeline, and technical challenges to ensure clear alignment.",
    },
    {
      title: "Scoped Engagement",
      description: "Projects are broken into manageable, well-defined scopes. This keeps work focused and expectations clear.",
    },
    {
      title: "Regular Communication",
      description: "Consistent updates on progress, blockers, and next steps. No surprises, just transparent collaboration.",
    },
    {
      title: "Delivery & Support",
      description: "Clean, tested code delivered on time. Post-delivery support available for questions and minor adjustments.",
    },
  ];

  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Straightforward, reliable collaboration focused on delivering working software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Engagement Options
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 text-slate-700">
            <div>
              <p className="font-semibold mb-2">Project-Based</p>
              <p className="text-sm">Fixed-scope projects with clear deliverables and timelines.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Part-Time Contract</p>
              <p className="text-sm">Ongoing support and development on a flexible schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
