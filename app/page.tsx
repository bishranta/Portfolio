import { Nav } from "@/app/components/nav";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Skills } from "@/app/components/skills";
import { Experience } from "@/app/components/experience";
import { Education } from "@/app/components/education";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";
import { ScrollToTop } from "@/app/components/scroll-to-top";
import { ScrollProgress } from "@/app/components/scroll-progress";
import { Grain } from "@/app/components/grain";
import { CircuitBackground } from "@/app/components/circuit-background";

export default function Home() {
  return (
    <>
      <CircuitBackground />
      <ScrollProgress />
      <Grain />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
