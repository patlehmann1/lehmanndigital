export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Full-Stack Software Development
          <span className="block text-blue-600 mt-2">for Growing Businesses</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Senior developer with 7+ years experience building and maintaining ASP.NET, .NET, and TypeScript applications.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
