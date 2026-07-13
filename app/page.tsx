import { Nav } from "@/app/components/nav";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
