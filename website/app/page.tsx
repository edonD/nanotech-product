import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Technology from "./components/Technology";
import Science from "./components/Science";
import Product from "./components/Product";
import Applications from "./components/Applications";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Problem />
      <div className="section-divider" />
      <Technology />
      <Science />
      <div className="section-divider" />
      <Product />
      <div className="section-divider" />
      <Applications />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
