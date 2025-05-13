import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import ParticleBackground from "@/components/particle-background"

// TODO: Replace the placeholder image in the Hero component with your actual photo
// You can add your image to the public folder and update the src in the Hero component

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
