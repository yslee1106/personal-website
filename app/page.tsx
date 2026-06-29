import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
