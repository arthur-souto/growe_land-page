"use client"
import { useState } from "react"
import { STEPS } from "./shared/steps"
import { FEATURES } from "./shared/features"
import { STATS } from "./shared/stats"
import { GroweIcon } from "./shared/growe.icon"
import { LeadForm } from "./shared/lead-form"
import { FaWhatsapp } from "react-icons/fa"


export default function Page() {

  const [navOpen, setNavOpen] = useState(false)
  const WHATSAPP_NUMBER = "+555193953661"; // número real
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Oi! Quero participar do desenvolvimento da Growe 🌱"
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;


  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path
            d="M8 1.5L10 5.5L14.5 6.2L11.25 9.3L12 14L8 11.75L4 14L4.75 9.3L1.5 6.2L6 5.5L8 1.5Z"
            fill="#27500A"
          />
        </svg>
      ),
      title: "Acesso exclusivo",
      description: "Primeiros a testar cada funcionalidade",
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <circle cx="8" cy="6" r="3" fill="#27500A" />
          <path
            d="M2 13c0-2.8 2.7-5 6-5s6 2.2 6 5"
            stroke="#27500A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Voz ativa",
      description: "Suas sugestões moldam o produto",
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <rect x="2" y="2" width="12" height="12" rx="3" fill="#27500A" />
          <path
            d="M5 8l2 2 4-4"
            stroke="#EAF3DE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Sem compromisso",
      description: "Participe no seu ritmo, quando quiser",
    },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <nav className="bg-white shadow-green-sm">
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

          {/* Mobile hamburger */}
          <button
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden btn-ghost p-2 rounded-md"
          >
            {navOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="var(--color-forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white px-6 pt-20 pb-16">
        {/* Decoração de fundo (esconder em telas pequenas) */}
        <div className="hidden md:block absolute -top-32 -right-32 w-40 h-40 rounded-full bg-(--color-soft) opacity-60 z-0" />
        <div className="hidden md:block absolute -bottom-20 -left-20 w-32 h-32 rounded-full bg-(--color-soft) opacity-40 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <span className="inline-flex items-center gap-2 text-(--color-primary) font-medium text-sm mb-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="var(--color-primary)" strokeWidth="1.5" />
                  <path d="M7 4v3l2 2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Acesso antecipado aberto
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xlfont-normal mb-6 text-(--color-forest) leading-tight">
                Sua equipe cresce. <span className="italic text-(--color-mid)">Você enxerga.</span>
              </h1>
              <p className="text-[1.125rem] text-(--color-stone) leading-relaxed mb-10 max-w-xl">
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
            <div id="cadastro" className="bg-white border border-(--color-mist) rounded-3xl p-5 sm:p-6 md:p-8shadow-green-lg">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="stat-value" style={{ color: 'var(--color-leaf)' }}>{stat.value}</div>
              <div className=" text-white ">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/*Desempenho do funcionário */}
      <section className="w-full py-12 px-6 bg-[var(--color-cloud)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <span className="hero-eyebrow">
              Cultura que transforma
            </span>

            <h2 className="display-md mb-6">
              Valorize quem realmente faz acontecer
            </h2>

            <p className="text-[var(--color-stone)] mb-6 text-lg leading-relaxed">
              Empresas crescem quando reconhecem quem está todos os dias
              construindo resultados de verdade. Funcionários dedicados,
              comprometidos e proativos não devem passar despercebidos.
            </p>

            <p className="text-[var(--color-pebble)] mb-8">
              Valorizar o esforço certo não é apenas justiça — é estratégia.
              Ambientes que reconhecem talento geram mais produtividade,
              mais engajamento e menos rotatividade.
            </p>


          </div>

          {/* IMAGEM */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--color-soft)] rounded-[24px] blur-2xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Funcionário dedicado trabalhando"
              className="relative rounded-[20px] shadow-[var(--shadow-green-lg)] object-cover w-full h-[260px] sm:h-[320px] md:h-[420px]" />
          </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">            {STEPS.map((step, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Linha conectora */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block" style={{
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                      <path d="M2 2l6 6M8 2L2 8" stroke="var(--color-danger)" strokeWidth="1.5" strokeLinecap="round" />
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
                      <path d="M2 5l2.5 2.5L8 2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "var(--color-stone)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/*whatsapp*/}
      <section className="py-20 px-6 bg-[var(--color-cloud)]">
        <div className="max-w-2xl mx-auto text-center">

          {/* contato */}
          <div id="contato" className="hero-eyebrow justify-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Acesso antecipado
          </div>

          {/* Título */}
          <h2 className={`
            text-[#27500A] mb-4
            transition-all duration-500 delay-100
           
          `}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Participe do{" "}
            <em className="italic text-[#3B6D11]">desenvolvimento</em>
            <br />
            da ideia!
          </h2>

          {/* Descrição */}
          <p
            className={`
            text-[#3D4338] text-base leading-relaxed mb-10 
            transition-all duration-500 delay-150 
            
          `}
          >
            Estamos construindo algo novo e queremos você nessa jornada desde o
            início. Compartilhe suas ideias, dê feedback real e ajude a moldar uma
            ferramenta feita para quem realmente importa — você.
          </p>


          {/* Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="
        flex items-center gap-4
        bg-[#EAF3DE] border border-[#C0DD97]
        rounded-[16px] p-5
      "
              >
                <div className="w-10 h-10 bg-[#97C459] rounded-xl flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>

                <div className="flex flex-col">
                  <strong className="text-base font-semibold text-[#27500A] leading-tight">
                    {b.title}
                  </strong>
                  <span className="text-sm text-[#639922] leading-snug">
                    {b.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-none border-t border-[#EAF3DE] mb-8" />

          {/** CARD WHATSSAP */}
          <div
            className=" bg-[#27500A] rounded-[20px] p-7
            flex flex-col items-center justify-center text-center gap-4 "
          >
            <div>
              <strong className="block text-[#EAF3DE] text-lg font-semibold mb-1">
                Fale direto com a gente
              </strong>
              <span className="text-[#97C459] text-sm">
                Resposta em até 24 horas
              </span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center gap-2.5
      bg-[#25D366] hover:bg-[#1ebe5d]
      text-white text-sm font-bold
      px-6 py-3.5 rounded-full
      transition-all duration-150
      hover:-translate-y-0.5
      active:scale-95
    "
            >
              <FaWhatsapp />
              Entrar no WhatsApp
            </a>
          </div>

          {/* Confiança */}
          <p className="text-xs text-[var(--color-pebble)] mt-6">
            Sem spam. Somente conversas importantes sobre o projeto.
          </p>

        </div>
      </section>


      {/* ── CTA FINAL ── */}
      <section id="cadastro2"
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-forest)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>

          {/* Ícone centralizado */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GroweIcon size={56} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--color-soft)",
              lineHeight: 1.2,
              margin: "1.5rem 0 1rem",
            }}
          >
            Pronto para ver sua equipe crescer?
          </h2>

          <p
            style={{
              color: "var(--color-mist)",
              fontSize: "1rem",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            Entre na lista de espera...
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(192,221,151,0.2)",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <LeadForm variant="cta" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 px-6 bg-[var(--color-ink)] flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left items-center justify-between gap-4">
        <div className="flex items-center gap-3">
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
        <div className="flex gap-6">
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