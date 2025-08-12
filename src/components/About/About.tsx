const About = () => (
  <section className="about-section py-5" style={{background: '#f6ede7'}}>
    <div className="container">
      <div className="row align-items-center flex-md-nowrap flex-wrap">
        <div className="col-md-3 d-flex justify-content-center mb-3 mb-md-0">
          <img src="/src/assets/about-ada.png" alt="Ada" className="rounded-circle border border-3 border-white shadow about-img" style={{width: 200, height: 200, objectFit: 'cover'}} />
        </div>
        <div className="col-md-9">
          <h2 className="fw-semibold mb-3" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem'}}>About Me</h2>
          <div className="about-text-box p-3 rounded-4" style={{background: 'transparent'}}>
            <p className="mb-2" style={{fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem'}}>I'm Ada, a fitness coach, former performance athlete, and health enthusiast. My programs are carefully created for women like you, focusing on building strength while maintaining feminine grace.</p>
            <p className="mb-0" style={{fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem'}}>With over 10 years of experience in fitness training, I've developed <span className="badge bg-secondary px-2 py-1 mx-1">3 / 4</span> efficiently for women's bodies, helping you achieve your goals while enjoying the process.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
