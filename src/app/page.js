import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCirsor";

export default function Page() {
  return (
    <main className="bg-[#080c10] text-white antialiased">
      <CustomCursor />
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
