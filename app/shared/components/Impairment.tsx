export default function Impairment() {  
    return (
         <section style={{ background: "var(--color-cloud)", padding: "3rem 1.5rem" }}>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
                  <div>
                    <span className="hero-eyebrow">Cultura que transforma</span>
                    <h2 className="display-md mb-6">
                      Valorize quem realmente faz acontecer
                    </h2>
                    <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-stone)" }}>
                      Empresas crescem quando reconhecem quem está todos os dias
                      construindo resultados de verdade. Funcionários dedicados,
                      comprometidos e proativos não devem passar despercebidos.
                    </p>
                    <p className="mb-8" style={{ color: "var(--color-pebble)" }}>
                      Valorizar o esforço certo não é apenas justiça — é estratégia.
                      Ambientes que reconhecem talento geram mais produtividade,
                      mais engajamento e menos rotatividade.
                    </p>
                  </div>
        
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[24px] blur-2xl opacity-60" style={{ background: "var(--color-soft)" }} />
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                      alt="Funcionário dedicado trabalhando"
                      className="relative rounded-[20px] object-cover w-full h-[260px] sm:h-[320px] md:h-[420px]"
                      style={{ boxShadow: "var(--shadow-green-lg)" }}
                    />
                  </div>
                </div>
              </section>
    )
}