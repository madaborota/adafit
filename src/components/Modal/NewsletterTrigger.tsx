import { type ReactNode } from 'react';
import { useModal } from '../../context/ModalContext';

interface Props { children?: ReactNode; className?: string; options?: { title?: string; description?: string; submitLabel?: string; placeholder?: string; successMessage?: string; imageSrc?: string; imageAlt?: string; }; }

const NewsletterTrigger = ({ children, className = '', options }: Props) => {
    const { open } = useModal();
    return (
        <button
            type="button"
            onClick={() => open(options)}
            className={`btn btn-dark rounded-pill ${className}`}
            style={{ fontSize: '.85rem', letterSpacing: '.5px' }}
        >
            {children || 'Înscrie-te'}
        </button>
    );
};

export default NewsletterTrigger;
