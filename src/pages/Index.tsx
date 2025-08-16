import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling initialization
    gsap.registerPlugin(ScrollTrigger);
    
    // Add scroll-based animations
    ScrollTrigger.batch("section", {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, { opacity: 0.8, duration: 0.5 });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, { opacity: 1, duration: 0.5 });
      }
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
      /*  <Experience /> */
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
