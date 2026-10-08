import About from './components/About';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductionCapabilities from './components/ProductionCapabilities';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Architecture />
        <ProductionCapabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
