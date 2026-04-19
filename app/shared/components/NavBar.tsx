import { useState } from "react";
import { GroweIcon } from "../utils/growe.icon";
import ThemeToggle from "./ThemeToggle";




export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <nav className="bg-white fixed w-[100vw] z-50 dark:bg-[#0F1C08] shadow-green-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 no-underline">
                    <GroweIcon size={36} />
                    <span className="font-(--font-display) text-[1.5rem] text-(--color-forest) tracking-tight">Growe</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#como-funciona" className="text-(--color-forest) hover:text-(--color-mid) font-medium transition-colors">Como funciona</a>
                    <a href="#funcionalidades" className="text-(--color-forest) hover:text-(--color-mid) font-medium transition-colors">Funcionalidades</a>
                    <a href="#contato" className="btn btn-soft btn-sm">Entrar em contato</a>
                    <a href="#cadastro2" className="btn btn-primary btn-sm">Cadastrar</a>
                </div>

                <ThemeToggle />

                {/* Mobile hamburger */}
                <button
                    aria-expanded={navOpen}
                    onClick={() => setNavOpen(!navOpen)}
                    className="md:hidden btn-ghost p-2 rounded-md"
                >
                    {navOpen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="var(--color-forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="var(--color-forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${navOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
                <div className="flex flex-col gap-3">
                    <a href="#como-funciona" className="text-(--color-forest) hover:text-(--color-mid) font-medium">Como funciona</a>
                    <a href="#funcionalidades" className="text-(--color-forest) hover:text-(--color-mid) font-medium">Funcionalidades</a>
                    <a href="#contato" className="btn btn-soft">Entrar em contato</a>
                    <a href="#cadastro2" className="btn btn-primary">Cadastrar</a>
                </div>
            </div>
        </nav>
    )
}