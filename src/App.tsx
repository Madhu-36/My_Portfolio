import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GithubGraph3D from './components/GithubGraph3D';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <div className="min-h-screen bg-ink-950">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Expertise />
          <GithubGraph3D />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </>
  );
}

export default App;
