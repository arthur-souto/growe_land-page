"use client"
import { STEPS } from "./shared/steps"
import { FEATURES } from "./shared/features"
import { STATS } from "./shared/stats"
import { GroweIcon } from "./shared/growe.icon"
import { LeadForm } from "./shared/lead-form"

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-green-sm">
        <a href="/" className="flex items-center gap-3 no-underline">
          <GroweIcon size={36} />
          <span className="font-(--font-display) text-[1.5rem] text-(--color-forest) tracking-tight">Growe</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#como-funciona" className="text-(--color-forest) hover:text-(--color-mid) font-medium transition-colors">Como funciona</a>
          <a href="#funcionalidades" className="text-(--color-forest) hover:text-(--color-mid) font-medium transition-colors">Funcionalidades</a>
          <a href="#cadastro" className="btn btn-soft btn-sm">Entrar em contato</a>
          <a href="#cadastro" className="btn btn-primary btn-sm">Cadastrar</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white px-6 pt-20 pb-16">
        {/* Decoração de fundo */}
        <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full bg-(--color-soft) opacity-60 z-0" />
        <div className="absolute -bottom-20 -left-20 w-75 h-75 rounded-full bg-(--color-soft) opacity-40 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <span className="inline-flex items-center gap-2 text-(--color-primary) font-medium text-sm mb-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="var(--color-primary)" strokeWidth="1.5"/>
                  <path d="M7 4v3l2 2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Acesso antecipado aberto
              </span>
              <h1 className="text-4xl md:text-5xl font-normal mb-6 text-(--color-forest) leading-tight">
                Sua equipe cresce. <span className="italic text-(--color-mid)">Você enxerga.</span>
              </h1>
              <p className="text-[1.125rem] text-(--color-stone) leading-relaxed mb-10 max-w-120">
                Growe é a plataforma de avaliação e gestão de desempenho feita para pequenas e médias empresas brasileiras. Simples de usar, poderosa nos resultados.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#cadastro" className="btn btn-primary btn-lg">Quero acesso antecipado</a>
                <a href="#como-funciona" className="btn btn-outline btn-lg">Ver como funciona</a>
              </div>
              <div className="flex gap-6 mt-8 pt-8 border-t border-(--color-soft)">
                <div>
                  <div className="font-(--font-display) text-2xl text-(--color-primary)">500+</div>
                  <div className="text-xs text-(--color-pebble)">empresas na lista de espera</div>
                </div>
                <div className="w-px bg-(--color-soft)" />
                <div>
                  <div className="font-(--font-display) text-2xl text-(--color-primary)">4.9★</div>
                  <div className="text-xs text-(--color-pebble)">avaliação dos beta testers</div>
                </div>
                <div className="w-px bg-(--color-soft)" />
                <div>
                  <div className="font-(--font-display) text-2xl text-(--color-primary)">100%</div>
                  <div className="text-xs text-(--color-pebble)">gratuito para começar</div>
                </div>
              </div>
            </div>
            {/* Formulário hero */}
            <div id="cadastro" className="bg-white border border-(--color-mist) rounded-3xl p-8 shadow-green-lg">
              <div className="mb-6">
                <GroweIcon size={48} />
                <h2 className="font-(--font-display) text-xl text-(--color-forest) mt-4 mb-1">Entre na lista de espera</h2>
                <p className="text-sm text-(--color-stone)">Seja um dos primeiros a usar a Growe gratuitamente.</p>
              </div>
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "var(--color-forest)", padding: "3.5rem 1.5rem" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "var(--color-leaf)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--color-mist)", lineHeight: 1.5 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" style={{ padding: "5rem 1.5rem", background: "var(--color-cloud)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>Como funciona</span>
            <h2 className="display-md" style={{ marginBottom: "1rem" }}>
              Do cadastro ao crescimento em 4 passos
            </h2>
            <p style={{ color: "var(--color-stone)", maxWidth: "520px", margin: "0 auto" }}>
              Configuração simples, resultado rápido. Em menos de uma tarde você já tem sua primeira avaliação rodando.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ position: "relative" }}>
                {/* Linha conectora */}
                {i < STEPS.length - 1 && (
                  <div style={{
                    position: "absolute",
                    top: "1.75rem",
                    right: "-0.75rem",
                    width: "1.5rem",
                    height: "1px",
                    background: "var(--color-mist)",
                    zIndex: 1,
                  }} />
                )}
                <div className="card" style={{ height: "100%" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--color-soft)",
                    border: "1px solid var(--color-mist)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--color-primary)",
                  }}>
                    {step.number}
                  </div>
                  <h3 style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-forest)",
                    marginBottom: "0.5rem",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-stone)", lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNCIONALIDADES ── */}
      <section id="funcionalidades" style={{ padding: "5rem 1.5rem", background: "var(--color-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>Funcionalidades</span>
            <h2 className="display-md" style={{ marginBottom: "1rem" }}>
              Tudo que sua equipe precisa para crescer
            </h2>
            <p style={{ color: "var(--color-stone)", maxWidth: "520px", margin: "0 auto" }}>
              Ferramentas que grandes empresas usam, agora acessíveis para o seu negócio.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}>
            {FEATURES.map((feature, i) => (
              <div key={i} className="card">
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--color-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-forest)",
                  marginBottom: "0.5rem",
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-stone)", lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA / SOLUÇÃO ── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--color-soft)" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: "1.5rem" }}>O problema</span>
            <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
              Gerenciar pessoas não deveria ser tão difícil
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Avaliações feitas em planilhas que ninguém atualiza",
                "Sem histórico — você não sabe quem evoluiu ou piorou",
                "Feedback informal, sem critério, sem evidência",
                "Decisões de promoção baseadas em feeling, não em dados",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    borderRadius: "50%",
                    background: "#FCEBEB",
                    border: "1px solid #F09595",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2L2 8" stroke="var(--color-danger)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "var(--color-stone)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="badge badge-mid" style={{ marginBottom: "1.5rem", color: "white" }}>A solução</span>
            <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
              Com Growe, você tem clareza total do seu time
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Avaliações estruturadas e automáticas em ciclos regulares",
                "Histórico completo de evolução de cada colaborador",
                "Feedback documentado com critérios e evidências claras",
                "Decisões baseadas em dados reais e métricas objetivas",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    borderRadius: "50%",
                    background: "var(--color-soft)",
                    border: "1px solid var(--color-mist)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "var(--color-stone)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{
        padding: "5rem 1.5rem",
        background: "var(--color-forest)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <GroweIcon size={56} />
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--color-soft)",
            lineHeight: 1.2,
            margin: "1.5rem 0 1rem",
          }}>
            Pronto para ver sua equipe crescer?
          </h2>
          <p style={{
            color: "var(--color-mist)",
            fontSize: "1rem",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}>
            Entre na lista de espera e seja um dos primeiros a transformar a gestão de pessoas da sua empresa.
          </p>

          <div style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(192,221,151,0.2)",
            borderRadius: "20px",
            padding: "2rem",
          }}>
            <LeadForm variant="cta" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "2rem 1.5rem",
        background: "var(--color-ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <GroweIcon size={28} />
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            color: "var(--color-soft)",
          }}>
            Growe
          </span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--color-pebble)" }}>
          © {new Date().getFullYear()} Growe. Todos os direitos reservados.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ fontSize: "0.8rem", color: "var(--color-pebble)", textDecoration: "none" }}>
            Privacidade
          </a>
          <a href="#" style={{ fontSize: "0.8rem", color: "var(--color-pebble)", textDecoration: "none" }}>
            Termos
          </a>
          <a href="mailto:contato@growe.com.br" style={{ fontSize: "0.8rem", color: "var(--color-mist)", textDecoration: "none" }}>
            contato@growe.com.br
          </a>
        </div>
      </footer>

    </div>
  )
}