import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import Projects from "@/components/Portfolio/Projects";
import Services from "@/components/Portfolio/Services";
import Approach from "@/components/Portfolio/Approach";
import About from "@/components/Portfolio/About";
import FAQ from "@/components/Portfolio/FAQ";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";
import PageMetadata from "@/components/PageMetadata";
export default function Index() {
  return (
    <>
      <PageMetadata
        title="Dennis Muchai | Business Software & AI Automation"
        description="Custom software and AI automation for growing businesses. Work directly with Dennis Muchai through Cody Digital Ventures Ltd."
      />
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <Approach />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
