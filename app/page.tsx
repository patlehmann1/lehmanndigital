import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WorkApproach from "./components/WorkApproach";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <WorkApproach />
        <Contact />
      </main>
    </>
  );
}
