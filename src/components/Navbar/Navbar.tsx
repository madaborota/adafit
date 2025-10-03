import NewsletterTrigger from "../Modal/NewsletterTrigger"

export const Navbar = () => {

    return (

        <header className="container-fluid border-bottom py-2 bg-white sticky-top" style={{ zIndex: 100 }}>
            <div className="container d-flex justify-content-between align-items-center">
                <div style={{ height: 56, display: 'flex', alignItems: 'center' }}>
                    <img src="/adafit_logo.png" alt="Ada Fit Logo" style={{ height: 79, maxWidth: 160, transform: 'scale(1.6-)', objectFit: 'contain' }} />
                </div>
                <nav>
                    <a href="#about" className="text-dark text-decoration-none mx-1 mx-sm-3">Despre</a>
                    <a href="#programs" className="text-dark text-decoration-none mx-1 mx-sm-3">Programe</a>
                    <a href="#testimonials" className="text-dark text-decoration-none mx-1 mx-sm-3">Testimoniale</a>
                    <NewsletterTrigger className="px-4 py-2 fw-semibold ms-2" />
                </nav>
            </div>
        </header>
    )
}