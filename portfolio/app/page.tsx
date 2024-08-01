import About from "@/components/about";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects />
      <Skills />
      <Experience />
      <Contact/>
    </main>
  )
}
