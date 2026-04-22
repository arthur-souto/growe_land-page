import { STEPS } from "../utils/steps"

export default function HowToWork() {
  return (
    <section id="como-funciona" style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: "var(--color-mist)", background: "var(--color-soft)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-cta)" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-primary)" }}>Como funciona</span>
          </div>
          <h2 className="font-serif font-normal" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--color-navy)", marginBottom: "1rem" }}>
            Do cadastro ao crescimento <em className="italic" style={{ color: "var(--color-cta)" }}>em 4 passos</em>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-stone)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Configuração simples, resultado rápido. Em menos de uma tarde você já tem sua primeira avaliação rodando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div key={i} style={{ position: "relative" }}>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block" style={{
                  position: "absolute",
                  top: "1.75rem",
                  right: "-0.75rem",
                  width: "1.5rem",
                  height: "1px",
                  background: "linear-gradient(90deg, var(--color-mist), transparent)",
                  zIndex: 1,
                }} />
              )}
              <div className="card" style={{ height: "100%", position: "relative" }}>
                <span style={{ position: "absolute", top: "1.25rem", right: "1.25rem", fontSize: "0.7rem", fontWeight: 700, color: "var(--color-mist)", letterSpacing: "0.05em" }}>
                  0{i + 1}
                </span>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, var(--color-soft) 0%, #dceeff 100%)",
                  border: "1px solid var(--color-mist)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "var(--color-cta)",
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>
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
  )
}