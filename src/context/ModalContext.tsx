import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';

interface ModalContextValue {
    open: (opts?: Partial<ModalContentOptions>) => void;
    close: () => void;
    isOpen: boolean;
    options: ModalContentOptions;
}

interface ModalContentOptions {
    title: string;
    description?: string;
    submitLabel?: string;
    placeholder?: string;
    successMessage?: string;
    imageSrc?: string;      // centered rounded image above text
    imageAlt?: string;
}

const DEFAULT_OPTIONS: ModalContentOptions = {
    title: 'Înscrie-te pe lista de așteptare',
    description: 'Intră pe lista de așteptare și primește un reminder când se lansează platforma de cursuri online Ada Fit, plus actualizări și oferte exclusive.',
    submitLabel: 'Mă înscriu',
    placeholder: 'Emailul tău',
    successMessage: 'Mulțumim! Te-ai înscris cu succes.',
    imageSrc: '/adafit_logo.png',
    imageAlt: 'Ada Fit'
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<ModalContentOptions>(DEFAULT_OPTIONS);
    const [showSuccess, setShowSuccess] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const open = useCallback((opts?: Partial<ModalContentOptions>) => {
        if (opts) setOptions({ ...DEFAULT_OPTIONS, ...opts });
        setShowSuccess(false);
        setIsOpen(true);
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setOptions(DEFAULT_OPTIONS), 300);
    }, []);

    // ESC close
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => e.key === 'Escape' && close();
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, close]);

    // Autofocus
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 30);
        }
    }, [isOpen]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        // const formdata = new FormData();
        // formdata.append("email", inputRef.current?.value || "");
        // console.log("Submitting email:", inputRef.current?.value || "");

        // const requestOptions: RequestInit = {
        //     method: "POST",
        //     body: formdata,
        //     redirect: "follow" as RequestRedirect
        // };

        // fetch("https://fit-backend.fastaudit.io/form.php", requestOptions)
        //     .then((response) => response.text())
        //     .then((result) => console.log(result))
        //     .catch((error) => console.error(error));

        // setShowSuccess(true);
        // setTimeout(() => {
        //     close();
        // }, 3000);
    };

    return (
        <ModalContext.Provider value={{ open, close, isOpen, options }}>
            {children}
            {isOpen && (
                <div
                    className="newsletter-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="newsletter-title"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) close();
                    }}
                >
                    <div className="newsletter-panel shadow-lg">
                        <button
                            type="button"
                            className="btn-close position-absolute top-0 end-0 m-3"
                            aria-label="Închide"
                            onClick={close}
                            style={{ filter: 'invert(1) grayscale(100%)' }}
                        />
                        {!showSuccess && (
                            <>
                                {options.imageSrc && (
                                    <div className="d-flex justify-content-center mb-3 mt-1">
                                        <img
                                            src={options.imageSrc}
                                            alt={options.imageAlt || ''}
                                            style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                                        />
                                    </div>
                                )}
                                <h2 id="newsletter-title" className="h5 fw-semibold mb-3 text-center">
                                    {options.title}
                                </h2>
                                {options.description && (
                                    <p className="text-muted small text-center mb-4 px-2">
                                        {options.description}
                                    </p>
                                )}
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <input
                                            ref={inputRef}
                                            type="email"
                                            required
                                            placeholder={options.placeholder}
                                            className="form-control form-control-lg rounded-pill px-4"
                                            style={{ fontSize: '0.95rem' }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-dark w-100 rounded-pill fw-medium"
                                        style={{ letterSpacing: '.5px' }}
                                    >
                                        {options.submitLabel}
                                    </button>
                                </form>
                                <div className="text-center mt-3">
                                    <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>
                                        Te poți dezabona oricând. Îți respectăm confidențialitatea.
                                    </small>
                                </div>
                            </>
                        )}
                        {showSuccess && (
                            <div className="text-center py-5">
                                <div className="h5 mb-3">{options.successMessage}</div>
                                <div className="small text-muted">Te vom contacta în curând.</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within ModalProvider');
    return ctx;
};
