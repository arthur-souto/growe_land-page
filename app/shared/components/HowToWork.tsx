import { FEATURES } from "../utils/features"
import { STEPS } from "../utils/steps"

export default function HowToWork() {
    return (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} style={{ position: "relative" }}>
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
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-forest)", marginBottom: "0.5rem" }}>
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