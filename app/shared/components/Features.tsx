import { FEATURES } from "../utils/features";

export default function Features() {
  return (
    <section id="funcionalidades" style={{ padding: "5rem 1.5rem", background: "var(--background)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: "var(--color-mist)", background: "var(--color-soft)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-cta)" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-primary)" }}>Funcionalidades</span>
          </div>
          <h2 className="font-serif font-normal" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--color-navy)", marginBottom: "1rem" }}>
            Tudo que sua equipe precisa para <em className="italic" style={{ color: "var(--color-cta)" }}>crescer</em>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-stone)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>            Ferramentas que grandes empresas usam, agora acessíveis para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div key={i} className="card" style={{ position: "relative" }}>
              <span style={{ position: "absolute", top: "1.25rem", right: "1.25rem", fontSize: "0.7rem", fontWeight: 700, color: "var(--color-mist)", letterSpacing: "0.05em" }}>
                0{i + 1}
              </span>              <div style={{
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
<h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>                {feature.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-stone)", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}