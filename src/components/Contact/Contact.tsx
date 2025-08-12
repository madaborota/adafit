const Contact = () => (
  <section className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <h5 className="fw-bold mb-3">Ada <span className="fw-light">FIT</span></h5>
          <p className="small">Transforming bodies with grace and strength.</p>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold mb-3">Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="#about" className="text-white text-decoration-none">About Me</a></li>
            <li><a href="#programs" className="text-white text-decoration-none">Programs</a></li>
            <li><a href="#testimonials" className="text-white text-decoration-none">Testimonials</a></li>
            <li><a href="#subscribe" className="text-white text-decoration-none">Subscribe</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold mb-3">Connect With Me</h6>
          <div className="mb-2">
            <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white me-2"><i className="bi bi-tiktok"></i></a>
            <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
          </div>
          <div className="small">Email: hello@adafit.com</div>
        </div>
      </div>
      <div className="text-center small text-muted mt-4">&copy; Ada Fit 2025. All rights reserved.</div>
    </div>
  </section>
);

export default Contact;
