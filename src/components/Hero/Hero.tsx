
import { useEffect, useState } from "react";
import NewsletterTrigger from "../Modal/NewsletterTrigger";

const TEN_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000;
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
    <section className="bg-white hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start ">
            <img src="/divider.png" alt="Ada Fit Logo" className="mb-4 " style={{ maxWidth: '90%' }} />
            <h1 className="display-4 fw-normal mb-3" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700 }}>Tansformă-ți corpul<br />cu Ada Fit</h1>
            <p className="lead mb-4" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Programe video de antrenament și Pilates, create pentru a-ți tonifia corpul, a-ți crește energia și a-ți transforma stilul de viață.</p>
            <NewsletterTrigger className="px-4 py-2 fw-semibold"> Începe acum</NewsletterTrigger>
          </div>
          <div
            className="col-md-6 position-relative d-flex flex-column align-items-center justify-content-center hero-right-col"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.85)), url("/1.png")',
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundPosition: 'center center, center 60px',
              // Make gradient cover the entire column, and the image tall vs. height using
              backgroundSize: '100% 100%, auto clamp(440px, 67vh, 670px)',
              filter: 'grayscale(60%)'
            }}
          >
            {/* Countdown foreground */}
            <div className="position-relative d-flex flex-column align-items-center" style={{ zIndex: 2, marginTop: 120 }}>
              <div className="countdown-box p-0" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderRadius: '1.5rem', background: '#fff', minWidth: 340, padding: 0, position: 'relative' }}>
                <div className="text-center pt-3 pb-2" style={{ fontSize: '1rem', color: '#888' }}>Site-ul oficial se lansează în:</div>
                <div className="d-flex justify-content-center align-items-center gap-0 px-3 pb-3">
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{ background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.days)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>ZILE</span>
                  </div>
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{ background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.hours)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>ORE</span>
                  </div>
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{ background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.minutes)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>MINUTE</span>
                  </div>
                  <div className="countdown-item bg-countdown rounded-4 d-flex flex-column align-items-center justify-content-center mx-2" style={{ background: '#faf6f3', minWidth: 70, minHeight: 70, padding: '10px 0' }}>
                    <span className="countdown-value" style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#111' }}>{pad(timeLeft.seconds)}</span>
                    <span className="countdown-unit" style={{ fontSize: '0.85rem', color: '#888', letterSpacing: '0.05em' }}>SECUNDE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
