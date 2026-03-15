import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Fabrication from './components/Fabrication';
import Reader from './components/Reader';
import ClinicalImpact from './components/ClinicalImpact';
import Market from './components/Market';
import Validation from './components/Validation';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Problem />
      <div className="section-glow section-glow-amber" />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <div className="section-glow section-glow-cyan" />
      <Fabrication />
      <div className="section-divider" />
      <div className="section-glow section-glow-cyan" />
      <Reader />
      <div className="section-divider" />
      <div className="section-glow section-glow-green" />
      <ClinicalImpact />
      <div className="section-divider" />
      <Market />
      <div className="section-divider" />
      <div className="section-glow section-glow-blue" />
      <Validation />
      <div className="section-divider" />
      <Team />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
