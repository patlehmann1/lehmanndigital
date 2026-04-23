export default function Services() {
  const services = [
    {
      title: "ASP.NET / .NET Development",
      description: "Building, maintaining, and modernizing ASP.NET and .NET applications with best practices and scalable architecture.",
      icon: "🔧",
    },
    {
      title: "Full-Stack TypeScript",
      description: "End-to-end development using React, Angular, and Node.js for modern, type-safe web applications.",
      icon: "⚡",
    },
    {
      title: "Maintenance & Bug Fixing",
      description: "Performance improvements, debugging, and feature development for existing systems and codebases.",
      icon: "🛠️",
    },
    {
      title: "Internal Tools",
      description: "Custom internal tools and dashboards tailored to streamline your business operations and workflows.",
      icon: "📊",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Focused expertise in the technologies that power modern business applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 bg-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
