import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import Projects from "@/components/Portfolio/Projects";
import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
