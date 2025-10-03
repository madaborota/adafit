import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => (
  <div className="bg-white">
    {/* Navbar */}
    <Navbar />
    {/* Hero Section */}
    <div id="hero"><Hero /></div>
    {/* About Section */}
    <div id="about"><About /></div>
    {/* Programs Section */}
    <div id="programs"><Programs /></div>
    {/* Testimonials Section */}
    <div id="testimonials"><Testimonials /></div>
    {/* CTA Section */}
    {/* <div id="subscribe"><CTA /></div> */}
    {/* Contact/Footer Section */}
    <Contact />
    <Footer />
  </div>
);

export default App;
