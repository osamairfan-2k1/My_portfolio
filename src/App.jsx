import Header from "./pages/header";
import Hero from "./pages/hero";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
         <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}