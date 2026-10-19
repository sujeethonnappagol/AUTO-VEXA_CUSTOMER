import { Link } from 'react-router-dom';

export default function BrandLogo() {
  return <Link className="brand" to="/" aria-label="Auto-Vexa home">
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 18.5 15.5 14l5.8-1.5L24 16l2.7-3.5 5.8 1.5 7.5 4.5-8.4-1.7-5 2-2.6-2.4-2.6 2.4-5-2L8 18.5Z" fill="currentColor" opacity=".88"/>
        <path d="m11 29 3-1 3.2-6a3.3 3.3 0 0 1 2.9-1.7h8a3.3 3.3 0 0 1 2.9 1.7l3.2 6 3 1 1.2 7H9.8l1.2-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="m18 27 2-4h8l2 4H18Z" fill="currentColor" opacity=".28"/>
        <circle cx="16" cy="33" r="1.7" fill="currentColor"/><circle cx="32" cy="33" r="1.7" fill="currentColor"/>
      </svg>
    </span>
    <span className="brand-wordmark">AUTO<span>-</span>VEXA</span>
  </Link>;
}
