import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div className="bg-white">
    {/* Header */}
    <header className="container-fluid border-bottom py-2 bg-white sticky-top" style={{ zIndex: 100 }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div style={{height: 56, display: 'flex', alignItems: 'center'}}>
          <img src="/adafit_logo.png" alt="Ada Fit Logo" style={{height: 56, maxWidth: 160, transform: 'scale(1.35)', objectFit: 'contain'}} />
        </div>
        <nav>
          <a href="#about" className="text-dark text-decoration-none mx-3">Despre</a>
          <a href="#programs" className="text-dark text-decoration-none mx-3">Programe</a>
          <a href="#testimonials" className="text-dark text-decoration-none mx-3">Testimoniale</a>
          <a href="#subscribe" className="text-dark text-decoration-none mx-3">Subscribe</a>
        </nav>
      </div>
    </header>
    {/* Hero Section */}
    <div id="hero"><Hero /></div>
    {/* About Section */}
    <div id="about"><About /></div>
    {/* Programs Section */}
    <div id="programs"><Programs /></div>
    {/* Testimonials Section */}
    <div id="testimonials"><Testimonials /></div>
    {/* CTA Section */}
    <div id="subscribe"><CTA /></div>
    {/* Contact/Footer Section */}
    <Contact />
    <Footer />
  </div>
);

export default App;
