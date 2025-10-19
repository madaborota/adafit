import NewsletterTrigger from "../Modal/NewsletterTrigger";

const Programs = () => (
  <section className="py-5 programs-section">
    <div className="container">
      <h2 className="text-center mb-5" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem' }}>Programele mele</h2>
      <div className="row gx-2 gy-4 px-0">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <div className="card-zoom">
              <img src="toning.JPG" className="card-img-top rounded-4" alt="Fitness Program" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Fitness Program</h5>
                <p className="card-text small mb-2">Sculptăm și definim musculatura cu exerciții țintite, concepute pentru a evidenția formele tale naturale. Programul este personalizat în funcție de obiective și poate fi efectuat atât în sala de fitness, cât și acasă sau în călătorii.</p>
              </div>
              <div className="d-flex align-items-center mt-3 w-100">
                <span className="fw-semibold text-dark text-nowrap" style={{ fontSize: '1rem' }}>25 antrenamente</span>
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill px-3 ms-auto">Preț</NewsletterTrigger>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <div className="card-zoom">
              <img src="pilates.JPG" className="card-img-top rounded-4" alt="Mobility, Stretching & Pilates" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Mobility, Stretching & Pilates</h5>
                <p className="card-text small mb-2">mbunătățește-ți flexibilitatea, postura și echilibrul cu un program de mobilitate, stretching și Pilates, potrivit pentru orice nivel, care te ajută să arzi calorii și să slăbești sănătos.</p>
              </div>
              <div className="d-flex align-items-center mt-3 w-100">
                <span className="fw-semibold text-dark text-nowrap" style={{ fontSize: '1rem' }}>20 antrenamente</span>
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill px-3 ms-auto">Preț</NewsletterTrigger>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <div className="card-zoom">
              <img src="meniu.jpeg" className="card-img-top rounded-4" alt="At-Home HIIT" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Meniu sanatos personalizat</h5>
                <p className="card-text small mb-2">Slăbește mai ușor și menține-ți energia zilnică cu rețete echilibrate, simple și gustoase. Meniul este personalizat pentru obiectivele tale și îți oferă combinația ideală de nutrienți, ca să ai rezultate vizibile fără stres.</p>
              </div>
              <div className="d-flex align-items-center mt-3 w-100">
                <span className="fw-semibold text-dark text-nowrap" style={{ fontSize: '1rem' }}>25 retete</span>
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill px-3 ms-auto">Preț</NewsletterTrigger>

                {/* <button className="btn btn-dark btn-sm rounded-pill mt-2 mt-md-0 px-3">Detaili</button> */}
              </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <div className="card-zoom">
              <img src="mada1.png" className="card-img-top rounded-4" alt="Antrenamente acasă (HIIT)" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Coming Soon </h5>
                <p className="card-text small mb-2">Descoperă noua colecție ADACAYN, haine sport create pentru mișcare, echilibru și stil, cu confort premium, design minimalist și libertate totală în fiecare antrenament, pentru performanță și încredere în mișcare.
</p>
              </div>
              <div className="d-flex align-items-center mt-3 w-100">
                <span className="fw-semibold text-dark text-nowrap" style={{ fontSize: '1rem' }}>NEW</span>
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill px-3 ms-auto">Vezi colectia</NewsletterTrigger>
              </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    {/* Subtle zoom animation for card bodies (no external CSS) */}
    <style>{`
      .programs-section .card { overflow: hidden; }
      .programs-section .card-zoom { transition: transform 220ms ease; transform-origin: center; will-change: transform; }
      .programs-section .card:hover .card-zoom { transform: scale(1.03); }
      @media (max-width: 575.98px) {
        .programs-section .card:hover .card-zoom { transform: scale(1.015); }
      }
    `}</style>
  </section>
);

export default Programs;
