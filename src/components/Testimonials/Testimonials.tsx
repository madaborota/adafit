const testimonials = [
  {
    text: "Clasele de Pilates pentru tonifiere cu Ada sunt absolut minunate! În doar câteva săptămâni am observat cum corpul meu a devenit mai ferm, postura mea s-a îmbunătățit și mă simt mult mai energică. Ada explică fiecare exercițiu cu răbdare și îți corectează postura astfel încât să ai rezultate maxime. Astept cu nerabdare programele pentru acasa. ",
    name: "Madalina B.",
    details: "Clase Pilates cu Ada",
    img: "/testimoniale1.jpeg"
  },
  {
    text: "Nu credeam că Pilatesul poate avea un impact atât de mare asupra tonifierii musculaturii! Fiecare ședință este diferită, provocatoare, dar și relaxantă în același timp. Ada reușește să creeze o atmosferă plăcută și motivantă. Rezultatele se văd, iar spatele meu nu a mai fost niciodată atât de drept!",
    name: "Elena P.",
    details: "Clase Pilates cu Ada",
    img: "/testimoniale3.jpeg"
  },
  {
    text: "Antrenamentele cu Ada în sală sunt next level! Îți explică tot, de la tehnică corectă până la respirație, și știe exact cum să te motiveze. Am câștigat masă musculară, am crescut în forță și am învățat să mă antrenez eficient, fără să pierd timpul.",
    name: "Ioana D.",
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
