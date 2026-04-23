export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <p className="text-slate-700 leading-relaxed mb-6">
              I&apos;m a senior full-stack software developer with over 7 years of professional experience at enterprise companies including Global Payments Inc. and Homes.com (CoStar Group). I&apos;m now available for contract and part-time work to help small and medium-sized businesses access the same level of expertise.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              My expertise spans the full development lifecycle, from architecting scalable backend systems in ASP.NET and .NET to building responsive, modern frontends with React, Angular, and TypeScript. Working at enterprise scale has taught me to write clean, maintainable code and deliver pragmatic solutions that solve real business problems.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              Whether you need a reliable developer to build a new feature, fix critical bugs, improve performance, or develop internal tools from scratch, I bring enterprise-grade expertise with a practical, no-nonsense approach. I&apos;m available for evening and weekend engagements, communicate clearly, and prioritize solutions that work.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 mt-8">
              <p className="text-slate-800 font-semibold mb-2">
                Background & Expertise
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>• 7+ years professional experience at Global Payments and Homes.com/CoStar</li>
                <li>• Deep expertise in ASP.NET, .NET, C#, and SQL Server</li>
                <li>• Full-stack TypeScript development (React, Angular, Node.js)</li>
                <li>• Enterprise-grade solutions for small business budgets</li>
                <li>• Available for contract and part-time engagements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
