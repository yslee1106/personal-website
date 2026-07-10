import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
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
        <Awards />
        <Rule />
        <Education />
        <Rule />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
