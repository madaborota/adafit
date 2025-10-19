
import { useEffect, useState } from "react";
import NewsletterTrigger from "../Modal/NewsletterTrigger";

const TEN_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000; // set to 30 days
const LAUNCH_DATE = new Date(Date.now() + TEN_DAYS_IN_MS);

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(LAUNCH_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(LAUNCH_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="bg-white hero-section overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          {/* Col stânga: TEXT */}
          <div className="col-12 col-md-6 text-center text-md-start d-flex flex-column align-items-start justify-content-center">
            <img src="/divider.png" alt="Ada Fit Logo" className="mb-4 mx-auto mx-md-0" style={{ maxWidth: '100%' }} />
            <h1 className="display-4 fw-normal mb-3 ">Tansformă-ți corpul cu fit by Ada</h1>
            <p className="lead mb-4" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Programe video de antrenament și Pilates, create pentru a-ți tonifia corpul, a-ți crește energia și a-ți transforma stilul de viață.</p>
            <NewsletterTrigger className="px-4 py-2 fw-semibold align-self-center align-self-md-start"> Începe acum</NewsletterTrigger>
          </div>

          {/* Col dreapta: COUNTDOWN cu imagine (111.png) în spate */}
          <div className="col-12 col-md-6 position-relative overflow-visible d-flex align-items-center justify-content-center" style={{ minHeight: 520 }}>
            {/* Imagine RELATIVĂ (sub countdown) */}
            <img
              src="/111.png"
              alt="fit by Ada"
              style={{
                position: 'absolute',
                bottom: 0,
                left: '20%',
                transform: 'translateX(-50%) scale(1)',
                transformOrigin: 'bottom center',
                height: '100%',
                width: 'auto',
                maxWidth: 'none',
                zIndex: 1,
                opacity: 0.6,
                top: '2%',
                filter: 'grayscale(40%)',
                pointerEvents: 'none'
              }}
            />

            {/* Countdown în fața imaginii */}
            <div className="position-absolute top-50 start-50 translate-middle w-100 d-flex flex-column align-items-center" style={{ zIndex: 2 }}>
              <div className="countdown-box p-0 hero-countdown-zoom" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderRadius: '1.5rem', background: '#fff', minWidth: 280, maxWidth: 400, padding: 0, position: 'relative' }}>
                <div className="text-center pt-3 pb-2" style={{ fontSize: '1rem', color: '#888' }}>Site-ul oficial se lansează în:</div>
                <div className="d-flex justify-content-center align-items-center gap-0 px-3 pb-3 flex-wrap">
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2 my-1" style={{ background: '#faf6f3', minWidth: 60, minHeight: 60, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.days)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>ZILE</span>
                  </div>
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2 my-1" style={{ background: '#faf6f3', minWidth: 60, minHeight: 60, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.hours)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>ORE</span>
                  </div>
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2 my-1" style={{ background: '#faf6f3', minWidth: 60, minHeight: 60, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.minutes)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>MINUTE</span>
                  </div>
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2 my-1" style={{ background: '#faf6f3', minWidth: 60, minHeight: 60, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.seconds)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>SECUNDE</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
    <div id='about'></div>

        </div>

      </div>
      {/* subtle zoom (magnifier) effect on countdown */}
      <style>{`
        .hero-section .hero-countdown-zoom { 
          transition: transform 220ms ease; 
          transform-origin: center; 
          will-change: transform; 
        }
        .hero-section .hero-countdown-zoom:hover { 
          transform: scale(1.05); 
        }
        @media (max-width: 575.98px) {
          .hero-section .hero-countdown-zoom:hover { transform: scale(1.03); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
