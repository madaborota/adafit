const testimonials = [
  {
    text: "Ada's toning program completely transformed my energy and confidence. The workouts are challenging yet doable, and I love how she explains the purpose behind each exercise.",
    name: "Maria C.",
    details: "Toning Program Member, 6 months",
    img: "/src/assets/client-maria.png"
  },
  {
    text: "The mobility & stretching program helped me recover from an old injury and feel more flexible than ever. Highly recommend Ada's approach!",
    name: "Elena P.",
    details: "Mobility Program Member, 3 months",
    img: "/src/assets/client-elena.png"
  },
  {
    text: "I love the HIIT workouts! They're short, effective, and fit perfectly into my busy schedule. Ada keeps me motivated every session.",
    name: "Ioana D.",
    details: "HIIT Program Member, 1 year",
    img: "/src/assets/client-ioana.png"
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
    <section className="testimonials-section py-5" style={{background: '#f6ede7'}}>
      <div className="container">
  <h2 className="text-center mb-5" style={{fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem'}}>What My Clients Say</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4 mb-4 border-0 rounded-4 position-relative" style={{minHeight: 220, fontFamily: 'Inter, Arial, sans-serif'}}>
              <div className="mb-3">
                <span className="fs-1 lh-1">&ldquo;</span>
              </div>
              <div className="mb-3">
                <span className="badge bg-secondary px-2 py-1 mx-1">3 / 4</span>
              </div>
              <p className="mb-3 fst-italic" style={{fontSize: '1.05rem', fontFamily: 'Inter, Arial, sans-serif'}}>
                {testimonials[active].text}
              </p>
              <div className="d-flex align-items-center mt-3">
                <img src={testimonials[active].img} alt={testimonials[active].name} className="rounded-circle me-3" style={{width: 40, height: 40, objectFit: 'cover'}} />
                <div>
                  <div className="fw-semibold" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{testimonials[active].name}</div>
                  <div className="small text-muted" style={{fontFamily: 'Inter, Arial, sans-serif'}}>{testimonials[active].details}</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot mx-1 ${active === idx ? 'bg-dark' : 'bg-secondary'}`}
                  style={{width: 8, height: 8, borderRadius: '50%', display: 'inline-block'}}
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
