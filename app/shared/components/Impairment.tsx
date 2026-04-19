export default function Impairment() {
    return (
        <section
            className="relative py-24 px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692')" }}
        >
            {/* gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-(--color-navy) via-(--color-navy)/75 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="max-w-xl">
                    <span className="hero-eyebrow">Cultura que transforma</span>
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Valorize quem realmente faz acontecer
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 text-white/85">
                        Empresas crescem quando reconhecem quem está todos os dias
                        construindo resultados de verdade. Funcionários dedicados,
                        comprometidos e proativos não devem passar despercebidos.
                    </p>
                    <p className="mb-8 text-white/65">
                        Valorizar o esforço certo não é apenas justiça — é estratégia.
                        Ambientes que reconhecem talento geram mais produtividade,
                        mais engajamento e menos rotatividade.
                    </p>
                </div>
            </div>
        </section>
    )
}