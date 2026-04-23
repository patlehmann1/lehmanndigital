export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Looking for a reliable developer for your next project? Let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 sm:p-12 border border-slate-700">
          <div className="text-center space-y-8">
            <div>
              <p className="text-slate-300 mb-6">
                Send me an email to discuss your project requirements, timeline, and how we can work together.
              </p>
              <a
                href="mailto:patrick@lehmanndigital.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                patrick@lehmanndigital.com
              </a>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <p className="text-slate-400 mb-4">Connect on LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Lehmann Digital. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
