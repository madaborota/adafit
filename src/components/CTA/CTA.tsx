const CTA = () => (
  <section className="bg-white py-5">
    <div className="container text-center">
  <h2 className="mb-3" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem'}}>Inscrie-te acum</h2>
      <p className="mb-4">Fii primul care beneficiaza de programele mele la preturi speciale!</p>
      <form className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2" style={{maxWidth: 500, margin: '0 auto'}}>
        <input type="email" className="form-control rounded-pill mb-2 mb-md-0" placeholder="Your email address" style={{minWidth: 220, height: 48, fontSize: '1rem'}} />
        <button type="submit" className="btn btn-dark px-4 rounded-pill" style={{height: 50, minWidth: 150, fontSize: '1rem'}}>Inscrie-te</button>
      </form>
      <div className="small text-muted mt-2">Pentru primele persoane inscrise, ofer un discount de pana la 70%</div>
    </div>
  </section>
);

export default CTA;
