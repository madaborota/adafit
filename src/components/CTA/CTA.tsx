const CTA = () => (
  <section className="bg-white py-5">
    <div className="container text-center">
  <h2 className="mb-3" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem'}}>Stay Updated</h2>
      <p className="mb-4">Be the first to know when we launch new programs!</p>
      <form className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2" style={{maxWidth: 500, margin: '0 auto'}}>
        <input type="email" className="form-control rounded-pill mb-2 mb-md-0" placeholder="Your email address" style={{minWidth: 220, height: 48, fontSize: '1rem'}} />
        <button type="submit" className="btn btn-dark px-4 rounded-pill" style={{height: 48, fontSize: '1rem'}}>Subscribe</button>
      </form>
      <div className="small text-muted mt-2">We respect your privacy. Unsubscribe at any time.</div>
    </div>
  </section>
);

export default CTA;
