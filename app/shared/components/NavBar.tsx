import { useState, useEffect } from "react";
import { GroweIcon } from "../utils/growe.icon";

const links = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Funcionalidades", href: "#funcionalidades" },
];

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: scrolled ? "1px solid var(--color-soft)" : "1px solid transparent",
                boxShadow: scrolled ? "var(--shadow-blue-sm)" : "none",
            }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 no-underline group">
                        <GroweIcon size={32} />
                        <span
                            className="tracking-tight text-xl"
                            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
                        >
                            Growe
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-150"
                                style={{ color: "var(--color-stone)" }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--color-soft)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "var(--color-stone)";
                                }}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <a href="#contato" className="btn btn-ghost btn-sm">
                            Entrar em contato
                        </a>
                        <a href="#cadastro" className="btn btn-primary btn-sm">
                            Cadastrar grátis
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={navOpen}
                        onClick={() => setNavOpen(!navOpen)}
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
                        style={{ background: navOpen ? "var(--color-soft)" : "transparent" }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            {navOpen ? (
                                <path d="M18 6L6 18M6 6l12 12"
                                    stroke="var(--color-navy)" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            ) : (
                                <path d="M3 8h18M3 16h18"
                                    stroke="var(--color-navy)" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: navOpen ? "320px" : "0px",
                    opacity: navOpen ? 1 : 0,
                    borderTop: navOpen ? "1px solid var(--color-soft)" : "none",
                }}
            >
                <div className="px-6 py-4 flex flex-col gap-1">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setNavOpen(false)}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                            style={{ color: "var(--color-stone)" }}
                        >
                            {l.label}
                        </a>
                    ))}
                    <div
                        className="flex flex-col gap-2 pt-3 mt-1"
                        style={{ borderTop: "1px solid var(--color-soft)" }}
                    >
                        <a href="#contato" className="btn btn-outline btn-sm" onClick={() => setNavOpen(false)}>
                            Entrar em contato
                        </a>
                        <a href="#cadastro2" className="btn btn-primary btn-sm" onClick={() => setNavOpen(false)}>
                            Cadastrar grátis
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}