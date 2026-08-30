import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Startups from './components/Startups';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <>
      <Navbar onOpenResume={openResume} />
      <main>
        <Hero onOpenResume={openResume} />
        <About onOpenResume={openResume} />
        <Projects />
        <Startups />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Contact onOpenResume={openResume} />
      </main>
      <Footer onOpenResume={openResume} />
      <ChatWidget onOpenResume={openResume} />
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </>
  );
}
