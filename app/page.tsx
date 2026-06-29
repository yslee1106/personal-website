import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Rule from "@/components/Rule";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Rule />
        <Projects />
        <Rule />
        <Testimonials />
        <Rule />
        <Awards />
        <Rule />
        <Education />
        <Rule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
