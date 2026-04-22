export default function Impairment() {
    return (
        <section
            className="relative py-24 px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692')" }}
        >
            {/* gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-(--color-navy) via-(--color-navy)/75 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Cultura que transforma</span>
                    </div>
                    <h2 className="font-serif font-normal leading-[1.08] text-white mb-6" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}>
                        Valorize quem realmente{" "}
                        <em className="italic" style={{ color: "var(--color-mist)" }}>faz acontecer.</em>
                    </h2>
                    <p className="text-lg leading-relaxed mb-4 text-white/80 max-w-lg">                        Empresas crescem quando reconhecem quem está todos os dias
                        construindo resultados de verdade. Funcionários dedicados,
                        comprometidos e proativos não devem passar despercebidos.
                    </p>
                    <p className="mb-8 text-white/55 max-w-lg">                        Valorizar o esforço certo não é apenas justiça — é estratégia.
                        Ambientes que reconhecem talento geram mais produtividade,
                        mais engajamento e menos rotatividade.
                    </p>

                  

                  
                </div>
            </div>
        </section>
    )
}