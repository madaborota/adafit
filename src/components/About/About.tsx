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
            <p className="mb-2" style={{fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem'}}>Sunt Ada antrenor de fitness și instructor de Pilates, fostă sportivă de performanță cu 9 ani în scrimă. Creez antrenamente și planuri de nutriție personalizate ca să îți transform corpul, energia și stilul de viață. Cu disciplină și pasiune, obții rezultatele pe care le meriți! 💪✨</p>
            <p className="mb-0" style={{fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem'}}>Creez antrenamente și planuri de nutriție personalizate ca să îți transform corpul, energia și stilul de viață. Cu disciplină și pasiune, obții rezultatele pe care le meriți!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
