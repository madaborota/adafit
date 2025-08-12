
const Hero = () => (
  <section className="bg-white py-5 hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start ">
          <img src="/divider.png" alt="Ada Fit Logo" className="mb-4 "  style={{maxWidth: '90%'}} />
          <h1 className="display-4 fw-normal mb-3" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700}}>Tansformă-ți corpul<br />cu Ada Fit</h1>
          <p className="lead mb-4" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Programe video de antrenament și Pilates, create pentru a-ți tonifia corpul, a-ți crește energia și a-ți transforma stilul de viață.</p>
          <button className="btn btn-dark px-4 py-2 mt-2 rounded-pill" style={{minWidth: 120}}>Start Now</button>
        </div>
        <div className="col-md-6 position-relative d-flex flex-column align-items-center justify-content-center hero-right-col">
          {/* Faded background image */}
          <img src="/src/assets/hero-woman.png" alt="Fitness Woman" className="hero-bg-img position-absolute top-0 start-50 translate-middle-x" style={{zIndex: 1}} />
          {/* Countdown foreground */}
          <div className="position-relative d-flex flex-column align-items-center" style={{zIndex: 2, marginTop: 120}}>
            <div className="countdown-box p-0" style={{boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderRadius: '1.5rem', background: '#fff', minWidth: 340, padding: 0}}>
              <div className="text-center pt-3 pb-2" style={{fontSize: '1rem', color: '#888'}}>Site launches in:</div>
              <div className="d-flex justify-content-center align-items-center gap-0 px-3 pb-3">
                <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0'}}>
                  <span className="countdown-value" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111'}}>00</span>
                  <span className="countdown-unit" style={{fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em'}}>DAYS</span>
                </div>
                <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0'}}>
                  <span className="countdown-value" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111'}}>00</span>
                  <span className="countdown-unit" style={{fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em'}}>HOURS</span>
                </div>
                <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0'}}>
                  <span className="countdown-value" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111'}}>00</span>
                  <span className="countdown-unit" style={{fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em'}}>MINUTES</span>
                </div>
                <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0'}}>
                  <span className="countdown-value" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111'}}>00</span>
                  <span className="countdown-unit" style={{fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em'}}>SECONDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
