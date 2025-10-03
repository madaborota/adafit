import NewsletterTrigger from "../Modal/NewsletterTrigger";

const Programs = () => (
  <section className="py-5 programs-section">
    <div className="container">
      <h2 className="text-center mb-5" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem' }}>Progamele mele</h2>
      <div className="row g-4 px-5">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <img src="toning.JPG" className="card-img-top rounded-4" alt="Toning Program" style={{ height: 220, objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Toning Program</h5>
                <p className="card-text small mb-2">Sculptăm și definim musculatura cu exerciții țintite, concepute pentru a evidenția formele tale naturale. Programul este personalizat în funcție de obiective și poate fi efectuat atât în sala de fitness, cât și acasă sau în călătorii.</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mt-3">
                <span className="fw-semibold text-dark me-auto" style={{ fontSize: '1rem' }}>de la 100 RON</span>
                {/* <button className="btn btn-dark btn-sm rounded-pill mt-2 mt-md-0 px-3">Detali</button> */}
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill mt-2 mt-md-0 px-3"> Vezi Prețul</NewsletterTrigger>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <img src="pilates.JPG" className="card-img-top rounded-4" alt="Mobility, Stretching & Pilates" style={{ height: 220, objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Mobility, Stretching & Pilates</h5>
                <p className="card-text small mb-2">Îmbunătățește-ți flexibilitatea, postura și previno accidentările cu un program complet ce combină mobilitatea, stretchingul și exercițiile de Pilates. Adaptat pentru orice nivel, îți oferă libertate de mișcare, echilibru și o stare generală mai bună.</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mt-3">
                <span className="fw-semibold text-dark me-auto" style={{ fontSize: '1rem' }}>de la 100 RON</span>
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill mt-2 mt-md-0 px-3"> Vezi Prețul</NewsletterTrigger>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <img src="home.jpg" className="card-img-top rounded-4" alt="At-Home HIIT" style={{ height: 220, objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>At-Home HIIT</h5>
                <p className="card-text small mb-2">Arde calorii rapid și stimulează metabolismul cu antrenamente de tip High-Intensity Interval Training. Ideal pentru rezultate vizibile într-un timp scurt.</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mt-3">
                <span className="fw-semibold text-dark me-auto" style={{ fontSize: '1rem' }}>de la 100 RON</span>
                <NewsletterTrigger className="btn btn-dark btn-sm rounded-pill mt-2 mt-md-0 px-3"> Vezi Prețul</NewsletterTrigger>

                {/* <button className="btn btn-dark btn-sm rounded-pill mt-2 mt-md-0 px-3">Detaili</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Programs;
