
const Programs = () => (
  <section className="py-5 programs-section">
    <div className="container">
  <h2 className="text-center mb-5" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem'}}>My Programs</h2>
      <div className="row g-4 px-5">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <img src="/src/assets/program-toning.png" className="card-img-top rounded-4" alt="Toning Program" style={{height: 220, objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem'}}>Toning Program</h5>
                <p className="card-text small mb-2">Sculpt and define your body with targeted exercises designed to enhance your natural curves.</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-3">
                <span className="fw-semibold text-dark" style={{fontSize: '1rem'}}>from 99 RON/month</span>
                <button className="btn btn-outline-dark btn-sm rounded-pill mt-2 mt-md-0 px-3">See Details</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <img src="/src/assets/program-mobility.png" className="card-img-top rounded-4" alt="Mobility & Stretching" style={{height: 220, objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem'}}>Mobility & Stretching</h5>
                <p className="card-text small mb-2">Improve flexibility and prevent injuries with this comprehensive mobility program.</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-3">
                <span className="fw-semibold text-dark" style={{fontSize: '1rem'}}>from 79 RON/month</span>
                <button className="btn btn-outline-dark btn-sm rounded-pill mt-2 mt-md-0 px-3">See Details</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 p-2">
            <img src="/src/assets/program-hiit.png" className="card-img-top rounded-4" alt="At-Home HIIT" style={{height: 220, objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-2" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.1rem'}}>At-Home HIIT</h5>
                <p className="card-text small mb-2">Maximize calorie burn and boost your metabolism with these high-intensity interval workouts.</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-3">
                <span className="fw-semibold text-dark" style={{fontSize: '1rem'}}>from 89 RON/month</span>
                <button className="btn btn-outline-dark btn-sm rounded-pill mt-2 mt-md-0 px-3">See Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Programs;
