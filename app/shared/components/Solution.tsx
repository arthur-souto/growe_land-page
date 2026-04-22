export default function Solution() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "var(--color-navy)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,122,181,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,122,181,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* 🔥 GRID AJUSTADO */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-16 items-stretch">

        {/* 🔻 PROBLEMA */}
        <div className="pr-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: "rgba(143,35,35,0.2)", border: "1px solid rgba(240,149,149,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F09595" }}>
              O problema
            </span>
          </div>

          <h2 className="font-serif font-normal mb-7" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "white" }}>
            Gerenciar pessoas não deveria ser <em className="italic" style={{ color: "#F09595" }}>tão difícil</em>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Avaliações feitas em planilhas que ninguém atualiza",
              "Sem histórico — você não sabe quem evoluiu ou piorou",
              "Feedback informal, sem critério, sem evidência",
              "Decisões de promoção baseadas em feeling, não em dados",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: "20px", height: "20px", minWidth: "20px", borderRadius: "50%", background: "rgba(143,35,35,0.35)", border: "1px solid rgba(240,149,149,0.5)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2L2 8" stroke="#F09595" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 LINHA DIVISÓRIA */}
        <div className="hidden md:block w-px bg-white/10" />

        {/* 🔻 SOLUÇÃO */}
        <div className="pl-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: "rgba(26,86,168,0.3)", border: "1px solid rgba(74,122,181,0.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-mist)" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-mist)" }}>
              A solução
            </span>
          </div>

          <h2 className="font-serif font-normal mb-7" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "white" }}>
            Com Growe, você tem <em className="italic" style={{ color: "var(--color-mist)" }}>clareza total</em> do seu time
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Avaliações estruturadas e automáticas em ciclos regulares",
              "Histórico completo de evolução de cada colaborador",
              "Feedback documentado com critérios e evidências claras",
              "Decisões baseadas em dados reais e métricas objetivas",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: "20px", height: "20px", minWidth: "20px", borderRadius: "50%", background: "var(--color-soft)", border: "1px solid var(--color-mist)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}