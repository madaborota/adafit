const testimonials = [
  {
    text: "Clasele de Pilates pentru tonifiere cu Ada sunt absolut minunate! În doar câteva săptămâni am observat cum corpul meu a devenit mai ferm, postura mea s-a îmbunătățit și mă simt mult mai energică. Ada explică fiecare exercițiu cu răbdare și îți corectează postura astfel încât să ai rezultate maxime. Astept cu nerabdare programele pentru acasa. ",
    name: "Madalina B.",
    details: "Clase Pilates cu Ada",
    img: "/testimoniale1.jpeg"
  },
  {
    text: "Dedicarea si implicarea pe care le are Ada la fiecare sedinta de antrenament personal ma determina si pe mine sa pun 100% efort la toate intalnirile noastre. Nu am crezut niciodata ca voi ajunge sa spun ca imi place sa fac sport, dar de cand ma antrenez cu ea, abia astept urmatoarea sedinta sa vad ce exercitii mi-a mai pregatit.",
    name: "Oana T",
    details: "Antrenorul meu personal Ada",
    img: "/testimoniale3.jpeg"
  },
  {
    text: "Sunt extrem de încântată de colaborarea cu Ada! Deși nu mai făcusem sport de foarte mulți ani și aveam emoții legate de cum va decurge totul, m-a surprins plăcut încă de la prima ședință. Este foarte serioasă, implicată și atentă la nevoile fiecăruia.",
    name: "Ada F",
    details: "Antrenorul meu personal Ada",
    img: "/testimoniale2.jpeg"
  },
];
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section py-5" style={{ background: '#f6ede7' }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem' }}>Testimoniale</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4 mb-4 border-0 rounded-4 position-relative" style={{ minHeight: 220, fontFamily: 'Inter, Arial, sans-serif' }}>
              <span className="fs-1 lh-1 text-dark" style={{ fontSize: '2.5rem', fontWeight: 500, position: 'absolute', top: 20, left: 30, zIndex: 0 }}>&ldquo;</span>
              <p className="mb-3 fst-italic position-relative" style={{ fontSize: '1.15rem', fontFamily: 'Inter, Arial, sans-serif', zIndex: 1, lineHeight: 1.7, paddingLeft: 32, paddingRight: 32 }}>
                {testimonials[active].text}
                <span className="text-dark" style={{ fontSize: '2rem', fontWeight: 500, verticalAlign: 'bottom' }}>&rdquo;</span>
              </p>
              <div className="d-flex align-items-center mt-3">
                <img src={testimonials[active].img} alt={testimonials[active].name} className="rounded-circle me-3" style={{ width: 40, height: 40, objectFit: 'cover' }} />
                <div>
                  <div className="fw-semibold" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>{testimonials[active].name}</div>
                  <div className="small text-muted" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>{testimonials[active].details}</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot mx-1 ${active === idx ? 'bg-dark' : 'bg-secondary'}`}
                  style={{ width: 8, height: 8, borderRadius: '50%', display: 'inline-block' }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
