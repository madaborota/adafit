import NewsletterTrigger from "../Modal/NewsletterTrigger";

const Contact = () => (
  <section className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">

          <h5 className="fw-bold mb-3"> <img src="/adafit_logo.png" alt="Ada Fit Logo" style={{ height: 80, maxWidth: 200, transform: 'scale(1.20)', objectFit: 'contain' }} />Fit by <span className="fw-light">ADA</span></h5>
          <p className="small">Transformă-ți corpul, schimbă-ți viața! </p>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold mb-3">Link-uri utile</h6>
          <ul className="list-unstyled">
            <li><a href="#about" className="text-white text-decoration-none">Despre mine</a></li>
            <li><a href="#programs" className="text-white text-decoration-none">Programele mele</a></li>
            <li><a href="#testimonials" className="text-white text-decoration-none">Testimoniale</a></li>
            <li><a href="#subscribe" className="text-white text-decoration-none">Inscrie-te</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <h6 className="fw-bold mb-3">Social Media</h6>
          <div className="mb-2">
            <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white me-2"><i className="bi bi-tiktok"></i></a>
            <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
          </div>
          <div className="small">Email: andrada@fitbyada.com</div>
          <div className="mt-3">
            <NewsletterTrigger className="btn-sm bg-white text-dark px-3 py-2" options={{ submitLabel: 'Abonează-mă' }}>Începe acum</NewsletterTrigger>
          </div>
        </div>
      </div>
      <div className="text-center small text-muted mt-4">&copy;Ada Fit 2025. All rights reserved.</div>
    </div>
  </section>
);

export default Contact;
