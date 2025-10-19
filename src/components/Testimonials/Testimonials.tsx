import React, { useEffect, useState } from "react";

const testimonials = [ 
  {
    text: "Clasele de Pilates pentru tonifiere cu Ada sunt absolut minunate! În doar câteva săptămâni am observat cum corpul meu a devenit mai ferm, postura mea s-a îmbunătățit și mă simt mult mai energică. Ada explică fiecare exercițiu cu răbdare și îți corectează postura astfel încât să ai rezultate maxime. Aștept cu nerăbdare programele pentru acasă.",
    name: "Madalina B.",
    details: "Clase Pilates cu Ada",
    img: "/testimoniale1.jpeg"
  },
  {
    text: "Îmi lipsește mult, atât clasa de Pilates, cât și tu! Atmosfera pe care o creezi contează aproape la fel de mult ca exercițiile în sine. Personal, mă motivezi să mănânc mai sănătos, să am mai multă grijă de corpul meu și să pun sportul pe lista de priorități. Ești o inspirație! Orele de Pilates cu tine nu sunt doar un simplu antrenament, ci o experiență completă.",
    name: "Teodora C.",
    details: "Antrenorul meu personal Ada",
    img: "/oana1.jpeg"
  },
  {
    text: "Draga mea, mă bucur enorm că am ales cursurile de pilates în urmă cu un an! Se vede că faci totul cu pasiune și experiență. După doar câteva săptămâni, mi-am recăpătat energia și motivația. Esti super profi, știi exact cum să adaptezi antrenamentele și să scoți tot ce e mai bun din fiecare. Mulțumesc pentru tot!",
    name: "Carmen D.",
    details: "Antrenorul meu personal Ada",
    img: "/carmen.jpeg"
  },
  {
    text: "Sunt extrem de încântată de colaborarea cu Ada! Deși nu mai făcusem sport de foarte mulți ani și aveam emoții legate de cum va decurge totul, m-a surprins plăcut încă de la prima ședință. Este foarte serioasă, implicată și atentă la nevoile fiecăruia.Exercițiile au fost mereu adaptate perfect la nivelul meu, fără să mă simt copleșită sau descurajată. Progresul se simte de la o ședință la alta, iar motivația a revenit treptat, tocmai datorită modului profesionist în care lucrează. Îți dă încredere, te susține și îți arată că se poate, indiferent de punctul de plecare.Recomand cu toată încrederea!",
    name: "Ada F.",
    details: "Clase de Pilates cu Ada",
    img: "/adaF.png"
  },
  {
    text: "Mulțumesc, Ada, pentru dedicarea și inspirația pe care le aduci la fiecare antrenament. Ești o profesionistă desăvârșită, mereu atentă la nevoile fiecăruia și dedicată 100% rezultatelor. Sub îndrumarea ta, procesul de transformare devine o experiență plăcută și motivantă. Recomand cu încredere oricui își dorește rezultate reale și o ghidare atentă! ❤️",
    name: "Mirela S.",
    details: "Antrenamente personalizate cu Ada",
    img: "/mirela1.jpeg"
  },
  {
    text: "Bună!🥰 Voiam să îți mulțumesc ptr tot!Sunt super intense și faine antrenamentele cu tine😇 Și ora de pilates e minunată iar tu ești superbă și drăguță☺️",
    name: "Monica D.",
    details: "Antrenamente personalizate cu Ada",
    img: "/monica.jpeg"
  },
  {
    text: "Dedicarea si implicarea pe care le are Ada la fiecare sedinta de antrenament personal ma determina si pe mine sa pun 100% efort la toate intalnirile noastre. Nu am crezut niciodata ca voi ajunge sa spun ca imi place sa fac sport, dar de cand ma antrenez cu ea, abia astept urmatoarea sedinta sa vad ce exercitii mi-a mai pregatit. Antrenamentele sunt gandite si pregatite dinainte, astfel incat timpul petrecut in sala este optimizat la maxim. Astfel, sportul a devenit din corvoada, placere! 😁",
    name: "Oana T.",
    details: "Antrenamente personalizate cu Ada",
    img: "/oana2.jpeg"
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    
      className="testimonials-section"
      style={{ backgroundColor: "#f6ede7", padding: "80px 0" }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        <h2
          className="text-center mb-5"
          style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem' }}
        >
          Testimoniale
        </h2>
        <div
          className="card testimonials-card"
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          {/* LEFT SIDE */}
          <div
            className="testimonials-left"
            style={{
              flex: "1 1 55%",
              position: "relative",
              padding: "140px 40px 60px",
              textAlign: "center",
            }}
          >
            {/* Avatar */}
            <img
              className="testimonials-avatar"
              src={testimonials[active].img}
              alt={testimonials[active].name}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                (e.currentTarget as HTMLImageElement).src = '/testimoniale1.jpeg';
              }}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "10px solid #f6ede7",
                position: "absolute",
                top: "10px",
                left: "calc(50% - 60px)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              }}
            />

            {/* Stars */}
            <div
              style={{
                color: "#E0B84A",
                letterSpacing: "3px",
                fontSize: "18px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              ★★★★★
            </div>

            {/* Text */}
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "#333",
                lineHeight: "1.7",
                maxWidth: "420px",
                margin: "0 auto 20px auto",
              }}
            >
              {testimonials[active].text}
            </p>

            {/* Name */}
            <div
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                color: "#333",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                marginBottom: "10px",
              }}
            >
              {testimonials[active].name}
            </div>

            {/* Dots */}
            <div>
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setActive(idx)}
                  style={{
                    width: active === idx ? "9px" : "7px",
                    height: active === idx ? "9px" : "7px",
                    backgroundColor: active === idx ? "#111" : "#bbb",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "0 4px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                ></span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="testimonials-right"
            style={{
              flex: "1 1 45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              background: "#fff",
            }}
          >
            <img
              className="testimonials-right-img"
              src="/grup2.jpeg"
              alt="Grup Pilates"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.currentTarget as HTMLImageElement).src = '/home1.JPG'; }}
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Responsive stacking on mobile */}
      <style>{`
        /* Zoom (lupă) animation for avatar and right image */
        .testimonials-section .testimonials-avatar,
        .testimonials-section .testimonials-right-img {
          transition: transform 220ms ease;
          transform-origin: center;
          will-change: transform;
        }
        .testimonials-section .testimonials-avatar:hover,
        .testimonials-section .testimonials-right-img:hover {
          transform: scale(1.05);
        }

        @media (max-width: 575.98px) {
          .testimonials-section .testimonials-avatar:hover,
          .testimonials-section .testimonials-right-img:hover {
            transform: scale(1.03);
          }
        }

        @media (max-width: 767.98px) {
          .testimonials-section .testimonials-card { display: flex !important; flex-direction: column !important; }
          .testimonials-section .testimonials-left, .testimonials-section .testimonials-right { width: 100% !important; }
          .testimonials-section .testimonials-left { padding: 120px 20px 40px !important; }
          .testimonials-section .testimonials-left img { top: 0 !important; left: calc(50% - 60px) !important; }
          .testimonials-section .testimonials-right { padding: 16px !important; }
          .testimonials-section .testimonials-right img { max-width: 100% !important; width: 100% !important; height: auto !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
