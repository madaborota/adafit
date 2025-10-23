import NewsletterTrigger from "../Modal/NewsletterTrigger";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top" style={{ zIndex: 100 }}>
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/" style={{ height: 56 }}>
                    <img src="/adafit_logo.png" alt="Ada Fit Logo" style={{ height: 90, maxWidth: 120, objectFit: 'contain' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                        <li className="nav-item">
                            <a href="#about" className="nav-link text-dark fw-semibold">Despre</a>
                        </li>
                        <li className="nav-item">
                            <a href="#programs" className="nav-link text-dark fw-semibold">Programe</a>
                        </li>
                        <li className="nav-item">
                            <a href="#testimonials" className="nav-link text-dark fw-semibold">Testimoniale</a>
                        </li>
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <NewsletterTrigger className="btn text-white btn-outline-dark rounded-pill px-3 py-1 fw-semibold" options={{ title: 'Newsletter' }}/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}